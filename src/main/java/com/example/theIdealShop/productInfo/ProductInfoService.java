package com.example.theIdealShop.productInfo;

import com.example.theIdealShop.productInfo.ProductInfo;
import com.example.theIdealShop.productInfo.ProductInfoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ProductInfoService {

    private final ProductInfoRepository productInfoRepository;
    @Autowired
    public ProductInfoService(ProductInfoRepository productInfoRepository) {
        this.productInfoRepository = productInfoRepository;
    }

    public List<ProductInfo> getProductsInfos(){
        return productInfoRepository.findAll();
    }

    public void deleteProductInfo(Long id, Date received, Date put_on_shelf, Date dop) {
        boolean exists = productInfoRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("ProductInfo with id " + id + "doesn't exist");
        }

        productInfoRepository.deleteById(id);
    }
/*
    public void addNewProduct(ProductInfo productInfo) {
        Optional<ProductInfo> productInfoOptional = productInfoRepository
                .findProductInfoByName(productInfo.getName());
        if(productInfoOptional.isPresent()) {
            throw new IllegalStateException("Product already there !");
        }
        productRepository.save(product);
    }*/
}
