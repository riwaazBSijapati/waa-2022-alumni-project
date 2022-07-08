package com.finalproject.alumnimanagement.Service.Impl;


import com.finalproject.alumnimanagement.Entity.Faculty;
import com.finalproject.alumnimanagement.Repository.FacultyRepo;
import com.finalproject.alumnimanagement.Service.FacultyService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FacultyServiceImpl implements FacultyService {

    @Autowired
    private FacultyRepo facultyRepo;
    @Autowired
    private ModelMapper modelMapper;


    @Override
    public Faculty save(Faculty faculty) {
        faculty.set_deleted(false);
        return facultyRepo.save(faculty);
    }

    @Override
    public Faculty getById(int id) {
        Optional<Faculty> result= facultyRepo.findById(id);
        if(result.isPresent()){
            return result.get();
        }
        return new Faculty();
    }

    @Override
    public List<Faculty> getAll() {
        List<Faculty> result = new ArrayList<Faculty>();
        facultyRepo.findAll().forEach(x->{
            result.add(x);
        });
        return result;
    }

    @Override
    public Boolean deleteById(int id) {
        Optional<Faculty> findFac = facultyRepo.findById(id);
        if (findFac.isPresent()){
            Faculty result = findFac.get();
            result.set_deleted(true);
            facultyRepo.save(result);
            return true;
        }
        return false;
    }
}

