package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.EmployeeRegisterRequestDTO;
import com.salon.beauty.model.mapper.shop.EmployeeRegisterMapper;
import com.salon.beauty.model.mapper.shop.ShopIdMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * 직원 등록 요청을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class EmployeeRegisterServiceImpl implements EmployeeRegisterService {

    @Autowired
    private SqlSession sqlSession;

    @Override
    public boolean employeeRegister(EmployeeRegisterRequestDTO employeeRegisterRequestDTO) throws Exception {
        employeeRegisterRequestDTO.setShop_id(sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName()));
        if(!isValidLengthEmployeeName(employeeRegisterRequestDTO.getEmployee_name())) throw new IllegalArgumentException("직원 이름을 20글자 이내로 입력해주세요.");
        if(!isValidLengthEmployeePhone(employeeRegisterRequestDTO.getEmployee_phone())) throw new IllegalArgumentException("직원 전화번호를 20글자 이내로 입력해주세요.");
        if(!isValidLengthEmployeeAddress(employeeRegisterRequestDTO.getEmployee_address())) throw new IllegalArgumentException("직원 주소를 50글자 이내로 입력해주세요.");
        int result = sqlSession.getMapper(EmployeeRegisterMapper.class).employeeRegister(employeeRegisterRequestDTO);
        return result==1;
    }

    // 직원 이름 길이 검사
    public boolean isValidLengthEmployeeName(String employee_name){
        if(employee_name.length()>20) return false;
        return true;
    }

    // 직원 전화번호 길이 검사
    public boolean isValidLengthEmployeePhone(String employee_phone){
        if(employee_phone.length()>20) return false;
        return true;
    }

    // 직원 주소 길이 검사
    public boolean isValidLengthEmployeeAddress(String employee_address){
        if(employee_address.length()>50) return false;
        return true;
    }
}
