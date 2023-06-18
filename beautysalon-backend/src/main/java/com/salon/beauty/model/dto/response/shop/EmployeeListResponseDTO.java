package com.salon.beauty.model.dto.response.shop;

import com.salon.beauty.model.dto.dto.shop.EmployeeListDTO;
import lombok.*;

import java.util.List;

/**
 * 직원 정보 조회 응답을 처리하는 DTO
 */
@Data
public class EmployeeListResponseDTO {
    // 조회된 직원 리스트
    List<EmployeeListDTO> employeeList;

    // 전체 페이지 크기
    public int totalPageNum;

    // 한 페이지에 포함된 직원 수
    public int pageSize;
}
