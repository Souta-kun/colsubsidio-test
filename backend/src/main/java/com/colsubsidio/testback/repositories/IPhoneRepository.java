package com.colsubsidio.testback.repositories;

import com.colsubsidio.testback.models.Customer;
import com.colsubsidio.testback.models.Phone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IPhoneRepository extends JpaRepository<Phone, Long> {
}
