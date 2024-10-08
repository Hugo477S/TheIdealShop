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

@RestController
@RequestMapping() // localhost puis api...
public class ProductController {

    private final ProductService productService;

    @Autowired // Means StudentService just above has to be autowired for us => StudentService has to get the service annotation component to be made into a bean
    public ProductController(ProductService productService){
        this.productService = productService;
    }


    @CrossOrigin
    @GetMapping("/")
    public List<Product> getProducts(){ //
        return productService.getProducts();
    }

    @GetMapping("/a")
    public String cronJob(){ 
        return "a";
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable("id") Integer id){
        return productService.getProductById(id);
    }

    @CrossOrigin
    @GetMapping("/cat")
    public List<Product> searchProductsByCat(@RequestParam(required = false) CategoriePlat categoriePlat){
        return productService.searchProductsByCat(categoriePlat);
    }


    @CrossOrigin
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

    @CrossOrigin
    @PostMapping("/")
    public void registerNewProduct(@RequestBody Product product) {
        productService.addNewProduct(product);
    }

    @CrossOrigin
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

 
/* 
    @CrossOrigin
    @GetMapping(path = "/searchVit")
    public List<Product> findByProductByVitamins(
        @RequestParam(required = false) Double a,
        @RequestParam(required = false) Double b,
        @RequestParam(required = false) Double c,
        @RequestParam(required = false) Double d,
        @RequestParam(required = false) Double e,
        @RequestParam(required = false) Double k
    ){
        return productService.findByProductByVitamins(a, b, c, d, e, k);
    }*/

}
