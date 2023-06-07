package com.salon.beauty.model.mapper.shop;

import com.salon.beauty.model.dto.dto.shop.EmployeeDeleteDTO;

import java.sql.SQLException;

/**
 * Employee 테이블에서의 직원 삭제와 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
public interface EmployeeDeleteMapper {
    public int employeeDelete(EmployeeDeleteDTO employeeDeleteDTO) throws SQLException;
}
