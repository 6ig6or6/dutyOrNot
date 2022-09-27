package com.prizyv.dutyornot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Case with provided id not found")
public class CaseNotFoundException extends RuntimeException{
}
