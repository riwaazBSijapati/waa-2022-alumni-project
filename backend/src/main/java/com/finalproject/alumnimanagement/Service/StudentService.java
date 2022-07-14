package com.finalproject.alumnimanagement.Service;


import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Entity.Student;


import java.util.List;

public interface StudentService {

    Student addStudent(Student student);
    List<StudentDto> getAllStudents();
    StudentDto getStudentsById(int id);
    List<StudentDto> getStudentByName(String name);
    Boolean deleteStudentById(int id);
    Student updateStudent(Student student);
    List<StudentDto> getStudentByCity(String city);
    List<StudentDto> getStudentByState(String state);

    //Boolean getStudentActivate(Student student);

    StudentDto getActivateStudent(int id);




}
