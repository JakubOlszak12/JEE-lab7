package com.example.demo.services;

import com.example.demo.entities.Student;
import com.example.demo.entities.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudentList() {
        return (List<Student>) studentRepository.findAll();
    }

    public void addStudent(Student student) {
        studentRepository.save(student);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    public void updateStudent(Student student) {
        studentRepository.save(student);
    }

    public boolean existsById(Long id) {
        return studentRepository.existsById(id);
    }
}
