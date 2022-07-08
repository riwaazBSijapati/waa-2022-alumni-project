package com.finalproject.alumnimanagement.Controller;


import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Entity.Student;
import com.finalproject.alumnimanagement.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping
    public ResponseEntity<?> saveStudent(@RequestBody Student student){
        Student result = studentService.addStudent(student);
        if(result.getId()>0){
            return ResponseEntity.ok(result);
        }
        return  ResponseEntity.badRequest().body(null);
    }

    @GetMapping
    public ResponseEntity<List<StudentDto>> getAll(){
        List<StudentDto> result = studentService.getAllStudents();
        if(result.size() >0){
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById( @PathVariable int id) {
        StudentDto result = studentService.getStudentsById(id);
        if (result.getId() > 0) {
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }

    @GetMapping("/filter")
    public ResponseEntity<?> getByName(@RequestParam String name) {
        List<StudentDto> result = studentService.getStudentByName(name);
        if (result.size()>0) {
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteStudent( @PathVariable int id) {
        Boolean result = studentService.deleteStudentById(id);
        if (result) {
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);

    }


}
