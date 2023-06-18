package com.salon.beauty.model.mapper.shop;

import com.salon.beauty.model.dto.dto.shop.EmployeeGetListDTO;
import com.salon.beauty.model.dto.dto.shop.EmployeeListDTO;
import com.salon.beauty.model.dto.dto.shop.EmployeeListPageDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 직원 정보 조회와 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface EmployeeRetrieveMapper {
    public int getTotalPage(EmployeeListPageDTO employeeListPageDTO) throws Exception;
    List<EmployeeListDTO> getEmployeeList(EmployeeGetListDTO employeeGetListDTO) throws Exception;
}
