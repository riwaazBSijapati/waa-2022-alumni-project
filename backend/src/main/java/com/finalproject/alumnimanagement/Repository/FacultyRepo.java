package com.finalproject.alumnimanagement.Repository;


import com.finalproject.alumnimanagement.Entity.Faculty;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacultyRepo extends CrudRepository<Faculty, Integer> {
}
