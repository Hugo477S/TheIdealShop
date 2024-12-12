package com.example.theIdealShop.productVitamin;

import com.example.theIdealShop.product.Product;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class, property="@id")
@Table(name="productVitamin")
public class PV {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name= "a")
    private Float a;

    @Column(name= "b")
    private Float b;

    @Column(name= "c")
    private Float c;

    @Column(name= "d")
    private Float d;
    
    @Column(name= "e")
    private Float e;

    @Column(name= "k")
    private Float k;

    @ManyToOne(cascade = CascadeType.ALL) // it's a reference to productInfo in Product
    //@MapsId
    @JoinColumn(name = "productId", referencedColumnName = "id")
    private Product product;

    public PV(Long id, Float a, Float b,
    Float c, Float d, Float e, Float k, Product product) {
        this.id = id;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.k = k;
        this.product = product;
    }

    public PV(Float a, Float b,
    Float c, Float d, Float e, Float k, Product product) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.k = k;
        this.product = product;
    }

    public PV(){ // Pour éviter une erreur

    }

    public Float getA() {
        return this.a;
    }
    public void setA(Float a) {
        this.a = a;
    }
    public Float getB() {
        return this.b;
    }
    public void setB(Float b) {
        this.b = b;
    }
    public Float getC() {
        return this.c;
    }
    public void setC(Float c) {
        this.c = c;
    }
    public Float getD() {
        return this.d;
    }
    public void setD(Float d) {
        this.d = d;
    }
    public Float getE() {
        return this.e;
    }
    public void setE(Float e) {
        this.e = e;
    }
    public Float getK() {
        return this.k;
    }
    public void setK(Float k) {
        this.k = k;
    }

    public Product getProduct() {
        return this.product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
}
