package com.finalproject.alumnimanagement.Service.impl;

import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class studentServiceImpl implements StudentService {
    @Override
    public List<StudentDto> getAll() {
        return null;
    }

    @Override
    public StudentDto getById(int id) {
        return null;
    }
}
