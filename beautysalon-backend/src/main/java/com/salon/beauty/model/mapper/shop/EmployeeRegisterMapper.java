package com.salon.beauty.model.mapper.shop;

import com.salon.beauty.model.dto.request.shop.EmployeeRegisterRequestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;

/**
 * Employee 테이블에서의 직원 등록과 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface EmployeeRegisterMapper {
    public int employeeRegister(EmployeeRegisterRequestDTO employeeRegisterRequestDTO) throws SQLException;
}
