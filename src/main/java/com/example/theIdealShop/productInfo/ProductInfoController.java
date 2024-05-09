package com.example.theIdealShop.productInfo;

import com.example.theIdealShop.productInfo.ProductInfo;
import com.example.theIdealShop.productInfo.ProductInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;

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
    public List<ProductInfo> getProductsInfos(){ //
        return productInfoService.getProductsInfos();
    }
    
    @CrossOrigin
    @PostMapping("/")
    public void registerNewProduct(@RequestBody ProductInfo productInfo) {
        productInfoService.addNewProductInfo(productInfo);
    }
}
