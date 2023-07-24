package com.salon.beauty.model.dto.dto.customer;

import lombok.Data;

/**
 * 고객 세부 정보 조회를 처리하는 DTO
 */
@Data
public class CustomerDeleteDTO {
    // 샵 id
    private String shopId;

    // 고객 id
    private String customerId;

}

