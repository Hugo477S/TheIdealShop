package com.example.theIdealShop.productStock;

import com.example.theIdealShop.product.Product;
import com.example.theIdealShop.productStock.ProductStock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;

import java.util.List;
import java.util.Optional;

public interface ProductStockRepository extends JpaRepository<ProductStock, Long> {
        LocalDate localDate = LocalDate.now();

        Optional<ProductStock> findByProductName(String productName);
        List<ProductStock> findByDopAndProductId(LocalDate dop, Long productId);
        List<ProductStock> findByDopLessThan(LocalDate localDate);
}
