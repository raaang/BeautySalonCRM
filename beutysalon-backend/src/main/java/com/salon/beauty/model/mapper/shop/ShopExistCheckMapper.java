package com.salon.beauty.model.mapper.shop;

import org.apache.ibatis.annotations.Mapper;

// 샵 이름 존재 여부 체크 mapper
@Mapper
public interface ShopExistCheckMapper {
    public int shopExistCheck(String shop_login_id);
}
