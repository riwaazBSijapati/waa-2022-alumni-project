package com.finalproject.alumnimanagement.Dto;

import lombok.Data;
import java.util.Date;


@Data
public class FacultyDto {
    private String id;
    private String name;
    private String email;
    private boolean active;
    private Date lastLoggedInAt;
    private boolean is_deleted;

}

