package com.colsubsidio.testback.services.impl;

import com.colsubsidio.testback.models.Customer;
import com.colsubsidio.testback.repositories.ICustomerRepository;
import com.colsubsidio.testback.repositories.IPhoneRepository;
import com.colsubsidio.testback.services.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements ICustomerService {

    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Autowired
    private IPhoneRepository iPhoneRepository;

    @Override
    public Customer save(Customer customer) {
        customer.setCreated(new Date(System.currentTimeMillis()));
        customer.setModified(new Date(System.currentTimeMillis()));
        customer.setLastLogin(new Date(System.currentTimeMillis()));
        customer.setIsActive(true);
        customer.setToken("a98sdf87a9sf98adfa09sdf80a809f890af");
        return iCustomerRepository.save(customer);
    }

    @Override
    public Optional<List<Customer>> getByParams(String name, String email) {
        return iCustomerRepository.findUserByNameAndEmailParams(name, email);
    }

    @Override
    public List<Customer> getAll() {
        return iCustomerRepository.findAll();
    }
}
