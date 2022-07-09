package com.finalproject.alumnimanagement.Controller;


import com.finalproject.alumnimanagement.Aspect.Annotations.checkToken;
import com.finalproject.alumnimanagement.Dto.FacultyDto;
import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Entity.Faculty;
import com.finalproject.alumnimanagement.Service.AdminService;
import com.finalproject.alumnimanagement.Service.FacultyService;
import com.finalproject.alumnimanagement.Service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/admin")
@CrossOrigin
public class adminController {

    final private AdminService adminService;



    //////////////////////////////////Faculty////////////////////////////////////////////


    @checkToken
    @GetMapping("/faculty")
    public ResponseEntity<List<FacultyDto>> getAllFaculty(){
        List<FacultyDto> result = adminService.getAllFaculty();
        if(result.size() >0){
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }
    }

    @checkToken
    @PostMapping("/addFaculty")
    public boolean addFaculty(@RequestBody FacultyDto facultydto){
        return true;
    }

    @checkToken
    @PutMapping("/updateFaculty")
    public boolean editFaculty(){
        return true;
    }

    @checkToken
    @DeleteMapping("/removeFaculty")
    public boolean removeFaculty(){
        //soft delete, set delete flag;
        return true;
    }



    //////////////////////////////////Students////////////////////////////////////////////

    @checkToken
    @GetMapping("/Students")
    public List<FacultyDto> getAllStudents(){
        return null;
    }

    @checkToken
    @PostMapping("/addStudent")
    public boolean addStudent(@RequestBody StudentDto studentDto){
        return true;
    }

    @checkToken
    @PutMapping("/updateStudent")
    public boolean editStudent(){
        return true;
    }

    @checkToken
    @DeleteMapping("/removeStudent")
    public boolean removeStudent(){
        //soft delete, set delete flag;
        return true;
    }


}
