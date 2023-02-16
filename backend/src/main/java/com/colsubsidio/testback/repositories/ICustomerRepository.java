package com.colsubsidio.testback.repositories;

import com.colsubsidio.testback.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ICustomerRepository extends JpaRepository<Customer, Long> {
    @Query(value = "SELECT u FROM CUSTOMER u WHERE u.NAME LIKE %:name% and u.EMAIL LIKE %:email%", nativeQuery = true)
    Optional<List<Customer>> findUserByNameAndEmailParams(
            @Param("name") String name,
            @Param("email") String email);

}
