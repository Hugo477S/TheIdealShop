package com.example.theIdealShop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

import com.example.theIdealShop.product.ProductRepository;

@ComponentScan()
@SpringBootApplication
public class TheIdealShopApplication {

	
	public static void main(String[] args) {
		ConfigurableApplicationContext configurableApplicationContext =
		SpringApplication.run(TheIdealShopApplication.class, args);
		ProductRepository productRepository = configurableApplicationContext.getBean(ProductRepository.class);
	/* 	Product burger = new Product(
				"burger",
				1.0,
				Notation.VeryGood
		);

		ProductInfo burgerInfo = new ProductInfo(
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
				burger);
		burger.setProductInfo(burgerInfo);
		productInfoRepository.save(burgerInfo);

		ProductStock burgerStock = new ProductStock(
				LocalDate.of(2020, 12,1), // ! yearToWrite : yearWanted - 1900
				LocalDate.of(2020, 12,1),
				LocalDate.of(2020, 12,1),
				12,
				"bcd",
				burger
		);
		burger.setProductStock(burgerStock);

		Labels burgerLabels = new Labels(
			true,
			true,
			true,
			true,
			true,
			true,
			burger
		);
		burger.setLabels(burgerLabels);
		productRepository.save(burger);


		Product fries = new Product(
				"fries",
				1.50,
				Notation.VeryGood
		);

		ProductInfo friesInfo = new ProductInfo(
				350,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				fries);
		fries.setProductInfo(friesInfo);
		productInfoRepository.save(friesInfo);

		ProductStock friesStock = new ProductStock(
				LocalDate.of(2020, 12,1), // ! yearToWrite : yearWanted - 1900
				LocalDate.of(2020, 12,1),
				LocalDate.of(2020, 12,1),
				12,
				"bcd",
				fries
		);
		fries.setProductStock(friesStock);

		Labels friesLabels = new Labels(
			true,
			true,
			true,
			true,
			true,
			true,
			fries
		);
		fries.setLabels(friesLabels);
		productRepository.save(fries);


		Product product = new Product(
				"sashimi",
				10.0,
				Notation.VeryGood
		);

		ProductInfo productInfo = new ProductInfo(
				150,
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
		productRepository.save(product);*/
	}
}

