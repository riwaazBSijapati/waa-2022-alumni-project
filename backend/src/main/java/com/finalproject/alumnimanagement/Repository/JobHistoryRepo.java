package com.finalproject.alumnimanagement.Repository;


import com.finalproject.alumnimanagement.Entity.JobHistory;
import com.finalproject.alumnimanagement.Entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobHistoryRepo extends CrudRepository<JobHistory, Integer> {
}
