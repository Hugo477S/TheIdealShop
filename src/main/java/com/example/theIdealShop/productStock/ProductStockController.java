package com.example.theIdealShop.productStock;

import com.example.theIdealShop.product.Product;
import com.example.theIdealShop.productInfo.ProductInfo;
import com.example.theIdealShop.productInfo.ProductInfoService;
import com.example.theIdealShop.productStock.ProductStock;
import com.example.theIdealShop.productStock.ProductStockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;

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
