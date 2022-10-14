package com.prizyv.dutyornot;

import com.google.gson.Gson;
import com.prizyv.dutyornot.dto.CaseDTO;
import com.prizyv.dutyornot.entity.Case;
import com.prizyv.dutyornot.entity.Category;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.time.Instant;
import java.util.Calendar;
import java.util.Date;

@RunWith(SpringJUnit4ClassRunner.class)
public abstract class AbstractTest {
    protected static final Gson gson = new Gson();
    @Autowired
    protected MockMvc mvc;
    protected static final String COMMON_URL = "http://localhost:8081/api/v1/";
    protected static final String POST_GET_PATH = COMMON_URL + "cases";
    protected static final String CORRECT_DTO;
    protected static final String DTO_WITH_WRONG_PARAGRAPH;
    protected static final String DTO_WITH_EMPTY_TITLE;
    protected static final String EMPTY_DTO;
    protected static final Case CASE_1 = new Case(1L, "Case 1 title", "Case 1 comment...",
            "12А", Category.VN, new Date(2020, Calendar.DECEMBER, 13), new Date(Instant.now().toEpochMilli()));
    protected static final Case CASE_2 = new Case(2L, "Case 2 title", "Case 2 comment...",
            "13Б", Category.G, new Date(2021, Calendar.DECEMBER, 10), new Date(Instant.now().toEpochMilli()));
    protected static final Case CASE_3 = new Case(3L, "Case 3 title", "Case 3 comment...",
            "75Б", Category.GO, new Date(2022, Calendar.OCTOBER, 1), new Date(Instant.now().toEpochMilli()));
    protected static final Case CASE_4 = new Case(4L, "Case 3 title", "Case 3 comment...",
            "60В", Category.GO, new Date(2022, Calendar.OCTOBER, 1), new Date(Instant.now().toEpochMilli()));
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
