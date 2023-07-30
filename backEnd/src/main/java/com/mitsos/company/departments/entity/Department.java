package com.mitsos.company.departments.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mitsos.company.employee.entity.Employee;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long depId;
    private String depName;


    @JsonIgnore
    @OneToMany(mappedBy = "department")
    private Set<Employee> employees = new HashSet<>();

    public Long getDepId() {
        return depId;
    }

    public void setDepId(Long depId) {
        this.depId = depId;
    }

    public String getDepName() {
        return depName;
    }

    public void setDepName(String depName) {
        this.depName = depName;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }


}
