package com.salon.beauty.model.mapper.shop;

import com.salon.beauty.model.dto.request.shop.ShopModifyRequestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;

/**
 * Shop 테이블에서의 정보 수정과 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface ShopModifyMapper {
    // 샵 정보 수정
    public int shopModify(ShopModifyRequestDTO shopModifyRequestDTO) throws SQLException;
}
