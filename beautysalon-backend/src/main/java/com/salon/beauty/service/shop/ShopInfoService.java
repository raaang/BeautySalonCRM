package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.response.shop.ShopInfoResponseDTO;

public interface ShopInfoService {

    // 샵 정보 조회
    public ShopInfoResponseDTO getShopInfo() throws Exception;
}
