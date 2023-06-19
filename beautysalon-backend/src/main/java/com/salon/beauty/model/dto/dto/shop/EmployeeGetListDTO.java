package com.salon.beauty.model.dto.dto.shop;

import lombok.Data;

/**
 * 직원 정보 조회를 처리하는 DTO
 */
@Data
public class EmployeeGetListDTO {
    // 샵 id
    public String shopId;

    // 페이지 번호
    public int pageNum;

    // 한 페이지에 포함된 직원 수
    public int pageSize;
}
