package com.prizyv.dutyornot;

import com.google.gson.Gson;
import com.prizyv.dutyornot.controller.CaseController;
import com.prizyv.dutyornot.dto.CaseDTO;
import com.prizyv.dutyornot.entity.Category;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
@RunWith(SpringJUnit4ClassRunner.class)
public abstract class AbstractTest {
    protected static final Gson gson = new Gson();
    @Autowired
    protected MockMvc mvc;
    @MockBean
    CaseController caseController;
    protected static final String CORRECT_DTO;
    protected static final String DTO_WITH_WRONG_PARAGRAPH;
    protected static final String DTO_WITH_EMPTY_TITLE;
    protected static final String EMPTY_DTO;
    static {
        CaseDTO correctCaseDTO = new CaseDTO();
        correctCaseDTO.setTitle("Correct title");
        correctCaseDTO.setComment("Этот диагноз был выставлен в 2021 году областным военкоматом...");
        correctCaseDTO.setParagraph("41А");
        correctCaseDTO.setCategory(Category.NGM);
        correctCaseDTO.setCaseDate(1664124904175L);
        CORRECT_DTO = gson.toJson(correctCaseDTO);

        CaseDTO caseDTOWithWrongParagraph = new CaseDTO();
        caseDTOWithWrongParagraph.setTitle("Correct title");
        caseDTOWithWrongParagraph.setComment("Correct comment");
        caseDTOWithWrongParagraph.setParagraph("441В");
        caseDTOWithWrongParagraph.setCategory(Category.G);
        caseDTOWithWrongParagraph.setCaseDate(1664124904175L);
        DTO_WITH_WRONG_PARAGRAPH = gson.toJson(caseDTOWithWrongParagraph);

        CaseDTO caseDTOWithEmptyTitle = new CaseDTO();
        caseDTOWithEmptyTitle.setTitle("");
        caseDTOWithEmptyTitle.setComment("Correct comment");
        caseDTOWithEmptyTitle.setParagraph("41В");
        caseDTOWithEmptyTitle.setCategory(Category.VN);
        caseDTOWithEmptyTitle.setCaseDate(1664124904105L);
        DTO_WITH_EMPTY_TITLE = gson.toJson(caseDTOWithEmptyTitle);

        CaseDTO emptyDTO = new CaseDTO();
        EMPTY_DTO = gson.toJson(emptyDTO);
    }
}
