package com.salon.beauty.model.mapper.shop;


import com.salon.beauty.model.dto.request.shop.ShopSignUpRequestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;

/**
 * Shop 테이블에서의 회원가입과 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface ShopSignUpMapper {
    // 회원가입
    public int signup(ShopSignUpRequestDTO shopSignUpRequestDTO) throws SQLException;

    // 샵 이름 존재 여부 체크 mapper
    public int shopExistCheck(String shop_login_id);
}
