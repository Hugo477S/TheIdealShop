package com.example.theIdealShop.labels;

import com.example.theIdealShop.product.Product;
import jakarta.persistence.*;

@Entity
@Table(name="label")
public class Labels {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="animal_respect")
    private Boolean animal_respect;

    @Column(name="local")
    private Boolean local;

    @Column(name="national")
    private Boolean national;

    @Column(name="good_for_sport")
    private Boolean goodForSport;

    @Column(name="useless_sugar")
    private Boolean useless_sugar;

    @Column(name="useless_fat")
    private Boolean useless_fat;

    @OneToOne(mappedBy = "labels", cascade = CascadeType.ALL)
    //@MapsId
    @JoinColumn(name = "product_name", referencedColumnName = "name")
    private Product product;

    public Labels (Long id, Boolean animal_respect, Boolean local, Boolean national, Boolean goodForSport,
                   Boolean useless_sugar, Boolean useless_fat, Product product) {
        this.id = id;
        this.animal_respect = animal_respect;
        this.local = local;
        this.national = national;
        this.goodForSport = goodForSport;
        this.useless_sugar = useless_sugar;
        this.useless_fat = useless_fat;
        this.product = product;
    }

    public Labels (Boolean animal_respect, Boolean local, Boolean national, Boolean goodForSport,
                   Boolean useless_sugar, Boolean useless_fat, Product product) {
        this.animal_respect = animal_respect;
        this.local = local;
        this.national = national;
        this.goodForSport = goodForSport;
        this.useless_sugar = useless_sugar;
        this.useless_fat = useless_fat;
        this.product = product;
    }

    public Labels () {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getNational() {
        return national;
    }

    public void setNational(Boolean national) {
        this.national = national;
    }

    public Boolean getLocal() {
        return local;
    }

    public void setLocal(Boolean local) {
        this.local = local;
    }

    public Boolean getAnimal_respect() {
        return animal_respect;
    }

    public void setAnimal_respect(Boolean animal_respect) {
        this.animal_respect = animal_respect;
    }

    public Boolean getGoodForSport() {
        return goodForSport;
    }

    public void setGoodForSport(Boolean goodForSport) {
        this.goodForSport = goodForSport;
    }

    public Boolean getUseless_fat() {
        return useless_fat;
    }

    public void setUseless_fat(Boolean useless_fat) {
        this.useless_fat = useless_fat;
    }

    public Boolean getUseless_sugar() {
        return useless_sugar;
    }

    public void setUseless_sugar(Boolean useless_sugar) {
        this.useless_sugar = useless_sugar;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
