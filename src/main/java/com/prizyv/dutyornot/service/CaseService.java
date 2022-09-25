package com.prizyv.dutyornot.service;

import com.prizyv.dutyornot.dto.CaseDTO;
import com.prizyv.dutyornot.entity.Case;
import com.prizyv.dutyornot.entity.Category;
import com.prizyv.dutyornot.repository.CaseRepository;
import com.prizyv.dutyornot.util.CaseMapper;
import com.prizyv.dutyornot.util.PageableCreator;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class CaseService {
    private final CaseRepository caseRepository;

    public CaseService(CaseRepository caseRepository) {
        this.caseRepository = caseRepository;
    }


    public Case registerCase(CaseDTO caseDTO) {
        Case aCase = CaseMapper.mapFromDTO(caseDTO);
        return caseRepository.save(aCase);
    }

    public List<Case> getCasesByParams(String title,
                                       String comment,
                                       String paragraph,
                                       Category category,
                                       Long caseAfter,
                                       Long caseBefore,
                                       Integer pageNumber,
                                       Integer pageSize) {
        Date dateAfter = Date.valueOf(LocalDate.ofEpochDay(caseAfter));
        Date dateBefore = Date.valueOf(LocalDate.ofEpochDay(caseBefore));
        Pageable pageable = PageableCreator.createPageable(pageNumber, pageSize);
        return caseRepository.findBy(title, comment,
                paragraph, category,
                dateAfter, dateBefore,
                pageable);
    }

}
