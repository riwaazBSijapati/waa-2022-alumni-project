package com.finalproject.alumnimanagement.Service;


import com.finalproject.alumnimanagement.Dto.JobAdvertisementDto;
import com.finalproject.alumnimanagement.Dto.StudentDto;

import java.util.List;

public interface JobAdvertisementService {
    List<JobAdvertisementDto> getAllJobAdvertisements();
    List<JobAdvertisementDto> getAllJobAdvertisementsByStudentId(int studentId);

    public void addAdvertisement(JobAdvertisementDto jobAdvertisementDto);

    public List<JobAdvertisementDto> search(JobAdvertisementDto jobAdvertisementDto);

}
