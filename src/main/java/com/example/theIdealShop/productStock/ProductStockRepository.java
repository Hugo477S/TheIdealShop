package com.example.theIdealShop.productStock;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductStockRepository extends JpaRepository<ProductStock, Long> {
        LocalDate localDate = LocalDate.now();

        Optional<ProductStock> findByProductProductName(String productName);
        List<ProductStock> findByDopAndProductId(LocalDate dop, Long productId);
        List<ProductStock> findByDopLessThan(LocalDate localDate);
}
