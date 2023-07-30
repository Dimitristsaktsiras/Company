package com.mitsos.company.employee.controller;

import com.mitsos.company.employee.entity.Employee;
import com.mitsos.company.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/save")
    public ResponseEntity<Employee> saveEmployee(@RequestBody Employee empObj) {
        employeeService.saveEmployee(empObj);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value = {"/getEmployees", "/{empId}"})
    public List<Employee> getEmployee(@PathVariable(required = false) Long empId) {
        return employeeService.getEmployeeDetails(empId);
    }

    @DeleteMapping("delete/{empId}")
    public ResponseEntity removeEmployee(@PathVariable Long empId){
        employeeService.deleteEmployee(empId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{empId}/project/{projectId}")
    public Employee assignProjectToEmployee(
            @PathVariable Long empId,
            @PathVariable Long projectId
    ){
        return employeeService.assignProjectToEmployee(empId, projectId);
    }
    @PutMapping("/{empId}/department/{depId}")
    public ResponseEntity<Employee> assignEmployeeToDepartment(
            @PathVariable Long empId,
            @PathVariable Long depId
    ) {
        Employee updatedEmployee = employeeService.assignEmployeeToDepartment(empId, depId);
        if (updatedEmployee != null) {
            return ResponseEntity.ok(updatedEmployee);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
