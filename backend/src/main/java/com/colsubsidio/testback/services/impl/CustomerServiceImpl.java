package com.colsubsidio.testback.services.impl;

import com.colsubsidio.testback.models.Customer;
import com.colsubsidio.testback.repositories.ICustomerRepository;
import com.colsubsidio.testback.repositories.IPhoneRepository;
import com.colsubsidio.testback.services.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements ICustomerService {

    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Autowired
    private IPhoneRepository iPhoneRepository;

    @Override
    public Customer Save(Customer customer) {
        return iCustomerRepository.save(customer);
    }

    @Override
    public Optional<List<Customer>> GetByParams(String name, String email) {
        return iCustomerRepository.findUserByNameAndEmailParams(name, email);
    }

    @Override
    public List<Customer> GetAll() {
        return iCustomerRepository.findAll();
    }
}
