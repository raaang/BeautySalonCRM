package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.response.shop.MainStyleRetrieveResponseDTO;
import com.salon.beauty.model.dto.response.shop.MiddleStyleRetrieveResponseDTO;
import com.salon.beauty.model.dto.response.shop.SubStyleRetrieveResponseDTO;
import com.salon.beauty.model.mapper.shop.ShopIdMapper;
import com.salon.beauty.model.mapper.shop.StyleRetrieveMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 스타일 조회 요청을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class StyleRetrieveServiceImpl implements StyleRetrieveService {

    @Autowired
    private SqlSession sqlSession;

    @Override
    public List<MainStyleRetrieveResponseDTO> getMainStyleList() throws Exception {
        String shopId = sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName());
        return sqlSession.getMapper(StyleRetrieveMapper.class).getMainStyleList(shopId);
    }

    @Override
    public List<MiddleStyleRetrieveResponseDTO> getMiddleStyleList(String mainStyleId) throws Exception {
        String shopId = sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName());
        return sqlSession.getMapper(StyleRetrieveMapper.class).getMiddleStyleList(shopId, mainStyleId);
    }

    @Override
    public List<SubStyleRetrieveResponseDTO> getSubStyleList(String middleStyleId) throws Exception {
        String shopId = sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName());
        return sqlSession.getMapper(StyleRetrieveMapper.class).getSubStyleList(shopId, middleStyleId);
    }
}
