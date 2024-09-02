package com.example.theIdealShop.product;

import com.example.theIdealShop.domain.CategoriePlat;
import com.example.theIdealShop.domain.Notation;
import com.example.theIdealShop.labels.Labels;
import com.example.theIdealShop.productInfo.PM;
import com.example.theIdealShop.productMineral.PMin;
import com.example.theIdealShop.productStock.ProductStock;
import com.example.theIdealShop.productVitamin.PV;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class, property="@id")
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name= "product_name")
    private String productName;

    @Column(name= "price")
    private Double price;

    @Column(name ="img")
    private String img;

    public String getImg(){
        return this.img;
    }

    public void setImg(String img){
        this.img = img;
    }

    public Notation getNotation() {
        return notation;
    }

    public void setNotation(Notation notation) {
        this.notation = notation;
    }

    @Enumerated(EnumType.STRING)
    private Notation notation;

    @Enumerated(EnumType.STRING)
    private CategoriePlat categoriePlat;

    public CategoriePlat getCategoriePlat() {
        return categoriePlat;
    }

    public void setCategoriePlat(CategoriePlat categoriePlat) {
        this.categoriePlat = categoriePlat;
    }

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name= "product_info_id", referencedColumnName = "infoId", nullable=true)
    private PM pm;  

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name= "product_stock_id", referencedColumnName = "id", nullable=true)
    private ProductStock productStock;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "label_id", referencedColumnName = "id", nullable=true)
    private Labels labels;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "min_id", referencedColumnName = "id", nullable=true)
    private PMin pMin;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "vit_id", referencedColumnName = "id", nullable=true)
    private PV pv;


    public Product(Long id, String productName, Double price, Notation notation, CategoriePlat categoriePlat,
    String img, PM pm,
    PMin pMin, PV pv) {
        this.productName = productName;
        this.price = price;
        this.id = id;
        this.notation = notation;
        this.categoriePlat = categoriePlat;
        this.img = img;
        this.pm = pm;
        this.pMin = pMin;
        this.pv = pv;
    }

    public Product(String productName, Double price, Notation notation, CategoriePlat categoriePlat, String img,
    PM pm,
    PMin pMin, PV pv) {
        this.productName = productName;
        this.price = price;
        this.notation = notation;
        this.categoriePlat = categoriePlat;
        this.img = img;
        this.pm = pm;
        this.pMin = pMin;
        this.pv = pv;
    }

    public Product(){ // Pour éviter une erreur

    }

    public PM getPM() {
        return pm;
    }

    public void setPM(PM pm) {
        this.pm = pm;
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
        return productName;
    }

    public void setName(String productName) {
        this.productName = productName;
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

    public PMin getPMin() {
        return pMin;
    }
    public void setPMin(PMin pMin) {
        this.pMin = pMin;
    }
    public PV getProductVitamin() {
        return pv;
    }
    public void setPV(PV pv) {
        this.pv = pv;
    }

  
}
