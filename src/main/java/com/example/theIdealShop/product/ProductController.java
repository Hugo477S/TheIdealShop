package com.example.theIdealShop.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
//@RequestMapping(path="api/v1/product") // localhost puis api...
public class ProductController {

    private final ProductService productService;

    @Autowired // Means StudentService just above has to be autowired for us => StudentService has to get the service annotation component to be made into a bean
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping("/")
    public List<Product> getProducts(){ //
        return productService.getProducts();
    }
    @PostMapping("/")
    public void registerNewProduct(@RequestBody Product product) {
        productService.addNewProduct(product);
    }

    @DeleteMapping(path = "/{productId}")
    public void deleteProduct(@PathVariable("productId") Long productId) {
        productService.deleteProduct(productId);
    }
    @PutMapping(path = "/{productId}")
    public void updateProduct (
            @PathVariable("productId") Long id,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Boolean animal_respect,
            @RequestParam(required = false) Boolean local,
            @RequestParam(required = false) Boolean national
            ) {
        productService.updateProduct(id, name, animal_respect, local, national);
    }

}
