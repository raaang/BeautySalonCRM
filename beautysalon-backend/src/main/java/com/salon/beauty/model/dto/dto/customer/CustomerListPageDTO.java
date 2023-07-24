package com.salon.beauty.model.dto.dto.customer;

import lombok.Data;

/**
 * 고객 정보 조회를 처리하는 DTO
 */
@Data
public class CustomerListPageDTO {
    public int pageSize;        // 한 페이지에 포함된 고객 수
    public String shopId;
}
