package com.salon.beauty.service.customer;

import com.salon.beauty.model.dto.request.customer.CustomerSaveRequestDTO;
import com.salon.beauty.model.mapper.customer.CustomerIdMapper;
import com.salon.beauty.model.mapper.customer.CustomerSaveMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * 고객 등록 요청을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class CustomerSaveServiceImpl implements CustomerSaveService {

    @Autowired
    private SqlSession sqlSession;

    @Override
    public boolean customerSaveData(CustomerSaveRequestDTO customerSaveRequestDTO) throws Exception {
        customerSaveRequestDTO.setCustomerId(sqlSession.getMapper(CustomerIdMapper.class).customerId(SecurityContextHolder.getContext().getAuthentication().getName()));
        if(!isValidLengthCustomerPhone1(customerSaveRequestDTO.getCustomerPhone1())) throw new IllegalArgumentException("고객 휴대폰 전화번호를 정확하게 입력해주세요.");
        int result = sqlSession.getMapper(CustomerSaveMapper.class).customerSaveData(customerSaveRequestDTO);
        return result==1;
    }

    // 고객 전화번호 길이 검사
    public boolean isValidLengthCustomerPhone1(String customerPhone1){
        if(customerPhone1.length() != 11) return false;
        return true;
    }

    // 고객 비상연락처 길이 검사
    public boolean isValidLengthCustomerPhone2(String customerPhone2){
        if(customerPhone2.length()>11) return false;
        return true;
    }

    // familyId, workerId, shopID 유효성 체크
    // 필수값 여부 체크
}
