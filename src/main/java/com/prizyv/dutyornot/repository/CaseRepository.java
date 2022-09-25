package com.prizyv.dutyornot.repository;

import com.prizyv.dutyornot.entity.Case;
import com.prizyv.dutyornot.entity.Category;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface CaseRepository extends JpaRepository<Case, Long> {
    List<Case> findAll();
    @Query("SELECT c FROM Case c WHERE" +
            "(:title is null or upper(c.title) like concat('%', upper(:title), '%'))" +
            "and (:comment is null or upper(c.comment) like concat('%', upper(:comment), '%'))" +
            "and (:paragraph is null or c.paragraph = :paragraph)" +
            "and (:category is null or c.category = :category)" +
            "and (:caseAfter is null or c.caseDate > :caseAfter)" +
            "and (:caseBefore is null or c.caseDate < :caseBefore)")
    List<Case> findBy(@Param("title") String title,
                      @Param("comment") String comment,
                      @Param("paragraph") String paragraph,
                      @Param("category") Category category,
                      @Param("caseAfter") Date caseAfter,
                      @Param("caseBefore") Date caseBefore,
                      Pageable pageable);
}
