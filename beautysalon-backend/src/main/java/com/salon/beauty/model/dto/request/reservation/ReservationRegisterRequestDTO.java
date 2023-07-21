package com.salon.beauty.model.dto.request.reservation;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 예약 등록 요청을 처리하는 DTO
 */
@Builder
@Getter
@Setter
@ToString
public class ReservationRegisterRequestDTO {
    // 샵 id
    private String shopId;

    // 고객 id
    private String customerId;

    // 직원 id
    private String employeeId;

    // 예약 날짜 reservation_date
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateTime;

    // 예약 시간 시작 reservation_start
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime reservationStart;

    // 예약 시간 끝 reservation_end
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime reservationEnd;

    // 메인 스타일 id
    private String mainStyleId;

    // 중간 스타일 id
    private String middleStyleId;

    // 하위 스타일 id
    private String subStyleId;

    // 금액
    private int price;

    // 요청사항
    private String request;
}
