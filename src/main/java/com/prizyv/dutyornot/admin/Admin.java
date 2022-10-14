package com.prizyv.dutyornot.admin;

import com.prizyv.dutyornot.security.Role;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@RequiredArgsConstructor
@Entity
@Table(name = "admins")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min=5, message = "Username should not be shorter than 5 symbols")
    private String username;
    @Size(min=5, message = "Password should not be shorter than 5 symbols")
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;

}
