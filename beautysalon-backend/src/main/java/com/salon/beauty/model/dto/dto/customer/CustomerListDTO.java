package com.salon.beauty.model.dto.dto.customer;

import lombok.*;

/**
 * 고객 정보 조회를 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class CustomerListDTO {
    // 고객 id
    private String customerId;
    // 고객 이름
    private String customerName;
    // 고객 전화번호
    private String CustomerPhone1;
    // 고객 전화번호2
    private String CustomerPhone2;
    private String customerSmsYn;       // 고객 문자수신여부
    private String customerMemo;        // 고객 메모(특이사항)
    private Integer customerPoint;      // 고객 보유 포인트
    private String customerAddress;     // 고객 주소
    private String customerIsDeleted;   // 고객 삭제 여부
    private String familyId;            // 패밀리 ID
    private String workerId;            // 담당 직원 ID
    private String shopId;              // 소속 샵 ID

    /**
     * 고객 정보 조회를 처리하는 DTO
     */
    @Data
    public static class CustomerListPageDTO {

        public int pageSize;        // 한 페이지에 포함된 직원 수
        public String shopId;
    }
}
