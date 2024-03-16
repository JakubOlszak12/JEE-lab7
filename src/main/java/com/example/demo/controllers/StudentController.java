package com.example.demo.controllers;

import com.example.demo.entities.Student;
import com.example.demo.services.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    private final StudentService  studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/students")
    public List<Student> getStudents() {
        return studentService.getStudentList();
    }


    @PostMapping("/students/add")
    public void createStudent(@RequestBody Student student) {
        studentService.addStudent(student);
    }

    @PutMapping("/students/update/{id}")
    public ResponseEntity<String> updateStudent(@RequestBody Student student) {
        if(studentService.existsById(student.getId())) {
            studentService.updateStudent(student);
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/students/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        if(studentService.existsById(id)){
            studentService.deleteStudent(id);
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
