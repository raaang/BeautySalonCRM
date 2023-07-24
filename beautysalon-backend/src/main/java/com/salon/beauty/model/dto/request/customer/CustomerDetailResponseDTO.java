package com.salon.beauty.model.dto.request.customer;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 고객 세부 정보 조회 요청을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class CustomerDetailResponseDTO {
    private String customerId;          // 고객 ID
    private String customerName;        // 고객 이름
    private String customerPhone1;      // 고객 전화번호
    private String customerPhone2;      // 고객 비상연락처
    private String customerSmsYn;       // 고객 문자수신여부
    private String customerMemo;        // 고객 메모(특이사항)
    private Integer customerPoint;      // 고객 보유 포인트
    private String customerAddress;     // 고객 주소
    private String customerIsDeleted;   // 고객 삭제 여부
    private String familyId;            // 패밀리 ID
    private String workerId;            // 담당 직원 ID
    private String shopId;              // 소속 샵 ID
}
