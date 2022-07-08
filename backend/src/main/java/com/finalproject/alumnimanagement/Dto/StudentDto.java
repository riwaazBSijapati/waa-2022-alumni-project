package com.finalproject.alumnimanagement.Dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentDto {
    private int id;
    private String first_name;
    private String last_name;
    private boolean active;
    private String job_interess;
    private boolean is_deleted;

}
