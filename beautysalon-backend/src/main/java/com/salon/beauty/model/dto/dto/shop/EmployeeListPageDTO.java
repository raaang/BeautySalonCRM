package com.salon.beauty.model.dto.dto.shop;

import lombok.*;

/**
 * 직원 정보 조회 응답을 처리하는 DTO
 */
@Data
public class EmployeeListPageDTO {
    // 한 페이지에 포함된 직원 수
    public int pageSize;

    // 샵 id
    public String shopId;
}
