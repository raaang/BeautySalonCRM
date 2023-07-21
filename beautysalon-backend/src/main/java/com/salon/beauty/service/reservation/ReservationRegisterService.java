package com.salon.beauty.service.reservation;

import com.salon.beauty.model.dto.request.reservation.ReservationRegisterRequestDTO;

public interface ReservationRegisterService {
    public boolean reservationRegister(ReservationRegisterRequestDTO reservationRegisterRequestDTO) throws Exception;
}
