package com.colsubsidio.testback.services;

import com.colsubsidio.testback.models.Customer;

import java.util.List;
import java.util.Optional;

public interface ICustomerService {
    Customer save(Customer customer);
    Optional<List<Customer>> getByParams(String name, String email);
    List<Customer> getAll();
}
