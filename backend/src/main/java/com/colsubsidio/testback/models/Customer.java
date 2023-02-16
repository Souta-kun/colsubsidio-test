package com.colsubsidio.testback.models;

import lombok.Data;
import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String password;
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Phone> phones;
    private Boolean isActive;
    private Date lastLogin;
    private Date created;
    private Date modified;
    private String token;
}