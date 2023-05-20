package com.salon.beauty.service.shop;

import com.salon.beauty.model.mapper.shop.ShopExistCheckMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ShopCheckIdServiceImpl implements ShopCheckIdService {

    @Autowired
    private SqlSession sqlSession;

    // 로그인 아이디 중복 검사
    @Override
    public boolean shopCheckId(String shop_login_id) throws Exception {
        if(sqlSession.getMapper(ShopExistCheckMapper.class).shopExistCheck(shop_login_id)>=1) return true;
        return false;
    }
}
