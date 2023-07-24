package com.salon.beauty.model.mapper.customer;

import com.salon.beauty.model.dto.dto.customer.CustomerGetDetailDTO;
import com.salon.beauty.model.dto.dto.customer.CustomerGetListDTO;
import com.salon.beauty.model.dto.dto.customer.CustomerListDTO;
import com.salon.beauty.model.dto.dto.customer.CustomerListPageDTO;
import com.salon.beauty.model.dto.request.customer.CustomerDetailResponseDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 고객 정보 조회와 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface CustomerRetrieveMapper {
    public int getTotalPage(CustomerListPageDTO customerListPageDTO) throws Exception;
    List<CustomerListDTO> getCustomerList(CustomerGetListDTO customerGetListDTO) throws Exception;
    public CustomerDetailResponseDTO getCustomerDetail(CustomerGetDetailDTO customerGetDetailDTO) throws Exception;
}
