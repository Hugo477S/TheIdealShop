package com.example.theIdealShop.productInfo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PMRepository extends JpaRepository<PM, Long>{

    Optional<PM> findById(Long id);

}
