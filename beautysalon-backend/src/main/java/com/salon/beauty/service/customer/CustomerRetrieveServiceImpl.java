package com.salon.beauty.service.customer;

import com.salon.beauty.model.dto.dto.customer.CustomerGetDetailDTO;
import com.salon.beauty.model.dto.dto.customer.CustomerGetListDTO;
import com.salon.beauty.model.dto.dto.customer.CustomerListPageDTO;
import com.salon.beauty.model.dto.request.customer.CustomerDetailResponseDTO;
import com.salon.beauty.model.dto.response.customer.CustomerListResponseDTO;
import com.salon.beauty.model.mapper.customer.CustomerRetrieveMapper;
import com.salon.beauty.model.mapper.shop.ShopIdMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * 고객 정보 조회를 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class CustomerRetrieveServiceImpl implements CustomerRetrieveService {

    @Autowired
    private SqlSession sqlSession;

    // 고객 리스트 조회
    @Override
    public CustomerListResponseDTO customerList(int pageNum, int pageSize) throws Exception {
        if(pageSize==0) throw new IllegalArgumentException("페이지 사이즈를 1 이상으로 입력해주세요");
        CustomerListResponseDTO customerListResponseDTO = new CustomerListResponseDTO();
        CustomerListPageDTO customerListPageDTO = new CustomerListPageDTO();
        String shopId = sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName());
        customerListPageDTO.setShopId(shopId);
        customerListPageDTO.setPageSize(pageSize);
        int totalPageNum = sqlSession.getMapper(CustomerRetrieveMapper.class).getTotalPage(customerListPageDTO);
        customerListResponseDTO.setTotalPageNum(totalPageNum);
        customerListResponseDTO.setPageSize(pageSize);

        CustomerGetListDTO customerGetListDTO = new CustomerGetListDTO();
        customerGetListDTO.setPageNum(pageSize*pageNum);
        customerGetListDTO.setShopId(shopId);
        customerGetListDTO.setPageSize(pageSize);
        customerListResponseDTO.setCustomerList(sqlSession.getMapper(CustomerRetrieveMapper.class).getCustomerList(customerGetListDTO));
        return customerListResponseDTO;
    }

    @Override
    public CustomerDetailResponseDTO customerDetail(String customerId) throws Exception {
        CustomerGetDetailDTO customerGetDetailDTO = new CustomerGetDetailDTO();
        customerGetDetailDTO.setCustomerId(customerId);
        String shopId = sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName());
        customerGetDetailDTO.setShopId(shopId);
        return sqlSession.getMapper(CustomerRetrieveMapper.class).getCustomerDetail(customerGetDetailDTO);
    }
}
