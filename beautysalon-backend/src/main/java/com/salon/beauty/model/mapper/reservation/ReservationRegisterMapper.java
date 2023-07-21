package com.salon.beauty.model.mapper.reservation;

import com.salon.beauty.model.dto.request.reservation.ReservationRegisterRequestDTO;

import java.sql.SQLException;

/**
 * Reservation 테이블에서의 예약 등록과 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
public interface ReservationRegisterMapper {
    public int reservationRegister(ReservationRegisterRequestDTO reservationRegisterRequestDTO) throws SQLException;
}
