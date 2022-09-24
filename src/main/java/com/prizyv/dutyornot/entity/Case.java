package com.prizyv.dutyornot.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
public class Case {
    @Id
    @GeneratedValue
    private Long id;
    @Size(min = 3, max = 60)
    private String title;
    @Size(min = 20, max = 500)
    private String comment;
    private Paragraph paragraph;
    @NotNull
    private Category category;
    @NotNull
    private LocalDate caseDate;
    private LocalDateTime creationDateTime;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Case aCase = (Case) o;
        return id != null && Objects.equals(id, aCase.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
