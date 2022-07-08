package com.finalproject.alumnimanagement.Service.impl;

import com.finalproject.alumnimanagement.Dto.FacultyDto;
import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Service.AdminService;
import com.finalproject.alumnimanagement.Service.FacultyService;
import com.finalproject.alumnimanagement.Service.StudentService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class adminServiceImpl implements AdminService {

    private final StudentService studentService;
    private final FacultyService facultyService;
    private final ModelMapper modelmapper;

@Override
    public List<FacultyDto> getAllFaculty() {
        var students = facultyService.getAll();

        return null;
    }

    @Override
    public FacultyDto getByFacultyById(int id) {
        return null;
    }

    public List<StudentDto> getAllStudents() {

                return studentService.getAll();
    }

    @Override
    public StudentDto getByStudentById(int id) {
        return null;
    }

}
