package com.salon.beauty.service.shop;

public interface ShopCheckIdService {
    // 샵 로그인 아이디 중복 조회
    public boolean shopCheckId(String shop_login_id) throws Exception;
}
