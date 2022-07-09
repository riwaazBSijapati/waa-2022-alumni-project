package com.finalproject.alumnimanagement.Service.impl;


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
        student.setActive(true);
        return studentRepo.save(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
        List<StudentDto> result = new ArrayList<StudentDto>();
        studentRepo.findAll().forEach(x -> {
            if (!x.is_deleted()) {
                StudentDto std = modelMapper.map(x, StudentDto.class);
                result.add(std);
            }
        });
        return result;
    }

    @Override
    public StudentDto getStudentsById(int id) {

        Optional<Student> result1 = studentRepo.findStudentById(id);
        if (result1.isPresent()) {
            StudentDto std = modelMapper.map(result1.get(), StudentDto.class);
            return std;
        }
        return new StudentDto();
    }

    @Override
    public List<StudentDto> getStudentByName(String name) {
        List<StudentDto> result = new ArrayList<StudentDto>();
        studentRepo.findStudentByName(name.toLowerCase()).forEach(x -> {
            if (!x.is_deleted()) {
                StudentDto std = modelMapper.map(x, StudentDto.class);
                result.add(std);
            }
        });
        return result;
    }

    @Override
    public Boolean deleteStudentById(int id) {
        Optional<Student> findStudent = studentRepo.findById(id);

        if (findStudent.isPresent()) {
            Student loStudent = findStudent.get();
            loStudent.set_deleted(true);
            studentRepo.save(loStudent);
            return true;
        }
        return false;
    }

    @Override
    public Student updateStudent(Student student) {
        var findStd = studentRepo.findStudentById(student.getId());
        if(findStd.isPresent()){
            var loStudent = findStd.get();

            loStudent.setFirst_name(student.getFirst_name() != null ? student.getFirst_name() : loStudent.getFirst_name());
            loStudent.setLast_name(student.getLast_name() != null ? student.getLast_name() : loStudent.getLast_name());
            loStudent.setId(student.getId() != 0 ? student.getId() : loStudent.getId());
            loStudent.setPassword(student.getPassword() != null ? student.getPassword() : loStudent.getPassword());
            loStudent.setJob_interess(student.getJob_interess() != null ? student.getJob_interess() : loStudent.getJob_interess());
            loStudent.setActive(student.isActive() != false ? student.isActive() : loStudent.isActive());
            loStudent.setGpa(student.getGpa()!= 0 ? student.getGpa() : loStudent.getGpa());
            loStudent.setState(student.getState()!= null ? student.getState() : loStudent.getState());
            loStudent.setCity(student.getCity() != null ? student.getCity() : loStudent.getCity());
            loStudent.setMajor(student.getMajor() != null ? student.getMajor() : loStudent.getMajor());
            return  studentRepo.save(loStudent);
        }
        return new Student();
    }


    @Override
    public List<StudentDto> getStudentByCity(String city) {
        List<StudentDto> result = new ArrayList<StudentDto>();
        studentRepo.findStudentByCity(city.toLowerCase()).forEach(x -> {
            if (!x.is_deleted()) {
                StudentDto std = modelMapper.map(x, StudentDto.class);
                result.add(std);
            }
        });
        return result;

    }

    @Override
    public List<StudentDto> getStudentByState(String state) {
        List<StudentDto> result = new ArrayList<StudentDto>();
        studentRepo.findStudentByState(state.toLowerCase()).forEach(x -> {
            if (!x.is_deleted()) {
                StudentDto std = modelMapper.map(x, StudentDto.class);
                result.add(std);
            }
        });
        return result;
    }
}