package com.salon.beauty.service.reservation;

import com.salon.beauty.model.dto.request.reservation.ReservationModifyRequestDTO;
import com.salon.beauty.model.mapper.reservation.ReservationModifyMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 예약 수정을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class ReservationModifyServiceImpl implements ReservationModifyService {

    @Autowired
    private SqlSession sqlSession;

    @Override
    public boolean reservationModify(ReservationModifyRequestDTO reservationModifyRequestDTO) throws Exception {
        int result = sqlSession.getMapper(ReservationModifyMapper.class).reservationModify(reservationModifyRequestDTO);
        return result==1;
    }
}
