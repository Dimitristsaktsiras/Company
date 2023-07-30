package com.mitsos.company.employee.service;

import com.mitsos.company.departments.entity.Department;
import com.mitsos.company.employee.entity.Employee;
import com.mitsos.company.employee.repository.EmployeeRepository;
import com.mitsos.company.project.entity.Project;
import com.mitsos.company.project.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mitsos.company.departments.repository.DepartmentRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private DepartmentRepository DepartmentRepository;

    public void saveEmployee(Employee empObj) {
        employeeRepository.save(empObj);
    }

    public List<Employee> getEmployeeDetails(Long empId) {
        if (null != empId) {
            return employeeRepository.findAllByEmpId(empId);
        } else {
            return employeeRepository.findAll();
        }
    }

    public void deleteEmployee(Long empId) {
        employeeRepository.deleteById(empId);
    }

    public Employee assignProjectToEmployee(Long empId, Long projectId) {
        Set<Project> projectSet = null;
        Employee employee = employeeRepository.findById(empId).get();
        Project project = projectRepository.findById(projectId).get();
        projectSet =  employee.getAssignedProjects();
        projectSet.add(project);
        employee.setAssignedProjects(projectSet);
        return employeeRepository.save(employee);
    }

    public Employee assignEmployeeToDepartment(Long empId, Long depId) {
        Optional<Employee> employeeOptional = employeeRepository.findById(empId);
        Optional<Department> departmentOptional = DepartmentRepository.findById(depId);

        if (employeeOptional.isPresent() && departmentOptional.isPresent()) {
            Employee employee = employeeOptional.get();
            Department department = departmentOptional.get();

            employee.setDepartment(department);
            return employeeRepository.save(employee);
        } else {
            return null; // Employee or department not found, return null or throw an exception.
        }
    }

}
