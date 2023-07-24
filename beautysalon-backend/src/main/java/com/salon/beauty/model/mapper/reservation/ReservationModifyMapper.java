package com.salon.beauty.model.mapper.reservation;

import com.salon.beauty.model.dto.request.reservation.ReservationModifyRequestDTO;

import java.sql.SQLException;

/**
 * Reservation 테이블에서의 예약 수정과 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
public interface ReservationModifyMapper {
    public int reservationModify(ReservationModifyRequestDTO reservationModifyRequestDTO) throws SQLException;
}
