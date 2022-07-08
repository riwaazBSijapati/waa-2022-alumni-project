package com.finalproject.alumnimanagement.Controller;



import com.finalproject.alumnimanagement.Entity.Faculty;

import com.finalproject.alumnimanagement.Service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/faculties")
public class FacultyController {

    @Autowired
    private FacultyService facultyService;

    @PostMapping
    public ResponseEntity<?> saveFaculty(@RequestBody Faculty faculty){
        Faculty result = facultyService.save(faculty);
        if(result != null ){
            return ResponseEntity.ok(result);
        }
        return  ResponseEntity.badRequest().body(null);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getFacultyById( @PathVariable int id) {
        Faculty result = facultyService.getById(id);
        if (result!= null) {
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }

    @GetMapping
    public ResponseEntity<List<Faculty>> getAll(){
        List<Faculty> result = facultyService.getAll();
        if(result.size() >0){
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete( @PathVariable int id) {
        Boolean result = facultyService.deleteById(id);
        if (result) {
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }

}
