package com.prizyv.dutyornot.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;


@EnableWebSecurity
public class ApplicationSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((auth) -> auth
                        .mvcMatchers("/api/v1/cases", "/api/v1/cases").permitAll()
                        .mvcMatchers("/api/v1/admin/delete/**",
                                "/api/v1/admin/update/**").authenticated()
                        .mvcMatchers("/h2-console/**").permitAll()
                        .anyRequest().permitAll()
                )
                .httpBasic(withDefaults());

        http.csrf().disable();
        http.headers().frameOptions().disable();
        return http.build();
    }

}
