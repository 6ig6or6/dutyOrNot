package com.prizyv.dutyornot.service;

import com.prizyv.dutyornot.entity.Case;
import com.prizyv.dutyornot.repository.CaseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaseService {
    private final CaseRepository caseRepository;

    public CaseService(CaseRepository caseRepository) {
        this.caseRepository = caseRepository;
    }
    public List<Case> findAllCases() {
        return caseRepository.findAll();
    }

}
