package com.finalproject.alumnimanagement.Repository;


import com.finalproject.alumnimanagement.Dto.StudentDto;
import com.finalproject.alumnimanagement.Entity.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepo extends CrudRepository<Student, Integer> {

    @Query(value = "select * from Student where id = :id and  is_deleted = false"  , nativeQuery = true )
    Optional<Student> findStudentById(int id);
    @Query(value = "select * from Student where lower(first_name) like %:name% or lower(last_name) like %:name% "  , nativeQuery = true )
    List<Student> findStudentByName(String name);

    @Query(value = "select * from Student where lower(city) like %:city%", nativeQuery = true)
    List<Student> findStudentByCity(String city);
    @Query(value = "select * from Student where lower(state) like %:state%", nativeQuery = true)
    List<Student> findStudentByState(String state);


}
