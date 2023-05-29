package com.salon.beauty.model.mapper.customer;


import com.salon.beauty.model.dto.request.customer.CustomerSaveRequestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;

@Mapper
public interface CustomerSaveMapper {
    public int customerSaveData(CustomerSaveRequestDTO customerSaveRequestDTO) throws SQLException;
}
