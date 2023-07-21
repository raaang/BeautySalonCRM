package com.salon.beauty.service.reservation;

import com.salon.beauty.model.dto.request.reservation.ReservationRegisterRequestDTO;
import com.salon.beauty.model.mapper.reservation.ReservationRegisterMapper;
import com.salon.beauty.model.mapper.shop.ShopIdMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * 예약 등록을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class ReservationRegisterServiceImpl implements ReservationRegisterService {

    @Autowired
    private SqlSession sqlSession;

    @Override
    public boolean reservationRegister(ReservationRegisterRequestDTO reservationRegisterRequestDTO) throws Exception {
        reservationRegisterRequestDTO.setShopId(sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName()));
        System.out.println(reservationRegisterRequestDTO.getReservationEnd());
        int result = sqlSession.getMapper(ReservationRegisterMapper.class).reservationRegister(reservationRegisterRequestDTO);
        return result==1;
    }
}
