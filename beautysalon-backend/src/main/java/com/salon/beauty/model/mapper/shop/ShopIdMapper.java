package com.salon.beauty.model.mapper.shop;

import org.apache.ibatis.annotations.Mapper;

/**
 * shop id 불러오기와 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface ShopIdMapper {
    public String shopId(String shopLoginId) throws Exception;
}
