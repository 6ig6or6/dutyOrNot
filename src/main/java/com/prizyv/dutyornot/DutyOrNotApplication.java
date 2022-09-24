package com.prizyv.dutyornot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DutyOrNotApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(DutyOrNotApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(DutyOrNotApplication.class, args);
    }

}
