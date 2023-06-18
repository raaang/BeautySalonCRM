package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.dto.shop.EmployeeGetDetailDTO;
import com.salon.beauty.model.dto.dto.shop.EmployeeGetListDTO;
import com.salon.beauty.model.dto.dto.shop.EmployeeListPageDTO;
import com.salon.beauty.model.dto.request.shop.EmployeeDetailResponseDTO;
import com.salon.beauty.model.dto.response.shop.EmployeeListResponseDTO;
import com.salon.beauty.model.mapper.shop.EmployeeRetrieveMapper;
import com.salon.beauty.model.mapper.shop.ShopIdMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * 직원 정보 조회를 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class EmployeeRetrieveServiceImpl implements EmployeeRetrieveService {

    @Autowired
    private SqlSession sqlSession;

    // 직원 리스트 조회
    @Override
    public EmployeeListResponseDTO employeeList(int pageNum, int pageSize) throws Exception {
        if(pageSize==0) throw new IllegalArgumentException("페이지 사이즈를 1 이상으로 입력해주세요");
        EmployeeListResponseDTO employeeListResponseDTO = new EmployeeListResponseDTO();
        EmployeeListPageDTO employeeListPageDTO = new EmployeeListPageDTO();
        String shopId = sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName());
        employeeListPageDTO.setShopId(shopId);
        employeeListPageDTO.setPageSize(pageSize);
        int totalPageNum = sqlSession.getMapper(EmployeeRetrieveMapper.class).getTotalPage(employeeListPageDTO);
        employeeListResponseDTO.setTotalPageNum(totalPageNum);
        employeeListResponseDTO.setPageSize(pageSize);

        EmployeeGetListDTO employeeGetListDTO = new EmployeeGetListDTO();
        employeeGetListDTO.setPageNum(pageNum);
        employeeGetListDTO.setShopId(shopId);
        employeeListResponseDTO.setEmployeeList(sqlSession.getMapper(EmployeeRetrieveMapper.class).getEmployeeList(employeeGetListDTO));
        return employeeListResponseDTO;
    }

    @Override
    public EmployeeDetailResponseDTO employeeDetail(String employeeId) throws Exception {
        EmployeeGetDetailDTO employeeGetDetailDTO = new EmployeeGetDetailDTO();
        employeeGetDetailDTO.setEmployeeId(employeeId);
        String shopId = sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName());
        employeeGetDetailDTO.setShopId(shopId);
        return sqlSession.getMapper(EmployeeRetrieveMapper.class).getEmployeeDetail(employeeGetDetailDTO);
    }
}
