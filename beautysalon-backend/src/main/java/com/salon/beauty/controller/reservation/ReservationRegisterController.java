package com.salon.beauty.controller.reservation;

import com.salon.beauty.model.dto.request.reservation.ReservationRegisterRequestDTO;
import com.salon.beauty.service.reservation.ReservationRegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 예약 등록 요청을 처리하는 Controller
 */
@RequestMapping("/api/reservation/register")
@RequiredArgsConstructor
@Controller
public class ReservationRegisterController {

    private final ReservationRegisterService reservationRegisterService;

    @PostMapping("")
    public ResponseEntity<?> reservationRegister(@RequestBody ReservationRegisterRequestDTO reservationRegisterRequestDTO) throws Exception {
        if(reservationRegisterService.reservationRegister(reservationRegisterRequestDTO)) return ResponseEntity.status(201).body("예약 등록에 성공하였습니다.");
        return ResponseEntity.status(400).body("예약 등록에 실패했습니다.");
    }
}
