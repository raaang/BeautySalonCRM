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
    private String shopLoginId;

    // 샵 이름
    private String shopName;

    // 샵 전화번호
    private String shopPhone;

    // 샵 대표 이름
    private String shopCeo;

    // 샵 대표 전화번호
    private String shopCeoPhone;

    // 포인트 적립율
    private float pointAccumulationRate;

    // 포인트 적립 조건
    private String pointAccumulationCondition;
}
