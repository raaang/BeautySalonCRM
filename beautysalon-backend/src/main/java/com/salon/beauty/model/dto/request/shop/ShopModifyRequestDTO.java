package com.salon.beauty.model.dto.request.shop;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * shop 정보 수정 요청을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class ShopModifyRequestDTO {
    private String shopId;

    // 샵 로그인 아이디. 필수 필드이며 유일값.
    // 최소 길이 : 6자. 최대 길이 : 20자. 글자(a-z), 숫자(0-9), 마침표(.)만 입력 가능
    private String shopLoginId;

    // 샵 로그인 비밀번호
    // 최소 길이 : 8자. 최대 길이 : 20자.
    private String shopPassword;

    // 샵 이름
    // 최대 길이 : 50자
    private String shopName;

    // 샵 전화번호
    // 최대 길이 : 20자
    private String shopPhone;

    // 샵 대표 이름
    // 최대 길이 : 20자
    private String shopCeo;

    // 샵 대표 전화번호
    // 최대 길이 : 20자
    private String shopCeoPhone;

    // 포인트 적립율
    private float pointAccumulationRate;

    // 포인트 적립 조건
    private String pointAccumulationCondition;
}
