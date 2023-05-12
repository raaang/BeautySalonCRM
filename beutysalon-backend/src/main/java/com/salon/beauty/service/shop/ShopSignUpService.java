package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.ShopSignUpRequestDTO;

public interface ShopSignUpService {
    public boolean signup(ShopSignUpRequestDTO shopSignUpRequestDTO) throws Exception;
}
