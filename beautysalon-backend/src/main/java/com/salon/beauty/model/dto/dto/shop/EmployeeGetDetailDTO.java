package com.salon.beauty.model.dto.dto.shop;

import lombok.Data;

/**
 * 직원 세부 정보 조회를 처리하는 DTO
 */
@Data
public class EmployeeGetDetailDTO {
    // 샵 id
    public String shopId;

    // 직원 id
    private String employeeId;
}
