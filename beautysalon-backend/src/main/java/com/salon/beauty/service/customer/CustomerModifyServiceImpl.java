package com.salon.beauty.service.customer;

import com.salon.beauty.model.dto.request.customer.CustomerModifyRequestDTO;
import com.salon.beauty.model.mapper.customer.CustomerModifyMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


/**
 * customer 정보 수정을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class CustomerModifyServiceImpl implements CustomerModifyService {


    @Autowired
    private SqlSession sqlSession;

    @Override
    public boolean customerModify(CustomerModifyRequestDTO customerModifyRequestDTO) throws Exception {
        System.out.println("수정 고객 : " + customerModifyRequestDTO.getCustomerName());
        if(!isValidLengthCustomerPhone1(customerModifyRequestDTO.getCustomerPhone1()) || customerModifyRequestDTO.getCustomerPhone1() != null ) throw new IllegalArgumentException("전화번호는 11자리를 입력해주세요");
        if(!isValidLengthCustomerPhone2(customerModifyRequestDTO.getCustomerPhone2()) || customerModifyRequestDTO.getCustomerPhone2() != null ) throw new IllegalArgumentException("전화번호는 11자리를 입력해주세요");

        int result = sqlSession.getMapper(CustomerModifyMapper.class).customerModify(customerModifyRequestDTO);
        return result==1;
    }

    // 고객 전화번호 길이 검사
    public boolean isValidLengthCustomerPhone1(String customerPhone1){
        if(customerPhone1.length() != 11) return false;
        return true;
    }

    // 고객 비상연락처 길이 검사
    public boolean isValidLengthCustomerPhone2(String customerPhone2){
        if(customerPhone2.length() != 11) return false;
        return true;
    }

}
