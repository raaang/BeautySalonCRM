package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.ShopModifyRequestDTO;
import com.salon.beauty.model.mapper.shop.ShopIdMapper;
import com.salon.beauty.model.mapper.shop.ShopModifyMapper;
import com.salon.beauty.model.mapper.shop.ShopSignUpMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

/**
 * shop 정보 수정을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class ShopModifyServiceImpl implements ShopModifyService {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    private SqlSession sqlSession;

    @Override
    public boolean shopModify(ShopModifyRequestDTO shopModifyRequestDTO) throws Exception {
        if(!isValidShopLoginId(shopModifyRequestDTO.getShopLoginId())) throw new IllegalArgumentException("글자(a-z), 숫자(0-9)만 입력 가능합니다.");
        if(!isValidLengthShopLoginId(shopModifyRequestDTO.getShopLoginId())) throw new IllegalArgumentException("로그인 아이디를 6글자 이상 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopLoginPassword(shopModifyRequestDTO.getShopPassword())) throw new IllegalArgumentException("로그인 비밀번호를  8글자 이상 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopName(shopModifyRequestDTO.getShopPassword())) throw new IllegalArgumentException("샵 이름을 50글자 이내로 입력해주세요.");
        if(!isValidLengthShopPhone(shopModifyRequestDTO.getShopPhone())) throw new IllegalArgumentException("샵 전화번호를 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopCeo(shopModifyRequestDTO.getShopCeo())) throw new IllegalArgumentException("샵 대표 이름을 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopCeoPhone(shopModifyRequestDTO.getShopCeoPhone())) throw new IllegalArgumentException("샵 대표 이름을 20글자 이내로 입력해주세요.");
        shopModifyRequestDTO.setShopPassword(passwordEncoder.encode(shopModifyRequestDTO.getShopPassword()));
        if(shopCheckId(shopModifyRequestDTO.getShopLoginId())) throw new IllegalArgumentException("로그인 아이디가 이미 존재합니다.");
        shopModifyRequestDTO.setShopId(sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName()));
        int result = sqlSession.getMapper(ShopModifyMapper.class).shopModify(shopModifyRequestDTO);
        return result==1;
    }

    // 로그인 아이디 중복 검사
    public boolean shopCheckId(String shopLoginId) throws Exception {
        if(sqlSession.getMapper(ShopSignUpMapper.class).shopExistCheck(shopLoginId)>=1) throw new IllegalArgumentException("로그인 아이디가 이미 존재합니다.");
        return false;
    }

    // 로그인 아이디 패턴 검사
    public boolean isValidShopLoginId(String shopLoginId){
        return Pattern.matches("^[0-9a-z]*$", shopLoginId);
    }

    // 로그인 아이디 길이 검사
    public boolean isValidLengthShopLoginId(String shopLoginId){
        if(shopLoginId.length()<6 || shopLoginId.length()>20) return false;
        return true;
    }

    // 로그인 비밀번호 길이 검사
    public boolean isValidLengthShopLoginPassword(String shopPassword){
        if(shopPassword.length()<8 || shopPassword.length()>20) return false;
        return true;
    }

    // 샵 이름 길이 검사
    public boolean isValidLengthShopName(String shopName){
        if(shopName.length()>50) return false;
        return true;
    }

    // 샵 전화번호 길이 검사
    public boolean isValidLengthShopPhone(String shopPhone){
        if(shopPhone.length()>20) return false;
        return true;
    }

    // 샵 대표 이름 길이 검사
    public boolean isValidLengthShopCeo(String shopCeo){
        if(shopCeo.length()>20) return false;
        return true;
    }

    // 샵 대표 전화번호 길이 검사
    public boolean isValidLengthShopCeoPhone(String shopCeoPhone){
        if(shopCeoPhone.length()>20) return false;
        return true;
    }
}
