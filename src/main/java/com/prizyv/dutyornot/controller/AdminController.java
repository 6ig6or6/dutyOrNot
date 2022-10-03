package com.prizyv.dutyornot.controller;

import com.prizyv.dutyornot.dto.CaseDTO;
import com.prizyv.dutyornot.entity.Case;
import com.prizyv.dutyornot.service.CaseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/admin/")
public class AdminController {
    private final CaseService caseService;

    public AdminController(CaseService caseService) {
        this.caseService = caseService;
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteCase(@PathVariable Long id) {
        caseService.deleteCase(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("update/{id}")
    public ResponseEntity<Case> updateCase(@PathVariable Long id,
                                           @RequestBody @Valid CaseDTO caseDTO) {
        return new ResponseEntity<>(caseService.updateCase(id, caseDTO), HttpStatus.OK);
    }
}
