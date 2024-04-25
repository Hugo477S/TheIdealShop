package com.example.theIdealShop.productInfo;

import com.example.theIdealShop.product.Product;
import com.example.theIdealShop.productInfo.ProductInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductInfoRepository extends JpaRepository<ProductInfo, Long>{

    Optional<ProductInfo> findById(Long id);

}
