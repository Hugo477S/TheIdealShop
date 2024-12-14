package com.example.theIdealShop.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.theIdealShop.domain.CategoriePlat;
import com.example.theIdealShop.productVitamin.PV;

@CrossOrigin(origins="https://theidealshop.onrender.com")
@RestController
@RequestMapping() // localhost puis api...
public class ProductController {

    private final ProductService productService;

    @Autowired // Means StudentService just above has to be autowired for us => StudentService has to get the service annotation component to be made into a bean
    public ProductController(ProductService productService){
        this.productService = productService;
    }


    @CrossOrigin(origins = "/") 
    @GetMapping("/")
    public List<Product> getProducts(){ //
        return productService.getProducts();
    }

    @CrossOrigin(origins = "/{id}") 
    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable("id") Integer id){
        return productService.getProductById(id);
    }

    @CrossOrigin(origins = "*") 
    @GetMapping("/cat")
    public List<Product> searchProductsByCat(@RequestParam(required = false) CategoriePlat categoriePlat){
        return productService.searchProductsByCat(categoriePlat);
    }

    @CrossOrigin(origins = "/macros") 
    @GetMapping("/macros")
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
        ){
        return productService.searchProductsByMacros(categoriePlat, minCalo, maxCalo, minCarb,
        maxCarb, minProt, maxProt, minFib, maxFib);
    }

    @CrossOrigin(origins = "/") 
    @PostMapping("/")
    public void registerNewProduct(@RequestBody Product product) {
        productService.addNewProduct(product);
    }

    @CrossOrigin(origins = "/many") 
    @PostMapping("/many")
    public void registerNewProducts(@RequestBody List<Product> productList) {
        productService.addNewProducts(productList);
    }

    @DeleteMapping(path = "/{productId}")
    public void deleteProduct(@PathVariable("productId") Long productId) {
        productService.deleteProduct(productId);
    }

    @PutMapping(path = "/{productId}")
    public Product updateProduct (
            @PathVariable("productId") Long id,

            @RequestBody PV pV
            ) {
       return productService.updateProduct(id, pV);
    }


}
