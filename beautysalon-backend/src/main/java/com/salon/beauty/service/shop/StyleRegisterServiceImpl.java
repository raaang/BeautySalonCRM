package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.MainStyleRegisterRequestDTO;
import com.salon.beauty.model.dto.request.shop.MiddleStyleRegisterRequestDTO;
import com.salon.beauty.model.dto.request.shop.SubStyleRegisterRequestDTO;
import com.salon.beauty.model.mapper.shop.ShopIdMapper;
import com.salon.beauty.model.mapper.shop.StyleRegisterMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * 스타일 등록 요청을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class StyleRegisterServiceImpl implements StyleRegisterService {

    @Autowired
    private SqlSession sqlSession;

    @Override
    public boolean mainStyleRegister(MainStyleRegisterRequestDTO mainStyleRegisterRequestDTO) throws Exception {
        mainStyleRegisterRequestDTO.setShopId(sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName()));
        int result = sqlSession.getMapper(StyleRegisterMapper.class).mainStyleRegister(mainStyleRegisterRequestDTO);
        return result==1;
    }

    @Override
    public boolean middleStyleRegister(MiddleStyleRegisterRequestDTO middleStyleRegisterRequestDTO) throws Exception {
        middleStyleRegisterRequestDTO.setShopId(sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName()));
        int result = sqlSession.getMapper(StyleRegisterMapper.class).middleStyleRegister(middleStyleRegisterRequestDTO);
        return result==1;
    }

    @Override
    public boolean subStyleRegister(SubStyleRegisterRequestDTO subStyleRegisterRequestDTO) throws Exception {
        subStyleRegisterRequestDTO.setShopId(sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName()));
        int result = sqlSession.getMapper(StyleRegisterMapper.class).subStyleRegister(subStyleRegisterRequestDTO);
        return result==1;
    }

}
