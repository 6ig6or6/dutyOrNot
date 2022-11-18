package com.prizyv.dutyornot.controller;

import com.prizyv.dutyornot.AbstractTest;
import com.prizyv.dutyornot.service.CaseService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(AdminController.class)
public class AdminTest extends AbstractTest {
    protected static final String DELETE_PATH = COMMON_URL + "admin/delete/";
    protected static final String PUT_PATH = COMMON_URL + "admin/update/";
    private static final String CORRECT_ID = "1";
    private static final String INCORRECT_ID = "-100";
    @SuppressWarnings("unused")
    @MockBean
    private CaseService caseService;

    /** all of these test should be corrected when Spring Security will be finally configured*/
    @Test
    public void deleteCaseTest() throws Exception {
        mvc.perform(delete(DELETE_PATH + CORRECT_ID)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isUnauthorized())
                .andReturn();
    }
    @Test
    public void deleteCaseWithIncorrectIdTest() throws Exception {
        mvc.perform(delete(DELETE_PATH + INCORRECT_ID)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }
    @Test
    public void putCaseWithCorrectIdTest() throws Exception {
        mvc.perform(put(PUT_PATH + CORRECT_ID)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isUnauthorized())
                .andReturn();
    }
    @Test
    public void putCaseWithIncorrectIdTest() throws Exception {
        mvc.perform(put(PUT_PATH + INCORRECT_ID)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isUnauthorized())
                .andReturn();
    }
}
