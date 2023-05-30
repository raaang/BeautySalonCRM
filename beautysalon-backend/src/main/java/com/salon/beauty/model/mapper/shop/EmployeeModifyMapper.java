package com.salon.beauty.model.mapper.shop;

import com.salon.beauty.model.dto.request.shop.EmployeeModifyRequestDTO;

import java.sql.SQLException;

/**
 * Employee 테이블에서의 직원 수정과 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
public interface EmployeeModifyMapper {
    public int employeeModify(EmployeeModifyRequestDTO employeeModifyRequestDTO) throws SQLException;
}
