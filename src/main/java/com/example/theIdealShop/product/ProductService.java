package com.example.theIdealShop.product;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.theIdealShop.domain.CategoriePlat;
import com.example.theIdealShop.productVitamin.PV;

import jakarta.transaction.Transactional;


@Service
public class ProductService {

    private final ProductRepository productRepository;
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Integer id){
        return productRepository.findById(id);
    }

    public List<Product> searchProductsByCat(@RequestParam(required = false) CategoriePlat categoriePlat) {
        if(Objects.nonNull(categoriePlat)){
            return productRepository.findByCategoriePlat(categoriePlat);
        } else {
            return productRepository.findAll();
        }
    }

    public List<Product> searchProductsByMacros(
        @RequestParam(required = false) CategoriePlat categoriePlat,
        @RequestParam(required = false) Float minCalo,
        @RequestParam(required = false) Float maxCalo,
        @RequestParam(required = false) Float minCarb,
        @RequestParam(required = false) Float maxCarb,
        @RequestParam(required = false) Float minProt,
        @RequestParam(required = false) Float maxProt,
        @RequestParam(required = false) Float minFib,
        @RequestParam(required = false) Float maxFib
        ) {
        if(Objects.nonNull(categoriePlat)){
            if(Objects.nonNull(minCalo) && Objects.nonNull(maxCalo)) {
                if(Objects.nonNull(minCarb) && Objects.nonNull(maxCarb)) {
                    if(Objects.nonNull(minProt) && Objects.nonNull(maxProt)) {
                        if(Objects.nonNull(minFib) && Objects.nonNull(maxFib)) {
                            return productRepository.findByCategoriePlatAndPmCaloBetweenAndPmCarbBetweenAndPmProtBetweenAndPmFibBetween(
                                categoriePlat, minCalo, maxCalo, minCarb, maxCarb, minProt, maxProt, minFib, maxFib
                            );
                        }
                        return productRepository.findByCategoriePlatAndPmCaloBetweenAndPmCarbBetweenAndPmProtBetween(
                            categoriePlat, minCalo, maxCalo, minCarb, maxCarb, minProt, maxProt
                        );
                    } else if(Objects.nonNull(minFib) && Objects.nonNull(maxFib)) {
                        return productRepository.findByCategoriePlatAndPmCaloBetweenAndPmCarbBetweenAndPmFibBetween(categoriePlat, minCalo, maxCalo, minCarb, maxCarb, minFib, maxFib);
                    }
                    return productRepository.findByCategoriePlatAndPmCaloBetweenAndPmCarbBetween(categoriePlat, minCalo, maxCalo, minCarb, maxCarb);
                } else if(Objects.nonNull(minProt) && Objects.nonNull(maxProt)) {
                    if(Objects.nonNull(minFib) && Objects.nonNull(maxFib)) {
                        return productRepository.findByCategoriePlatAndPmCaloBetweenAndPmProtBetweenAndPmFibBetween(categoriePlat, minCalo, maxCalo, minProt, maxProt, minFib, maxFib);
                    }
                    return productRepository.findByCategoriePlatAndPmCaloBetweenAndPmProtBetween(categoriePlat, minCalo, maxCalo, minProt, maxProt);
                } else if(Objects.nonNull(minFib) && Objects.nonNull(maxFib)) {
                    return productRepository.findByCategoriePlatAndPmCaloBetweenAndPmFibBetween(categoriePlat, minCalo, maxCalo, minFib, maxFib);
                }
                return productRepository.findByCategoriePlatAndPmCaloBetween(categoriePlat, minCalo, maxCalo);
            } else if (Objects.nonNull(minCarb) && Objects.nonNull(maxCarb)) {
                if(Objects.nonNull(minProt) && Objects.nonNull(maxProt)) {
                    if(Objects.nonNull(minFib) && Objects.nonNull(maxFib)) {
                        return productRepository.findByCategoriePlatAndPmCarbBetweenAndPmProtBetweenAndPmFibBetween(categoriePlat, minCarb, maxCarb, minProt, maxProt, minFib, maxFib);
                    }
                    return productRepository.findByCategoriePlatAndPmCarbBetweenAndPmProtBetween(categoriePlat, minCarb, maxCarb, minProt, maxProt);
                } else if(Objects.nonNull(minFib) && Objects.nonNull(maxFib)) {
                    return productRepository.findByCategoriePlatAndPmCarbBetweenAndPmFibBetween(categoriePlat, minCarb, maxCarb, minFib, maxFib);
                }
                return productRepository.findByCategoriePlatAndPmCarbBetween(categoriePlat, minCarb, maxCarb);
            } else if(Objects.nonNull(minProt) && Objects.nonNull(maxProt)) {
                if(Objects.nonNull(minFib) && Objects.nonNull(maxFib)) {
                    return productRepository.findByCategoriePlatAndPmProtBetweenAndPmFibBetween(categoriePlat, minProt, maxProt, minFib, maxFib);
                }
                return productRepository.findByCategoriePlatAndPmProtBetween(categoriePlat, minProt, maxProt);
            } else if(Objects.nonNull(minFib) && Objects.nonNull(maxFib)) {
                return productRepository.findByCategoriePlatAndPmFibBetween(categoriePlat, minFib, maxFib);
            }
            return productRepository.findByCategoriePlat(categoriePlat);
        } 
        return productRepository.findAll();
    }


    public void addNewProduct(Product product) {
     /*Optional<Product> productOptional = productRepository
                .findById(product.getId());
        if(productOptional.isPresent()) {
            throw new IllegalStateException("Product already there !");
        }*/
        productRepository.save(product);
    }

    public void addNewProducts(List <Product> productList) {
        /*Optional<Product> productOptional = productRepository
                   .findById(product.getId());
           if(productOptional.isPresent()) {
               throw new IllegalStateException("Product already there !");
           }*/
           productRepository.saveAll(productList);
       }

    public void deleteProduct(Long id) {
        boolean exists = productRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("student with id " + id + "doesn't exist");
        }
        productRepository.deleteById(id);
    }
    @Transactional
    public Product updateProduct(Long id, PV pV) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "product with id " + id + "doesnt exist"
                ));

        product.setPV(pV);
        
        return productRepository.save(product);
    }

    


	




}