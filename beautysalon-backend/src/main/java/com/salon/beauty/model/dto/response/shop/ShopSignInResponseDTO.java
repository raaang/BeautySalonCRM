package com.salon.beauty.model.dto.response.shop;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * shop 로그인 응답을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class ShopSignInResponseDTO {
    private String shop_login_id;
    private String accessToken;
}