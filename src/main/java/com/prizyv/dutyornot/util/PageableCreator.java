package com.prizyv.dutyornot.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public class PageableCreator {
    private final static int STANDARD_PAGE_NUMBER = 1;
    private final static int STANDARD_PAGE_SIZE = 5;
    public static Pageable createPageable(Integer pageNumber, Integer pageSize) {
        int page = pageNumber == null ? STANDARD_PAGE_NUMBER : pageNumber;
        int size = pageSize == null ? STANDARD_PAGE_SIZE : pageSize;
        return PageRequest.of(page, size);
    }
}
