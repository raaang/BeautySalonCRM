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

    // 샵 로그인 아이디
    private String shop_login_id;

    // 샵 로그인 비밀번호
    private String accessToken;
}