package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.EmployeeModifyRequestDTO;

public interface EmployeeModifyService {
    // 직원 정보 수정
    public boolean employeeModify(EmployeeModifyRequestDTO employeeModifyRequestDTO) throws Exception;
}
