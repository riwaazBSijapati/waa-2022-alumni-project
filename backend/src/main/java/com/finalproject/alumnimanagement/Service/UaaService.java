package com.finalproject.alumnimanagement.Service;

import com.finalproject.alumnimanagement.Model.LoginRequest;
import com.finalproject.alumnimanagement.Model.LoginResponse;
import com.finalproject.alumnimanagement.Model.RefreshTokenRequest;

public interface UaaService {
    LoginResponse login(LoginRequest loginRequest);
    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
