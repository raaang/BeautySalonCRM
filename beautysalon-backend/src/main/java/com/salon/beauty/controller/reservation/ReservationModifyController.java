package com.salon.beauty.controller.reservation;

import com.salon.beauty.model.dto.request.reservation.ReservationModifyRequestDTO;
import com.salon.beauty.service.reservation.ReservationModifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 예약 수정 요청을 처리하는 Controller
 */
@RequestMapping("/api/reservation/modify")
@RequiredArgsConstructor
@Controller
public class ReservationModifyController {

    private final ReservationModifyService reservationModifyService;

    @PostMapping("")
    public ResponseEntity<?> reservationModify(@RequestBody ReservationModifyRequestDTO reservationModifyRequestDTO) throws Exception {
        if(reservationModifyService.reservationModify(reservationModifyRequestDTO)) return ResponseEntity.status(201).body("예약 수정에 성공하였습니다.");
        return ResponseEntity.status(400).body("예약 수정에 실패했습니다.");
    }
}
