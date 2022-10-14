package com.prizyv.dutyornot.controller;

import com.prizyv.dutyornot.AbstractTest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Stream;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(CaseController.class)
class PostRequestTest extends AbstractTest {
    @MockBean
    CaseController caseController;
    @Test
    void registrationTestWithCorrectDTO() throws Exception {
        mvc.perform(post(POST_GET_PATH)
                .contentType(APPLICATION_JSON)
                .content(CORRECT_DTO))
                .andExpect(status().isOk())
                .andReturn();
    }
    @ParameterizedTest
    @MethodSource("getListOfIncorrectDTO")
    void registrationTestWithWrongDTO(String json) throws Exception {
        mvc.perform(post(POST_GET_PATH)
                        .contentType(APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isBadRequest())
                .andReturn();
    }
    private static Stream<Arguments> getListOfIncorrectDTO() {
        return Stream.of(Arguments.of(DTO_WITH_EMPTY_TITLE),
                Arguments.of(DTO_WITH_WRONG_PARAGRAPH),
                Arguments.of(EMPTY_DTO));
    }

}