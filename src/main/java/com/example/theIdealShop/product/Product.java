package com.example.theIdealShop.product;

import com.example.theIdealShop.domain.Notation;
import com.example.theIdealShop.productInfo.ProductInfo;
import com.example.theIdealShop.productStock.ProductStock;
import com.example.theIdealShop.labels.Labels;
import jakarta.persistence.*;

@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name= "name")
    private String name;

    @Column(name= "price")
    private Double price;

    public Notation getNotation() {
        return notation;
    }

    public void setNotation(Notation notation) {
        this.notation = notation;
    }

    @Enumerated(EnumType.STRING)
    private Notation notation;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name= "product_info_id", referencedColumnName = "infoId")
    private ProductInfo productInfo;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name= "product_stock_id", referencedColumnName = "id")
    private ProductStock productStock;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "label_id", referencedColumnName = "id")
    private Labels labels;


    public Product(Long id, String name, Double price, Notation notation) {
        this.name = name;
        this.price = price;
        this.id = id;
        this.notation = notation;
    }

    public Product(String name, Double price, Notation notation) {
        this.name = name;
        this.price = price;
        this.notation = notation;
    }

    public Product(){ // Pour éviter une erreur

    }

    public ProductInfo getProductInfo() {
        return productInfo;
    }

    public void setProductInfo(ProductInfo productInfo) {
        this.productInfo = productInfo;
    }

    public ProductStock getProductStock() {
        return productStock;
    }

    public void setProductStock(ProductStock productStock) {
        this.productStock = productStock;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Labels getLabels() {
        return labels;
    }

    public void setLabels(Labels labels) {
        this.labels = labels;
    }

}
