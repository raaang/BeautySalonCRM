package com.salon.beauty.model.mapper.customer;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CustomerIdMapper {
    /* customerId 불러오기 */
    public String customerId(String customerId) throws Exception;
}
