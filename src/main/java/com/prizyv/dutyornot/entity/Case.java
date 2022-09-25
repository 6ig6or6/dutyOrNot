package com.prizyv.dutyornot.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "cases")
public class Case {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 60)
    private String title;
    @Column(length = 500, name = "comm")
    private String comment;
    @Column(length = 3)
    private String paragraph;
    @Enumerated(value = EnumType.STRING)
    private Category category;
    @Temporal(TemporalType.DATE)
    private Date caseDate;
    @Temporal(TemporalType.DATE)
    private Date creationDate;

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
