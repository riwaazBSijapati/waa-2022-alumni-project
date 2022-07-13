package com.finalproject.alumnimanagement.Service;


import com.finalproject.alumnimanagement.Dto.JobAdvertisementDto;
import com.finalproject.alumnimanagement.Dto.JobHistoryDto;

import java.util.List;

public interface JobHistoryService {
    List<JobHistoryDto> getJobHistory();
    public void addJob(JobHistoryDto jobHistoryDto);
}
