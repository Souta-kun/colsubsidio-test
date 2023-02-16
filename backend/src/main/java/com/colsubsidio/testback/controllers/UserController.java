package com.colsubsidio.testback.controllers;

import com.colsubsidio.testback.models.Customer;
import com.colsubsidio.testback.services.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private ICustomerService iCustomerService;

    @PostMapping("/")
    private ResponseEntity<Customer> saveUser(@RequestBody Customer customer)
    {
        return new ResponseEntity<>(iCustomerService.Save(customer), HttpStatus.OK);
    }

    @GetMapping("/")
    private ResponseEntity<List<Customer>> get(@RequestParam String name, @RequestParam String email)
    {
        return new ResponseEntity<>(iCustomerService.GetByParams(name, email).get(), HttpStatus.OK);
    }

    @GetMapping("/all")
    private ResponseEntity<List<Customer>> getAll()
    {
        return new ResponseEntity<>(iCustomerService.GetAll(), HttpStatus.OK);
    }
}
