package com.finalproject.alumnimanagement.Repository;


import com.finalproject.alumnimanagement.Entity.JobAdvertisement;
import com.finalproject.alumnimanagement.Entity.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobAdvertisementRepo extends CrudRepository<JobAdvertisement, Integer> {
//    @Query(value = "select * from job_advertisement where state like %IA% and benefits  like %:benefits % and description  like %:description %"  , nativeQuery = true )
@Query(value = "select * from job_advertisement where lower(state) like '%state%'", nativeQuery = true )
    List<JobAdvertisement> search(@Param("state") String state, String benefits, String description);
}
