package com.prizyv.dutyornot.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.springframework.security.config.Customizer.withDefaults;
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((auth) -> auth
                        .mvcMatchers("/api/v1/cases", "/api/v1/cases").permitAll()
                        .mvcMatchers("/h2-console/**").permitAll()
                        .mvcMatchers("/api/v1/admin/delete/**",
                                "/api/v1/admin/update/**").authenticated()
                        .anyRequest().permitAll()
                )
                .httpBasic(withDefaults())
                .csrf().disable().headers().frameOptions().disable();
    }
    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder(13);
    }
}
