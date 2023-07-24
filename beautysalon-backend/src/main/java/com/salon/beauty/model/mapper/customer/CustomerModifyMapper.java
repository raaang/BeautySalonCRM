package com.salon.beauty.model.mapper.customer;

import com.salon.beauty.model.dto.request.customer.CustomerModifyRequestDTO;
import com.salon.beauty.model.dto.request.shop.ShopModifyRequestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;

/**
 * Customer 테이블에서의 정보 수정과 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface CustomerModifyMapper {
    // 고객 정보 수정
    public int customerModify(CustomerModifyRequestDTO customerModifyRequestDTO) throws SQLException;
}
