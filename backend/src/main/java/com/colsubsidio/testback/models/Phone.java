package com.colsubsidio.testback.models;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "phone")
public class Phone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long countryCode;
    private Long cityCode;
    private Long number;
    @ManyToOne()
    private Customer customer;
}