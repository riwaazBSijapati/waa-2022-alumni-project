package com.finalproject.alumnimanagement.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String first_name;
    private String last_name;
    private String password;
    private float gpa;
    private boolean active;
    private String job_interess;
    private boolean is_deleted;
    private String state;
    private String city;


    @ManyToOne
    private Faculty faculty;


    @ManyToOne
    private Departement major;



    @ManyToOne
    private Faculty faculty;

}
