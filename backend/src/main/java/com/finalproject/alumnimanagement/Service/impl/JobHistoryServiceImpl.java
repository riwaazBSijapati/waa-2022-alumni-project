package com.finalproject.alumnimanagement.Service.impl;


import com.finalproject.alumnimanagement.Dto.JobAdvertisementDto;
import com.finalproject.alumnimanagement.Dto.JobHistoryDto;
import com.finalproject.alumnimanagement.Repository.JobAdvertisementRepo;
import com.finalproject.alumnimanagement.Repository.JobHistoryRepo;
import com.finalproject.alumnimanagement.Service.JobAdvertisementService;
import com.finalproject.alumnimanagement.Service.JobHistoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobHistoryServiceImpl implements JobHistoryService {
    @Autowired
    private JobHistoryRepo jobHistoryRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<JobHistoryDto> getJobHistory() {
        List<JobHistoryDto> result = new ArrayList<JobHistoryDto>();
        jobHistoryRepo.findAll().forEach(x -> {
            JobHistoryDto jhd = modelMapper.map(x, JobHistoryDto.class);
            result.add(jhd);
        });
        return result;
    }

}
