package com.finalproject.alumnimanagement.Service.impl;


import com.finalproject.alumnimanagement.Dto.JobAdvertisementDto;
import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Entity.JobAdvertisement;
import com.finalproject.alumnimanagement.Entity.JobHistory;
import com.finalproject.alumnimanagement.Entity.Student;
import com.finalproject.alumnimanagement.Repository.JobAdvertisementRepo;
import com.finalproject.alumnimanagement.Repository.StudentRepo;
import com.finalproject.alumnimanagement.Service.JobAdvertisementService;
import com.finalproject.alumnimanagement.Service.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobAdvertisementServiceImpl implements JobAdvertisementService {
    @Autowired
    private JobAdvertisementRepo jobAdvertisementRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<JobAdvertisementDto> getAllJobAdvertisements() {
        List<JobAdvertisementDto> result = new ArrayList<JobAdvertisementDto>();
        jobAdvertisementRepo.findAll().forEach(x -> {
            JobAdvertisementDto std = modelMapper.map(x, JobAdvertisementDto.class);
            result.add(std);
        });
        return result;
    }

    @Override
    public List<JobAdvertisementDto> getAllJobAdvertisementsByStudentId(int studentId) {
        List<JobAdvertisementDto> result = new ArrayList<JobAdvertisementDto>();
        List<JobAdvertisementDto> all = getAllJobAdvertisements();
        for (JobAdvertisementDto dto : all) {
            if (studentId == dto.getStudent().getId()) {
                result.add(dto);
            }
        }
        return result;
    }

    @Override
    public void addAdvertisement(JobAdvertisementDto jobAdvertisementDto) {
        Student s = new Student();
        s.setId(4);
        JobAdvertisement ja = new JobAdvertisement();
        ja.setDescription(jobAdvertisementDto.getDescription());
        ja.setBenefits(jobAdvertisementDto.getBenefits());
        ja.setState(jobAdvertisementDto.getState());
        ja.setStudent(s);
        jobAdvertisementRepo.save(ja);
    }

    @Override
    public List<JobAdvertisementDto> search(JobAdvertisementDto jobAdvertisementDto) {
        List<JobAdvertisementDto> all = getAllJobAdvertisements();
        List<JobAdvertisementDto> dtoList = new ArrayList<>();

        for (JobAdvertisementDto dto : all) {
            boolean rs = true;
            if (isNotNull(dto.getState()) && !dto.getState().contains(jobAdvertisementDto.getState())) {
                rs = false;
            } else if (isNotNull(dto.getDescription()) && !dto.getDescription().contains(jobAdvertisementDto.getDescription())) {
                rs = false;
            } else if (isNotNull(dto.getBenefits()) && !dto.getBenefits().contains(jobAdvertisementDto.getBenefits())) {
                rs = false;
            }
            if(rs){
                dtoList.add(dto);
            }

        }
        return dtoList;
    }

    private boolean isNotNull(String s) {
        return s != null && !s.trim().equals("");
    }
}
