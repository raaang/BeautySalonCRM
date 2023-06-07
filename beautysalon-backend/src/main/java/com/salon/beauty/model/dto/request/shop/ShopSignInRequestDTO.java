package com.salon.beauty.model.dto.request.shop;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * shop 로그인 요청을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class ShopSignInRequestDTO {
    // 샵 로그인 아이디
    private String shopLoginId;

    // 샵 로그인 비밀번호
    private String shopPassword;
}
