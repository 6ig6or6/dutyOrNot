package com.prizyv.dutyornot.controller;

import com.prizyv.dutyornot.dto.CaseDTO;
import com.prizyv.dutyornot.entity.Case;
import com.prizyv.dutyornot.entity.Category;
import com.prizyv.dutyornot.service.CaseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class CaseController {
    private final CaseService caseService;

    public CaseController(CaseService caseService) {
        this.caseService = caseService;
    }
    @PostMapping("case")
    public ResponseEntity<Case> registerCase(@RequestBody @Valid CaseDTO caseDTO) {
        Case aCase = caseService.registerCase(caseDTO);
        return new ResponseEntity<>(aCase, HttpStatus.OK);
    }
    @GetMapping("cases")
    public ResponseEntity<List<Case>> getCases(@RequestParam(required = false) String title,
                                               @RequestParam(required = false) String comment,
                                               @RequestParam(required = false) String paragraph,
                                               @RequestParam(required = false) Category category,
                                               @RequestParam(required = false) Long caseAfter,
                                               @RequestParam(required = false) Long caseBefore,
                                               @RequestParam(required = false) Integer pageNumber,
                                               @RequestParam(required = false) Integer pageSize) {
        List<Case> cases = caseService.getCasesByParams(title, comment,
                paragraph, category,
                caseAfter, caseBefore,
                pageNumber, pageSize);
        return new ResponseEntity<>(cases, HttpStatus.OK);
    }
}
