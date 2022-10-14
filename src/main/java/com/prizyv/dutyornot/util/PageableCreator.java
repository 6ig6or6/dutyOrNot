package com.prizyv.dutyornot.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public class PageableCreator {
    private final static int STANDARD_PAGE_NUMBER = 0;
    private final static int STANDARD_PAGE_SIZE = 10;
    public static Pageable createPageable(Integer pageNumber, Integer pageSize) {
        int page = pageNumber == null ? STANDARD_PAGE_NUMBER : --pageNumber;
        int size = pageSize == null ? STANDARD_PAGE_SIZE : pageSize;
        if (page < 0) {
            page = STANDARD_PAGE_NUMBER;
        }
        if (size < 0) {
            size = STANDARD_PAGE_SIZE;
        }
        return PageRequest.of(page, size);
    }
}
