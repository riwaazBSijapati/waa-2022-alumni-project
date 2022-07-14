package com.finalproject.alumnimanagement.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobAdvertisement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    private String description;
    private String benefits;
    private String file;
    private String state;
    @OneToOne
    private Student student;
    @OneToMany
    private List<Tag> tags;

}
