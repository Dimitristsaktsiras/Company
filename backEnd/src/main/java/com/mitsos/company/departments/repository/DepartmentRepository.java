package com.mitsos.company.departments.repository;


import com.mitsos.company.departments.entity.Department;
import com.mitsos.company.employee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
    List<Department> findAllByDepId(Long depId);
}
