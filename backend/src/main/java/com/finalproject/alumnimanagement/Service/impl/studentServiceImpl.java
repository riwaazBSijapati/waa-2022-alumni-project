package com.finalproject.alumnimanagement.Service.Impl;


import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Entity.Student;
import com.finalproject.alumnimanagement.Repository.FacultyRepo;
import com.finalproject.alumnimanagement.Repository.StudentRepo;
import com.finalproject.alumnimanagement.Service.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private FacultyRepo facultyRepo;


    @Override
    public Student addStudent(Student student) {
        student.set_deleted(false);
        return studentRepo.save(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
        List<StudentDto> result= new ArrayList<StudentDto>();
        studentRepo.findAll().forEach(x->{
            if(!x.is_deleted()){
                StudentDto std= modelMapper.map(x, StudentDto.class);
                result.add(std);
            }
        });
        return result;
    }

    @Override
    public StudentDto getStudentsById(int id) {

        Optional<Student> result1 = studentRepo.findStudentById(id);
        if(result1.isPresent()){
            StudentDto std = modelMapper.map(result1.get(), StudentDto.class);
             return std;
        }
        return new StudentDto();
    }

    @Override
    public List<StudentDto> getStudentByName(String name) {
        List<StudentDto> result =new ArrayList<StudentDto>();
        studentRepo.findStudentByName(name.toLowerCase()).forEach(x->{
            if(!x.is_deleted()){
                StudentDto std = modelMapper.map(x, StudentDto.class);
                result.add(std);
            }
        });
            return result;
    }

    @Override
    public Boolean deleteStudentById(int id) {
        Optional<Student> findStudent = studentRepo.findById(id);

        if(findStudent.isPresent()){
            Student loStudent = findStudent.get();
            loStudent.set_deleted(true);
            studentRepo.save(loStudent);
            return true;
        }
        return false;
    }
}
