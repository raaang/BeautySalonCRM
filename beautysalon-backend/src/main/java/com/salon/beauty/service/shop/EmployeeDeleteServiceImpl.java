package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.dto.shop.EmployeeDeleteDTO;
import com.salon.beauty.model.mapper.shop.EmployeeDeleteMapper;
import com.salon.beauty.model.mapper.shop.ShopIdMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;


/**
 * 직원 삭제를 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class EmployeeDeleteServiceImpl implements EmployeeDeleteService {

    @Autowired
    private SqlSession sqlSession;
    @Override
    public boolean employeeDelete(String employeeId) throws Exception {
        EmployeeDeleteDTO employeeDeleteDTO = new EmployeeDeleteDTO();
        employeeDeleteDTO.setEmployee_id(employeeId);
        employeeDeleteDTO.setShop_id(sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName()));
        System.out.println(employeeDeleteDTO.getEmployee_id());
        System.out.println(employeeDeleteDTO.getShop_id());
        int result = sqlSession.getMapper(EmployeeDeleteMapper.class).employeeDelete(employeeDeleteDTO);
        return result==1;
    }
}
