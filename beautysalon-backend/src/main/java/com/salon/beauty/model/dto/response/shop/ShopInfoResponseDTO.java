package com.salon.beauty.model.dto.response.shop;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * shop 정보 조회 응답을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class ShopInfoResponseDTO {
    // 샵 로그인 아이디
    private String shop_login_id;

    // 샵 이름
    private String shop_name;

    // 샵 전화번호
    private String shop_phone;

    // 샵 대표 이름
    private String shop_ceo;

    // 샵 대표 전화번호
    private String shop_ceo_phone;

    // 포인트 적립율
    private float point_accumulation_rate;

    // 포인트 적립 조건
    private String point_accumulation_condition;
}
