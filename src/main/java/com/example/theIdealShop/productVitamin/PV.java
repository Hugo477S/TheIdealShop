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
    private Integer a;

    @Column(name= "b")
    private Integer b;

    @Column(name= "c")
    private Integer c;

    @Column(name= "d")
    private Integer d;
    
    @Column(name= "e")
    private Integer e;

    @Column(name= "k")
    private Integer k;

    @ManyToOne(cascade = CascadeType.ALL) // it's a reference to productInfo in Product
    //@MapsId
    @JoinColumn(name = "productId", referencedColumnName = "id")
    private Product product;

    public PV(Long id, Integer a, Integer b,
    Integer c, Integer d, Integer e, Integer k, Product product) {
        this.id = id;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.k = k;
        this.product = product;
    }

    public PV(Integer a, Integer b,
    Integer c, Integer d, Integer e, Integer k, Product product) {
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

    public Integer getA() {
        return this.a;
    }
    public void setA(Integer a) {
        this.a = a;
    }
    public Integer getB() {
        return this.b;
    }
    public void setB(Integer b) {
        this.b = b;
    }
    public Integer getC() {
        return this.c;
    }
    public void setC(Integer c) {
        this.c = c;
    }
    public Integer getD() {
        return this.d;
    }
    public void setD(Integer d) {
        this.d = d;
    }
    public Integer getE() {
        return this.e;
    }
    public void setE(Integer e) {
        this.e = e;
    }
    public Integer getK() {
        return this.k;
    }
    public void setK(Integer k) {
        this.k = k;
    }

    public Product getProduct() {
        return this.product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
}
