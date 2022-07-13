package com.finalproject.alumnimanagement.Controller;


import com.finalproject.alumnimanagement.Dto.JobAdvertisementDto;
import com.finalproject.alumnimanagement.Dto.JobHistoryDto;
import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Service.JobAdvertisementService;
import com.finalproject.alumnimanagement.Service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/jobAdvertisements")
@CrossOrigin
public class JobAdvertisementController {

    @Autowired
    private JobAdvertisementService jobAdvertisementService;
//    http://localhost:8080/jobAdvertisements
    @GetMapping
    public ResponseEntity<List<JobAdvertisementDto>> getAll(){
        List<JobAdvertisementDto> result = jobAdvertisementService.getAllJobAdvertisements();
        if(result.size() >0){
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }
    //    http://localhost:8080/jobAdvertisements/4
    @GetMapping("/{studentId}")
    public ResponseEntity<List<JobAdvertisementDto>> getAllJobAdvertisementsByStudentId(@PathVariable int studentId){
        List<JobAdvertisementDto> result = jobAdvertisementService.getAllJobAdvertisementsByStudentId(studentId);
        if(result.size() >0){
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }
    @PostMapping("/addAdvertisement")
    public String addAdvertisement(@RequestBody JobAdvertisementDto jobAdvertisementDto) {
        jobAdvertisementService.addAdvertisement(jobAdvertisementDto);
        return "success";
    }

    @PostMapping("/search")
    public List<JobAdvertisementDto> search(@RequestBody JobAdvertisementDto jobAdvertisementDto) {
        return jobAdvertisementService.search(jobAdvertisementDto);
    }
}
