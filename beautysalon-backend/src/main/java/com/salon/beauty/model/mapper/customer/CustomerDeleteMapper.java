package com.salon.beauty.model.mapper.customer;

import com.salon.beauty.model.dto.dto.customer.CustomerDeleteDTO;

import java.sql.SQLException;

/**
 * CUSTOMER 테이블에서의 직원 삭제와 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
public interface CustomerDeleteMapper {
    public int customerDelete(CustomerDeleteDTO customerDeleteDTO) throws SQLException;
}
