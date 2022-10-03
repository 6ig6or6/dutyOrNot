package com.prizyv.dutyornot.util;

import com.prizyv.dutyornot.dto.CaseDTO;
import com.prizyv.dutyornot.entity.Case;
import com.prizyv.dutyornot.entity.Category;

import java.time.Instant;


public class CaseMapper {
    public static Case mapFromDTO(CaseDTO caseDTO) {
        return Case.builder()
                .title(caseDTO.getTitle())
                .comment(caseDTO.getComment())
                .caseDate(new java.util.Date(caseDTO.getCaseDate()))
                .creationDate(new java.util.Date(Instant.now().toEpochMilli()))
                .paragraph(caseDTO.getParagraph())
                .category(caseDTO.getCategory())
                .build();
    }

    public static Case updateCase(CaseDTO caseDTO, Case aCase) {
        String title = caseDTO.getTitle();
        String comment = caseDTO.getComment();
        String paragraph = caseDTO.getParagraph();
        Category category = caseDTO.getCategory();
        Long caseDate = caseDTO.getCaseDate();
        if (title != null) {
            aCase.setTitle(title);
        }
        if (comment != null) {
            aCase.setComment(comment);
        }
        if (paragraph != null) {
            aCase.setParagraph(paragraph);
        }
        if (category != null) {
            aCase.setCategory(category);
        }
        if (caseDate != null) {
            aCase.setCaseDate(new java.util.Date(caseDate));
        }
        return aCase;
    }
}
