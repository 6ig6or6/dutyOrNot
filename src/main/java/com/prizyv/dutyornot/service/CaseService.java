package com.prizyv.dutyornot.service;

import com.prizyv.dutyornot.dto.CaseDTO;
import com.prizyv.dutyornot.entity.Case;
import com.prizyv.dutyornot.entity.Category;
import com.prizyv.dutyornot.exception.CaseNotFoundException;
import com.prizyv.dutyornot.repository.CaseRepository;
import com.prizyv.dutyornot.util.CaseMapper;
import com.prizyv.dutyornot.util.PageableCreator;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class CaseService {
    private final CaseRepository caseRepository;

    public CaseService(CaseRepository caseRepository) {
        this.caseRepository = caseRepository;
    }

    public Case findById(Long id) {
        return caseRepository
                .findById(id)
                .orElseThrow(CaseNotFoundException::new);
    }

    public Case registerCase(CaseDTO caseDTO) {
        Case aCase = CaseMapper.mapFromDTO(caseDTO);
        return caseRepository.save(aCase);
    }

    public void deleteCase(Long id) {
        Case aCase = findById(id);
        caseRepository.delete(aCase);
    }

    public Case updateCase(Long id, CaseDTO caseDTO) {
        Case aCase = findById(id);
        Case updated = CaseMapper.updateCase(caseDTO, aCase);
        caseRepository.save(updated);
        return updated;
    }

    public List<Case> getCasesByParams(String title,
                                       String comment,
                                       String paragraph,
                                       Category category,
                                       Long caseAfter,
                                       Integer pageNumber,
                                       Integer pageSize) {
        Date dateAfter = caseAfter == null ? null : new Date(caseAfter);
        Pageable pageable = PageableCreator.createPageable(pageNumber, pageSize);
        return caseRepository.findBy(title, comment,
                paragraph, category,
                dateAfter,
                pageable);
    }
    public int countCases(String title,
                          String comment,
                          String paragraph,
                          Category category,
                          Long caseAfter) {
        Date dateAfter = caseAfter == null ? null : new Date(caseAfter);
        return caseRepository.countBy(title,
                comment,
                paragraph,
                category,
                dateAfter);
    }

}
