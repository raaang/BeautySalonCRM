package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.EmployeeDetailResponseDTO;
import com.salon.beauty.model.dto.response.shop.EmployeeListResponseDTO;

public interface EmployeeRetrieveService {
    // 직원 리스트 조회
    public EmployeeListResponseDTO employeeList(int pageNum, int pageSize) throws Exception;

    // 직원 세부 정보 조회
    public EmployeeDetailResponseDTO employeeDetail(String employeeId) throws Exception;
}
