package com.example.theIdealShop.productStock;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/v1/productStock")
public class ProductStockController {

    private final ProductStockService productStockService;

    @Autowired // Means StudentService just above has to be autowired for us => StudentService has to get the service annotation component to be made into a bean
    public ProductStockController(ProductStockService productStockService){
        this.productStockService = productStockService;
    }

    @GetMapping("/")
    public List<ProductStock> getPeremptedProducts(){ //
        return productStockService.findPeremptedProducts();
    }

    @PostMapping("/")
    public void AddNewProductStock(@RequestBody ProductStock productStock, @RequestParam(required = true) String deliName ) {
        productStockService.addProductStock(productStock, deliName);
        return;
    }

}
