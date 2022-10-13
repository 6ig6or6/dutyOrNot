package com.prizyv.dutyornot.dto;

import com.prizyv.dutyornot.entity.Category;
import com.prizyv.dutyornot.validation.EnumNamePattern;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
public class CaseDTO {
    @Size(min = 3, max = 60)
    private String title;
    @Size(min = 20, max = 500)
    private String comment;
    @Pattern(regexp = "[1-8][0-9][А-Д]|[1-9][А-Д]")
    private String paragraph;
    @EnumNamePattern(regexp = "G|GO|NGM|NGI|VN")
    private Category category;
    @NotNull
    private Long caseDate;
}
