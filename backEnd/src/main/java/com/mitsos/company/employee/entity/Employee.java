package com.mitsos.company.employee.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mitsos.company.departments.entity.Department;
import com.mitsos.company.project.entity.Project;
import jakarta.persistence.*;
import lombok.Data;


import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long empId;

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;

    @ManyToMany
    @JoinTable(name = "employee_project",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "project_id")
    )
    private Set<Project> assignedProjects = new HashSet<>();



    @ManyToOne(cascade =  CascadeType.ALL)
    @JoinColumn(name= "employee_id" , referencedColumnName = "depId")
    private Department department;

    public Department getDepartment() {
        return department;
    }

}
