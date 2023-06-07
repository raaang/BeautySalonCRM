package com.salon.beauty.model.dto.request.shop;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 직원 등록 요청을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class EmployeeRegisterRequestDTO {
    // 직원 id
    private String employeeId;

    // 샵 id
    private String shopId;

    // 직원 근무 상태 (w : 재직 / l : 휴직 / r : 퇴직)
    private char employeeWorkStatus;

    // 직원 성별 (여자 : f / 남자 : m)
    private char employeeGender;

    // 직원 이름
    private String employeeName;

    // 직원 전화번호
    private String employeePhone;

    // 직원 주소
    private String employeeAddress;

    // 메모
    private String memo;
}
