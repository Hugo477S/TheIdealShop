package com.example.theIdealShop.product;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

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

    public void addNewProduct(Product product) {
        Optional<Product> productOptional = productRepository
                .findProductById(product.getId());
        if(productOptional.isPresent()) {
            throw new IllegalStateException("Product already there !");
        }
        productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        boolean exists = productRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("student with id " + id + "doesn't exist");
        }
        productRepository.deleteById(id);
    }
    @Transactional
    public void updateProduct(Long id, String name, Boolean animal_respect, Boolean local, Boolean national) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "student with id " + id + "doesnt exist"
                ));

        if (name != null
                && !name.isEmpty() &&
                !Objects.equals(product.getName(), name)) {
            product.setName(name);
        }
        System.out.println(product);
    }

}
