package com.prizyv.dutyornot.security;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import static org.springframework.security.config.Customizer.withDefaults;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((auth) -> auth
                        .mvcMatchers("/api/v1/admin/delete/**",
                                "/api/v1/admin/update/**").authenticated()
                        .mvcMatchers("/api/v1/cases", "/api/v1/cases").permitAll()
                        .mvcMatchers("/h2-console/**").permitAll()
                        .anyRequest().permitAll()
                )
                .httpBasic(withDefaults())
                .csrf().disable();
    }
}
