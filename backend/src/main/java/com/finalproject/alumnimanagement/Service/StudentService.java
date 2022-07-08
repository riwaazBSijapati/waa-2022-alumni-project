package com.finalproject.alumnimanagement.Service;

import com.finalproject.alumnimanagement.Dto.StudentDto;

import java.util.List;

public interface StudentService {


    List<StudentDto> getAll();

    StudentDto getById(int id);

}
