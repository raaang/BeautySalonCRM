package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.response.shop.EmployeeListResponseDTO;

public interface EmployeeRetrieveService {
    // 직원 리스트 조회
    public EmployeeListResponseDTO employeeList(int pageNum, int pageSize) throws Exception;
}
