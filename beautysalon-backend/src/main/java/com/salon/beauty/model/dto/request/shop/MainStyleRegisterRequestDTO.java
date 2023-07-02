package com.salon.beauty.model.dto.request.shop;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 메인 스타일 등록 요청을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class MainStyleRegisterRequestDTO {
    // 샵 id
    private String shopId;

    // 스타일 이름
    private String styleName;

    // 스타일 순서
    private int styleOrder;
}
