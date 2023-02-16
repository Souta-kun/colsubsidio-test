package com.colsubsidio.testback.services;

import com.colsubsidio.testback.models.Customer;

import java.util.List;
import java.util.Optional;

public interface ICustomerService {
    Customer Save(Customer customer);
    Optional<List<Customer>> GetByParams(String name, String email);
    List<Customer> GetAll();
}
