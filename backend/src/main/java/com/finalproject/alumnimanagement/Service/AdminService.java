package com.finalproject.alumnimanagement.Service;


import com.finalproject.alumnimanagement.Dto.FacultyDto;
import com.finalproject.alumnimanagement.Dto.StudentDto;

import java.util.List;

public interface AdminService {

    List<FacultyDto> getAllFaculty();

    FacultyDto getByFacultyById(int id);

    List<StudentDto> getAllStudents();

    StudentDto getByStudentById(int id);
}
