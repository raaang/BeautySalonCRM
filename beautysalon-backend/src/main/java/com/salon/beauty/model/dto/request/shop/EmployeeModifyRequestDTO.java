package com.salon.beauty.model.dto.request.shop;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 직원 수정 요청을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class EmployeeModifyRequestDTO {
    // 직원 id
    private String employee_id;

    // 샵 id
    private String shop_id;

    // 직원 근무 상태 (w : 재직 / l : 휴직 / r : 퇴직)
    private char employee_work_status;

    // 직원 성별 (여자 : f / 남자 : m)
    private char employee_gender;

    // 직원 이름
    private String employee_name;

    // 직원 전화번호
    private String employee_phone;

    // 직원 주소
    private String employee_address;

    // 메모
    private String memo;
}
