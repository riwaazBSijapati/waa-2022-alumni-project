package com.finalproject.alumnimanagement.Service.impl;


import com.finalproject.alumnimanagement.Dto.FacultyDto;
import com.finalproject.alumnimanagement.Repository.FacultyRepo;
import com.finalproject.alumnimanagement.Service.FacultyService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
public class facultyServiceImpl implements FacultyService {

    final private ModelMapper modelmapper;
    final private FacultyRepo facultyRepo;

    @Override
    public List<FacultyDto> getAll() {
        var facultyList = facultyRepo.findAll();
        var facultyDto = new ArrayList<FacultyDto>();

        facultyList.forEach(Faculty -> {
            facultyDto.add(modelmapper.map(Faculty, FacultyDto.class));
        });

        return facultyDto;
    }

    @Override
    public FacultyDto getById(int id) {
        return null;
    }
}
