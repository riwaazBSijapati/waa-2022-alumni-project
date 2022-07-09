package com.finalproject.alumnimanagement.Service.impl;


import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Entity.Student;
import com.finalproject.alumnimanagement.Service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Override
    public Student addStudent(Student student) {
        return null;
    }

    @Override
    public List<StudentDto> getAllStudents() {
        return null;
    }

    @Override
    public StudentDto getStudentsById(int id) {
        return null;
    }

    @Override
    public List<StudentDto> getStudentByName(String name) {
        return null;
    }

    @Override
    public Boolean deleteStudentById(int id) {
        return null;
    }
}
