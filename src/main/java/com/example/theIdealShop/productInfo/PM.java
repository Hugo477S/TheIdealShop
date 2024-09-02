package com.example.theIdealShop.productInfo;

import com.example.theIdealShop.product.Product;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="product_info")
public class PM {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long infoId;

    @Column(name="mass")
    private Integer mass;
    // Per 100g only
    @Column(name="calo")
    private Integer calo;
    
    @Column(name="carb")
    private Float carb;

    @Column(name="sug")
    private Float sug;

    @Column(name="prot")
    private Float prot;

    @Column(name="fat")
    private Float fat;

    @Column(name="satu")
    private Float satu;

    @Column(name="fib")
    private Float fib;

    @Column(name="energy")
    private Integer energy;

    @Column(name="sod")
    private Float sod;

    @OneToOne(mappedBy = "pm", cascade = CascadeType.ALL) // it's a reference to productInfo in Product
    //@MapsId
    @JoinColumn(name = "productId", referencedColumnName = "id")
    private Product product;


    public PM(Long infoId, Integer mass, Integer calo, Float carb, Float sug, Float prot, Float fat, Float satu,
                       Float fib, Integer energy, Float sod, Product product) {

        this.infoId = infoId;
        this.mass = mass;
        this.calo = calo;
        this.carb = carb;
        this.sug = sug;
        this.prot = prot;
        this.fat = fat;
        this.satu = satu;
        this.fib = fib;
        this.energy = energy;
        this.sod = sod;
        this.product = product;
    }

    public PM(Integer mass, Integer calo, Float carb, Float sug, Float prot, Float fat, Float satu,
                       Float fib, Integer energy, Float sod, Product product) {
        this.mass = mass;
        this.calo = calo;
        this.carb = carb;
        this.sug = sug;
        this.prot = prot;
        this.fat = fat;
        this.satu = satu;
        this.fib = fib;
        this.energy = energy;
        this.sod = sod;
        this.product = product;
    }

    public PM(){ // Pour éviter une erreur

    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Long getInfoId() {
        return infoId;
    }

    public void setInfoId(Long infoId) {
        this.infoId = infoId;
    }

    public Integer getMass() {
        return mass;
    }

    public void setMass(Integer mass) {
        this.mass = mass;
    }

    public Integer getCalo() {
        return calo;
    }

    public void setCalo(Integer calo) {
        this.calo = calo;
    }

    public Integer getEnergy() {
        return energy;
    }

    public void setEnergy(Integer energy) {
        this.energy = energy;
    }

    public Float getFat() {
        return fat;
    }

    public void setFat(Float fat) {
        this.fat = fat;
    }

    public Float getSatu() {
        return satu;
    }

    public void setSatu(Float satu) {
        this.satu = satu;
    }

    public Float getCarb() {
        return carb;
    }

    public void setCarb(Float carb) {
        this.carb = carb;
    }

    public Float getSug() {
        return sug;
    }

    public void setSug(Float sug) {
        this.sug = sug;
    }

    public Float getProt() {
        return prot;
    }

    public void setProt(Float prot) {
        this.prot = prot;
    }

    public Float getFib() {
        return fib;
    }

    public void setFib(Float fib) {
        this.fib = fib;
    }

    public Float getSod() {
        return sod;
    }

    public void setSod(Float sod) {
        this.sod = sod;
    }  

}
