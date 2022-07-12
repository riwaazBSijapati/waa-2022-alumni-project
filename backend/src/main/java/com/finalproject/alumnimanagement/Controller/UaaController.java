package com.finalproject.alumnimanagement.Controller;

import com.finalproject.alumnimanagement.Dto.UserDto;
import com.finalproject.alumnimanagement.Model.LoginRequest;
import com.finalproject.alumnimanagement.Model.LoginResponse;
import com.finalproject.alumnimanagement.Model.RefreshTokenRequest;
import com.finalproject.alumnimanagement.Service.UaaService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/uaa")
@CrossOrigin
@AllArgsConstructor
public class UaaController {
    @Autowired
    private final UaaService uaaService;
    //localhost:8081/api/v1/uaa
    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        var loginResponse = uaaService.login(loginRequest);
        return ResponseEntity.ok().body(loginResponse);
    }

    @PostMapping("/refreshToken")
    public LoginResponse refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
        return uaaService.refreshToken(refreshTokenRequest);
    }

}
