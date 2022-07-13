package com.finalproject.alumnimanagement.Dto;
import com.finalproject.alumnimanagement.Entity.Tag;
import lombok.Data;

import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.List;


@Data
public class JobHistoryDto {
    private int id;
    private String companyName;
    private String startDate;
    private String endDate;
    private String reasonToLeave;
    private String comments;
    private String state;
    private List<Tag> tags;
}
