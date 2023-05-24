package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.ShopSignUpRequestDTO;

public interface ShopSignUpService {
    // 샵 회원가입
    public boolean signUp(ShopSignUpRequestDTO shopSignUpRequestDTO) throws Exception;

    // 샵 로그인 아이디 중복 조회
    public boolean shopCheckId(String shop_login_id) throws Exception;
}
