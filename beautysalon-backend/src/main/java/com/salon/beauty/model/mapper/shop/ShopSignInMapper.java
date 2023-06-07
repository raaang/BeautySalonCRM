package com.salon.beauty.model.mapper.shop;

import com.salon.beauty.util.security.UserDetailsImpl;
import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;

/**
 * Shop 테이블에서의 로그인과 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface ShopSignInMapper {
    public UserDetailsImpl getUserById(String shopLoginId) throws SQLException;
}
