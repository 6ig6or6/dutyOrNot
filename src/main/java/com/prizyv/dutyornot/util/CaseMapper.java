package com.prizyv.dutyornot.util;

import com.prizyv.dutyornot.dto.CaseDTO;
import com.prizyv.dutyornot.entity.Case;

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
        //TODO
        return null;
    }
}
