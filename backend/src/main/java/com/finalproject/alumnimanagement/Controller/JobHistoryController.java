package com.finalproject.alumnimanagement.Controller;


import com.finalproject.alumnimanagement.Dto.JobAdvertisementDto;
import com.finalproject.alumnimanagement.Dto.JobHistoryDto;
import com.finalproject.alumnimanagement.Service.JobAdvertisementService;
import com.finalproject.alumnimanagement.Service.JobHistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/jobHistory")
@CrossOrigin
public class JobHistoryController {
    @Autowired
    private JobHistoryService jobHistoryService;

    //    http://localhost:8080/jobHistory
    @GetMapping
    public ResponseEntity<List<JobHistoryDto>> getJobHistory(){
        List<JobHistoryDto> result = jobHistoryService.getJobHistory();
        if(result.size() >0){
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.badRequest().body(null);
    }
}
