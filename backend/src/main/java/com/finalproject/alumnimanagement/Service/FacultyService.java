package com.finalproject.alumnimanagement.Service;


import com.finalproject.alumnimanagement.Dto.FacultyDto;
import com.finalproject.alumnimanagement.Entity.Faculty;

import java.util.List;

public interface FacultyService {
    Faculty save(Faculty faculty);
    Faculty getById(int id);
    List<Faculty> getAll();
    Boolean deleteById(int id);

    FacultyDto getActivateFaculty(int id);

}
