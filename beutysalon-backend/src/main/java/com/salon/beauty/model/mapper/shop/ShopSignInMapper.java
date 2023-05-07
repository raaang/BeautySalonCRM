package com.salon.beauty.model.mapper.shop;

import com.salon.beauty.util.security.UserDetailsImpl;
import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;

@Mapper
public interface ShopSignInMapper {
    public UserDetailsImpl getUserById(String shop_login_id) throws SQLException;
}
