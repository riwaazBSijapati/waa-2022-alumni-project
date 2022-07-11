package com.finalproject.alumnimanagement.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Departement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;



    @OneToMany(mappedBy = "major")
    private List<Student> students;

    @OneToMany(mappedBy = "department")
    private List<Faculty> faculties;
}


