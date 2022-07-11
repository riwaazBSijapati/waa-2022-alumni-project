package com.finalproject.alumnimanagement.Entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class JobHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String companyName;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String state;
    @OneToMany
    private List<Tag> tags;




}
