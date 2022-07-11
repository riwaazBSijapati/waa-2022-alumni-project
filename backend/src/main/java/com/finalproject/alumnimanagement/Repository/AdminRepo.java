package com.finalproject.alumnimanagement.Repository;


import com.finalproject.alumnimanagement.Entity.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends CrudRepository<Admin, Integer> {
}
