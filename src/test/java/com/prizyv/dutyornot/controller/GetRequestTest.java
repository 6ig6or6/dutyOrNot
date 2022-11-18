package com.prizyv.dutyornot.controller;

import com.prizyv.dutyornot.AbstractTest;
import com.prizyv.dutyornot.entity.Case;
import com.prizyv.dutyornot.service.CaseService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(CaseController.class)
class GetRequestTest extends AbstractTest {
    @MockBean
    private CaseService caseService;

    @Test
    void getAllCasesTest() throws Exception {
        List<Case> list = new ArrayList<>(Arrays.asList(CASE_1, CASE_2, CASE_3, CASE_4));

        Mockito.when(caseService.getCasesByParams(null, null, null, null,
                null, null, null)).thenReturn(list);

        mvc.perform(get(POST_GET_PATH)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(4)))
                .andReturn();
    }

}
