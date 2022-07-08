package com.finalproject.alumnimanagement.Service;

import com.finalproject.alumnimanagement.Dto.FacultyDto;

import java.util.List;

public interface FacultyService {

    List<FacultyDto> getAll();

    FacultyDto getById(int id);

}
