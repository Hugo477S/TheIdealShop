package com.example.theIdealShop.productInfo;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductInfoService {

    private final PMRepository pmRepository;
    @Autowired
    public ProductInfoService(PMRepository pmRepository) {
        this.pmRepository = pmRepository;
    }

    public List<PM> getProductsInfos(){
        return pmRepository.findAll();
    }

    public void deleteProductInfo(Long id, Date received, Date put_on_shelf, Date dop) {
        boolean exists = pmRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("ProductInfo with id " + id + "doesn't exist");
        }

        pmRepository.deleteById(id);
    }

    public void addNewProductInfo(PM productInfo) {
     /*    Optional<ProductInfo> productInfoOptional = productInfoRepository
                .findProductInfoByName(productInfo.getName());
        if(productInfoOptional.isPresent()) {
            throw new IllegalStateException("Product already there !");
        }*/
        pmRepository.save(productInfo);
    }
}
