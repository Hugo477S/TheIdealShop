package com.example.theIdealShop.productStock;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductStockService {

    private final ProductStockRepository productStockRepository;
    @Autowired
    public ProductStockService(ProductStockRepository productStockRepository) {
        this.productStockRepository = productStockRepository;
    }

    public List<ProductStock> findPeremptedProducts () {
        List<ProductStock> perempted = productStockRepository.findByDopLessThan(LocalDate.now());
        return perempted;
    }

    public void addProductStock(ProductStock productStock, String deliName) {
        ProductStock sameProdIdOrNot = productStockRepository.findByProductProductName(deliName)
                .orElseThrow(() -> new IllegalStateException(
                "student with id " + deliName + "doesnt exist"
        ));
      if(sameProdIdOrNot.getDop().isEqual(productStock.getDop())){
          sameProdIdOrNot.setQuantity(sameProdIdOrNot.getQuantity() + productStock.getQuantity());
        productStockRepository.save(sameProdIdOrNot);
      } else {
          productStockRepository.save(productStock);
      }
    }

}
