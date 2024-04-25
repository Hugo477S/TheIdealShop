package com.example.theIdealShop.product;

import com.example.theIdealShop.domain.Notation;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.List;


@Configuration
public class ProductConfig {

    @Bean
    CommandLineRunner commandLineRunner(ProductRepository repository) {
        return args -> {
            Product burger = new Product(
                    "a",
                    1.0,
                    Notation.Bad
            );
            Product fries = new Product(
                    "b",
                    1.0,
                    Notation.Medium
            );
            repository.saveAll(
                    List.of(burger, fries)
            );
        };
    }

}
