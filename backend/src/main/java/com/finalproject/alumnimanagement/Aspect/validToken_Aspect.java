package com.finalproject.alumnimanagement.Aspect;


import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class validToken_Aspect {


    @Pointcut("@annotation(com.finalproject.alumnimanagement.Aspect.Annotations.checkToken)")
    public void ValidTokenAnnotation() {
    }


    @Around("ValidTokenAnnotation()")
    public Object Validation(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {

        var result = proceedingJoinPoint.proceed();

        System.out.println(proceedingJoinPoint.getSignature().getName());

        return result;
    }

}