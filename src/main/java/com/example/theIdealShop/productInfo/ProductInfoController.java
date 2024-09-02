package com.example.theIdealShop.productInfo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/v1/productInfo")
public class ProductInfoController {

    private final ProductInfoService productInfoService;

    @Autowired // Means StudentService just above has to be autowired for us => StudentService has to get the service annotation component to be made into a bean
    public ProductInfoController(ProductInfoService productInfoService){
        this.productInfoService = productInfoService;
    }

    @CrossOrigin
    @GetMapping("/")
    public List<PM> getProductsInfos(){ //
        return productInfoService.getProductsInfos();
    }  
    
    @CrossOrigin
    @PostMapping("/")
    public void registerNewProduct(@RequestBody PM productInfo) {
        productInfoService.addNewProductInfo(productInfo);
    }
}
