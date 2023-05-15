package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.response.shop.ShopInfoResponseDTO;
import com.salon.beauty.model.mapper.shop.ShopInfoMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * shop 정보 조회 요청을 처리하는 Service
 */

@Service
@RequiredArgsConstructor
public class ShopInfoServiceImpl implements ShopInfoService {

    @Autowired
    private SqlSession sqlSession;

    // 샵 정보 조회
    @Override
    public ShopInfoResponseDTO getShopInfo() throws Exception {

        return sqlSession.getMapper(ShopInfoMapper.class).getShopInfo(SecurityContextHolder.getContext().getAuthentication().getName());
    }
}
