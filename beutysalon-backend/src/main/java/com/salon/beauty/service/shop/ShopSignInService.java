package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.ShopSignInRequestDTO;
import com.salon.beauty.model.dto.response.shop.ShopSignInResponseDTO;

public interface ShopSignInService {
    public ShopSignInResponseDTO signIn(ShopSignInRequestDTO shopSignInRequestDTO) throws Exception;
}
