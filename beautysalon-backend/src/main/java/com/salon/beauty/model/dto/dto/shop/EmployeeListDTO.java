package com.salon.beauty.model.dto.dto.shop;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 직원 정보 조회 응답을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class EmployeeListDTO {
    // 직원 id
    private String employeeId;

    // 직원 이름
    private String employeeName;

    // 직원 전화번호
    private String employeePhone;

    // 직원 근무 상태 (w : 재직 / l : 휴직 / r : 퇴직)
    private char employeeWorkStatus;
}
