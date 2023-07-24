package com.salon.beauty.service.customer;


import com.salon.beauty.model.dto.dto.customer.CustomerDeleteDTO;
import com.salon.beauty.model.mapper.customer.CustomerDeleteMapper;
import com.salon.beauty.model.mapper.shop.ShopIdMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;


/**
 * 고객 삭제를 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class CustomerDeleteServiceImpl implements CustomerDeleteService {

    @Autowired
    private SqlSession sqlSession;
    @Override
    public boolean customerDelete(String customerId) throws Exception {
        CustomerDeleteDTO customerDeleteDTO = new CustomerDeleteDTO();
        customerDeleteDTO.setCustomerId(customerId);
        customerDeleteDTO.setShopId(sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName()));
        int result = sqlSession.getMapper(CustomerDeleteMapper.class).customerDelete(customerDeleteDTO);
        return result==1;
    }
}
