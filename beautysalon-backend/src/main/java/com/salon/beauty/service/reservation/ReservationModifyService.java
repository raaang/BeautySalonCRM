package com.salon.beauty.service.reservation;

import com.salon.beauty.model.dto.request.reservation.ReservationModifyRequestDTO;

public interface ReservationModifyService {
    public boolean reservationModify(ReservationModifyRequestDTO reservationModifyRequestDTO) throws Exception;
}
