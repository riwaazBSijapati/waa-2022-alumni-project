package com.finalproject.alumnimanagement.Repository;


import com.finalproject.alumnimanagement.Entity.JobAdvertisement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobAdvertisementRepo extends CrudRepository<JobAdvertisement, Integer> {
}
