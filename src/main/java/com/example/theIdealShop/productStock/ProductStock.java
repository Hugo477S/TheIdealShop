package com.example.theIdealShop.productStock;


import java.time.LocalDate;

import com.example.theIdealShop.product.Product;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="product_stock")
public class ProductStock {
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    @Column(name="received")
    private LocalDate received;
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    @Column(name="pos")
    private LocalDate pos;
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    @Column(name="dop")
    private LocalDate dop;
    @Column(name="quantity")
    private Integer quantity;

    public String getDeliname() {
        return deliName;
    }

    public void setDeliname(String deliname) {
        this.deliName = deliName;
    }

    @Column(name="deliName")
    private String deliName;
    @OneToOne
    @JoinColumn(name = "productName", referencedColumnName = "id")
    private Product product;


    public ProductStock(Long id, LocalDate received, LocalDate pos, LocalDate dop, Integer quantity, String deliName, Product product) {
        this.id = id;
        this.received = received;
        this.pos = pos;
        this.dop = dop;
        this.quantity = quantity;
        this.deliName = deliName;
        this.product = product;
    }

    public ProductStock(LocalDate received, LocalDate pos, LocalDate dop, Integer quantity, String deliName, Product product) {
        this.received = received;
        this.pos = pos;
        this.dop = dop;
        this.quantity = quantity;
        this.deliName = deliName;
        this.product = product;
    }

    public ProductStock() {

    }

    public LocalDate getReceived() {
        return received;
    }

    public void setReceived(LocalDate received) {
        this.received = received;
    }

    public LocalDate getPos() {
        return pos;
    }

    public void setPos(LocalDate pos) {
        this.pos = pos;
    }

    public LocalDate getDop() {
        return dop;
    }

    public void setDop(LocalDate dop) {
        this.dop = dop;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
