package com.example.theIdealShop.productInfo;

import com.example.theIdealShop.product.Product;
import jakarta.persistence.*;

@Entity
@Table(name="product_info")
public class ProductInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long infoId;

    @Column(name="mass")
    private Integer mass;
    @Column(name="calories")
    private Integer calories;
    // Per 100g only
    @Column(name="totalCarbo")
    private Integer totalCarbo;

    @Column(name="sugars")
    private Integer sugars;

    @Column(name="protein")
    private Integer protein;

    @Column(name="totalFat")
    private Integer totalFat;

    @Column(name="saturatedFat")
    private Integer saturatedFat;

    @Column(name="dietaryFibre")
    private Integer dietaryFibre;

    @Column(name="energy")
    private Integer energy;

    @Column(name="sodium")
    private Integer sodium;



    @OneToOne(mappedBy = "productInfo", cascade = CascadeType.ALL) // it's a reference to productInfo in Product
    //@MapsId
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;


    public ProductInfo(Long infoId, Integer mass, Integer calories, Integer totalCarbo, Integer sugars, Integer protein, Integer totalFat, Integer saturatedFat,
                       Integer dietaryFibre, Integer energy, Integer sodium, Product product) {

        this.infoId = infoId;
        this.mass = mass;
        this.calories = calories;
        this.totalCarbo = totalCarbo;
        this.sugars = sugars;
        this.protein = protein;
        this.totalFat = totalFat;
        this.saturatedFat = saturatedFat;
        this.dietaryFibre = dietaryFibre;
        this.energy = energy;
        this.sodium = sodium;
        this.product = product;
    }

    public ProductInfo(Integer mass, Integer calories, Integer totalCarbo, Integer sugars, Integer protein, Integer totalFat, Integer saturatedFat,
                       Integer dietaryFibre, Integer energy, Integer sodium, Product product) {
        this.mass = mass;
        this.calories = calories;
        this.totalCarbo = totalCarbo;
        this.sugars = sugars;
        this.protein = protein;
        this.totalFat = totalFat;
        this.saturatedFat = saturatedFat;
        this.dietaryFibre = dietaryFibre;
        this.energy = energy;
        this.sodium = sodium;
        this.product = product;
    }

    public ProductInfo(){ // Pour éviter une erreur

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

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public Integer getEnergy() {
        return energy;
    }

    public void setEnergy(Integer energy) {
        this.energy = energy;
    }

    public Integer getTotalFat() {
        return totalFat;
    }

    public void setTotalFat(Integer totalFat) {
        this.totalFat = totalFat;
    }

    public Integer getSaturatedFat() {
        return saturatedFat;
    }

    public void setSaturatedFat(Integer saturatedFat) {
        this.saturatedFat = saturatedFat;
    }

    public Integer getTotalCarbo() {
        return totalCarbo;
    }

    public void setTotalCarbo(Integer totalCarbo) {
        this.totalCarbo = totalCarbo;
    }

    public Integer getSugars() {
        return sugars;
    }

    public void setSugars(Integer sugars) {
        this.sugars = sugars;
    }

    public Integer getProtein() {
        return protein;
    }

    public void setProtein(Integer protein) {
        this.protein = protein;
    }

    public Integer getDietaryFibre() {
        return dietaryFibre;
    }

    public void setDietaryFibre(Integer dietaryFibre) {
        this.dietaryFibre = dietaryFibre;
    }

    public Integer getSodium() {
        return sodium;
    }

    public void setSodium(Integer sodium) {
        this.sodium = sodium;
    }

}
