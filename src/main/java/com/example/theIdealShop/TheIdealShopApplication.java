package com.example.theIdealShop;

import com.example.theIdealShop.domain.Notation;
import com.example.theIdealShop.product.Product;
import com.example.theIdealShop.product.ProductRepository;
import com.example.theIdealShop.productInfo.ProductInfo;
import com.example.theIdealShop.productStock.ProductStock;
import com.example.theIdealShop.labels.Labels;
import com.example.theIdealShop.productInfo.ProductInfoRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.time.LocalDate;



@SpringBootApplication
public class TheIdealShopApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext configurableApplicationContext =
		SpringApplication.run(TheIdealShopApplication.class, args);
		ProductRepository productRepository = configurableApplicationContext.getBean(ProductRepository.class);
		ProductInfoRepository productInfoRepository = configurableApplicationContext.getBean(ProductInfoRepository.class);

		Product product = new Product(
				"burger",
				1.0,
				Notation.VeryGood
		);

		ProductInfo productInfo = new ProductInfo(
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				product);
		product.setProductInfo(productInfo);
		productInfoRepository.save(productInfo);

		ProductStock productStock = new ProductStock(
				LocalDate.of(2020, 12,1), // ! yearToWrite : yearWanted - 1900
				LocalDate.of(2020, 12,1),
				LocalDate.of(2020, 12,1),
				12,
				"bcd",
				product
		);
		product.setProductStock(productStock);

		Labels labels = new Labels(
			true,
			true,
			true,
			true,
			true,
			true,
			product
		);
		product.setLabels(labels);
		productRepository.save(product);


	}



}
