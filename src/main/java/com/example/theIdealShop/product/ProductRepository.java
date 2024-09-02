package com.example.theIdealShop.product;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.theIdealShop.domain.CategoriePlat;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
    public Optional<Product> findById(Integer id);
    public Optional<Product> findByProductName(String nameString);
    
    public List<Product> findByCategoriePlat(CategoriePlat categoriePlat);

    /* Macros */
    public List<Product> findByCategoriePlatAndPmCaloBetween(CategoriePlat categoriePlat, Float minCalo, Float maxCalo); //
    public List<Product> findByCategoriePlatAndPmCarbBetween(CategoriePlat categoriePlat, Float minCarb, Float maxCarb); //
    public List<Product> findByCategoriePlatAndPmProtBetween(CategoriePlat categoriePlat, Float minProt, Float maxProt); //
    public List<Product> findByCategoriePlatAndPmFibBetween(CategoriePlat categoriePlat, Float minFib, Float maxFib); //

    public List<Product> findByCategoriePlatAndPmCaloBetweenAndPmCarbBetween(CategoriePlat categoriePlat,
     Float minCalo, Float maxCalo, Float minCarb, Float maxCarb); //
     public List<Product> findByCategoriePlatAndPmCaloBetweenAndPmProtBetween(CategoriePlat categoriePlat,
     Float minCalo, Float maxCalo, Float minProt, Float maxProt); //
     public List<Product> findByCategoriePlatAndPmCaloBetweenAndPmFibBetween(CategoriePlat categoriePlat,
     Float minCalo, Float maxCalo, Float minFib, Float maxFib); //
     public List<Product> findByCategoriePlatAndPmCarbBetweenAndPmProtBetween(CategoriePlat categoriePlat,
     Float minCarb, Float maxCarb, Float minProt, Float maxProt); //
     public List<Product> findByCategoriePlatAndPmCarbBetweenAndPmFibBetween(CategoriePlat categoriePlat,
     Float minCarb, Float maxCarb, Float minFib, Float maxFib); //
     public List<Product> findByCategoriePlatAndPmProtBetweenAndPmFibBetween(CategoriePlat categoriePlat,
     Float minProt, Float maxProt, Float minFib, Float maxFib); //

    public List<Product> findByCategoriePlatAndPmCaloBetweenAndPmCarbBetweenAndPmProtBetween(CategoriePlat categoriePlat,
    Float minCalo, Float maxCalo, Float minCarb, Float maxCarb, Float minProt, Float maxProt); //
    public List<Product> findByCategoriePlatAndPmCaloBetweenAndPmCarbBetweenAndPmFibBetween(CategoriePlat categoriePlat,
    Float minCalo, Float maxCalo, Float minCarb, Float maxCarb, Float minFib, Float maxFib); //
    public List<Product> findByCategoriePlatAndPmCaloBetweenAndPmProtBetweenAndPmFibBetween(CategoriePlat categoriePlat,
    Float minCalo, Float maxCalo, Float minProt, Float maxProt, Float minFib, Float maxFib); //
    public List<Product> findByCategoriePlatAndPmCarbBetweenAndPmProtBetweenAndPmFibBetween(CategoriePlat categoriePlat,
    Float minCarb, Float maxCarb, Float minProt, Float maxProt, Float minFib, Float maxFib); //

    public List<Product> findByCategoriePlatAndPmCaloBetweenAndPmCarbBetweenAndPmProtBetweenAndPmFibBetween(CategoriePlat categoriePlat, 
    Float minCalo, Float maxCalo, Float minCarb, Float maxCarb, Float minProt, Float maxProt, Float minFib, Float maxFib); //

    public List<Product> findByPriceGreaterThan(Double price);
    public List<Product> findByPriceLessThan(Double price);
    public List<Product> findByPriceBetween(Double minPrice, Double maxPrice);

    public List<Product> findByProductNameContaining(String word);
    


 
    /*Vitamins*/


    //a
    public List<Product> findByPvAGreaterThan(Double a);
    // a + ?
    public List<Product> findByPvAGreaterThanAndPvBGreaterThan(Double a, Double b); 
    public List<Product> findByPvAGreaterThanAndPvCGreaterThan(Double a, Double c); 
    public List<Product> findByPvAGreaterThanAndPvDGreaterThan(Double a, Double d); 
    public List<Product> findByPvAGreaterThanAndPvEGreaterThan(Double a, Double e); 
    public List<Product> findByPvAGreaterThanAndPvKGreaterThan(Double a, Double k); 
    // a + ? + ? 
    // ab + ?
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvCGreaterThan
    (Double a, Double b, Double c); 
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvDGreaterThan
    (Double a, Double b, Double d);
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvEGreaterThan
    (Double a, Double b, Double e);
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvKGreaterThan
    (Double a, Double b, Double k); 
    // ac + ?
    public List<Product> findByPvAGreaterThanAndPvCGreaterThanAndPvDGreaterThan
    (Double a, Double c, Double d); 
    public List<Product> findByPvAGreaterThanAndPvCGreaterThanAndPvEGreaterThan
    (Double a, Double c, Double e);
    public List<Product> findByPvAGreaterThanAndPvCGreaterThanAndPvKGreaterThan
    (Double a, Double c, Double k);
    // ad + ?
    public List<Product> findByPvAGreaterThanAndPvDGreaterThanAndPvEGreaterThan
    (Double a, Double d, Double e); 
    public List<Product> findByPvAGreaterThanAndPvDGreaterThanAndPvKGreaterThan
    (Double a, Double d, Double k);
    // ae + ?
     public List<Product> findByPvAGreaterThanAndPvEGreaterThanAndPvKGreaterThan
     (Double a, Double e, Double k); 

    // a + ? + ? + ?
    //abc?
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvCGreaterThanAndPvDGreaterThan
    (Double a, Double b, Double c, Double d);
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvCGreaterThanAndPvEGreaterThan
    (Double a, Double b, Double c, Double e); 
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvCGreaterThanAndPvKGreaterThan
    (Double a, Double b, Double c, Double k);
    //abd?
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvDGreaterThanAndPvEGreaterThan
    (Double a, Double b, Double d, Double e);
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvDGreaterThanAndPvKGreaterThan
    (Double a, Double b, Double d, Double k);
    //abe?
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvEGreaterThanAndPvKGreaterThan
    (Double a, Double b, Double e, Double k);

    //a + ? + ? + ? + ?
    //abcd?
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvCGreaterThanAndPvDGreaterThanAndPvEGreaterThan
    (Double a, Double b, Double c, Double d, Double e);
    public List<Product> findByPvAGreaterThanAndPvBGreaterThanAndPvCGreaterThanAndPvDGreaterThanAndPvKGreaterThan
    (Double a, Double b, Double c, Double d, Double k);
    //ekab?
    public List<Product> findByPvEGreaterThanAndPvKGreaterThanAndPvAGreaterThanAndPvBGreaterThanAndPvCGreaterThan
    (Double e, Double k, Double a, Double b, Double c);
    public List<Product> findByPvEGreaterThanAndPvKGreaterThanAndPvAGreaterThanAndPvBGreaterThanAndPvDGreaterThan
    (Double e, Double k, Double a, Double b, Double d);








    // !!! It seems a and b dont tend to be in the same food'groups
    // b && k seems to be found in the same foods



    public List<Product> findByPvBGreaterThan(Double b);
    public List<Product> findByPvCGreaterThan(Double c);
    public List<Product> findByPvDGreaterThan(Double d);
    public List<Product> findByPvEGreaterThan(Double e);
    public List<Product> findByPvKGreaterThan(Double k);

}
