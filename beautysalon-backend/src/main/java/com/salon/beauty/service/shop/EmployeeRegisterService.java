package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.EmployeeRegisterRequestDTO;

public interface EmployeeRegisterService {
    public boolean employeeRegister(EmployeeRegisterRequestDTO employeeRegisterRequestDTO) throws Exception;
}
