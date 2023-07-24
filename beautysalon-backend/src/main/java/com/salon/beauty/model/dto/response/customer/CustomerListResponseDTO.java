package com.salon.beauty.model.dto.response.customer;

import com.salon.beauty.model.dto.dto.customer.CustomerListDTO;
import lombok.Data;

import java.util.List;

/**
 * 직원 정보 조회 응답을 처리하는 DTO
 */
@Data
public class CustomerListResponseDTO {
    // 조회된 직원 리스트
    List<CustomerListDTO> customerList;

    // 전체 페이지 크기
    public int totalPageNum;

    // 한 페이지에 포함된 고객 수
    public int pageSize;
}
