package com.colsubsidio.testback.models;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String password;
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Phone> phones;
    private Boolean isActive;
    private LocalDateTime lastLogin;
    private LocalDateTime created;
    private LocalDateTime modified;
    private String token;
}