package com.salon.beauty.model.dto.dto.shop;

import lombok.*;

/**
 * 직원 삭제 요청을 처리하는 DTO
 */
@Data
public class EmployeeDeleteDTO {
    // 직원 id
    private String employee_id;

    // 샵 id
    private String shop_id;
}
