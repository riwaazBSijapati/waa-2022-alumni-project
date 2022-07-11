package com.finalproject.alumnimanagement.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin{

        @Id
        private int id;
        private String email;
        private String password;
        }
