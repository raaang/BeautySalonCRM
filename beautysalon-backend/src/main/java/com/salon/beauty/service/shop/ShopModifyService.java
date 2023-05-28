package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.ShopModifyRequestDTO;

public interface ShopModifyService {
    // 샵 정보 수정
    public boolean shopModify(ShopModifyRequestDTO shopModifyRequestDTO) throws Exception;
}
