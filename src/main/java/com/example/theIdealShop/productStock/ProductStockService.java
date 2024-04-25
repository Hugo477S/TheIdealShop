package com.example.theIdealShop.productStock;

import com.example.theIdealShop.product.Product;
import com.example.theIdealShop.productStock.ProductStock;
import com.example.theIdealShop.productStock.ProductStockRepository;
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
        ProductStock sameProdIdOrNot = productStockRepository.findByProductName(deliName)
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
