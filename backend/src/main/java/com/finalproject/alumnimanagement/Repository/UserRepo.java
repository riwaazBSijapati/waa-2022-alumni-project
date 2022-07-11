package com.finalproject.alumnimanagement.Repository;

import com.finalproject.alumnimanagement.Entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo {
    User findByEmail(String email);
}
