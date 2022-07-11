package com.finalproject.alumnimanagement.Repository;


import com.finalproject.alumnimanagement.Entity.JobAdvertisement;
import com.finalproject.alumnimanagement.Entity.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JobAdvertisementRepo extends CrudRepository<JobAdvertisement, Integer> {

}
