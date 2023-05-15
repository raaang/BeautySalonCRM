package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.ShopSignUpRequestDTO;
import com.salon.beauty.model.mapper.shop.ShopExistCheckMapper;
import com.salon.beauty.model.mapper.shop.ShopSignUpMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

/**
 * shop 회원가입 요청을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class ShopSignUpServiceImpl implements ShopSignUpService {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    private SqlSession sqlSession;

    // 회원가입
    @Override
    public boolean signup(ShopSignUpRequestDTO shopSignUpRequestDTO) throws Exception {
        if(!isValidShopLoginId(shopSignUpRequestDTO.getShop_login_id())) throw new IllegalArgumentException("글자(a-z), 숫자(0-9)만 입력 가능합니다.");
        if(!isValidLengthShopLoginId(shopSignUpRequestDTO.getShop_login_id())) throw new IllegalArgumentException("로그인 아이디를 6글자 이상 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopLoginPassword(shopSignUpRequestDTO.getShop_password())) throw new IllegalArgumentException("로그인 비밀번호를  8글자 이상 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopName(shopSignUpRequestDTO.getShop_password())) throw new IllegalArgumentException("샵 이름을 50글자 이내로 입력해주세요.");
        if(!isValidLengthShopPhone(shopSignUpRequestDTO.getShop_phone())) throw new IllegalArgumentException("샵 전화번호를 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopCeo(shopSignUpRequestDTO.getShop_ceo())) throw new IllegalArgumentException("샵 대표 이름을 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopCeoPhone(shopSignUpRequestDTO.getShop_ceo_phone())) throw new IllegalArgumentException("샵 대표 이름을 20글자 이내로 입력해주세요.");
        shopSignUpRequestDTO.setShop_password(passwordEncoder.encode(shopSignUpRequestDTO.getShop_password()));
        if(sqlSession.getMapper(ShopExistCheckMapper.class).shopExistCheck(shopSignUpRequestDTO.getShop_login_id())>=1) throw new IllegalArgumentException("로그인 아이디가 이미 존재합니다.");
        int result = sqlSession.getMapper(ShopSignUpMapper.class).signup(shopSignUpRequestDTO);
        return result==1;
    }

    // 로그인 아이디 패턴 검사
    public boolean isValidShopLoginId(String shop_login_id){
        return Pattern.matches("^[0-9a-z]*$", shop_login_id);
    }

    // 로그인 아이디 길이 검사
    public boolean isValidLengthShopLoginId(String shop_login_id){
        if(shop_login_id.length()<6 || shop_login_id.length()>20) return false;
        return true;
    }

    // 로그인 비밀번호 길이 검사
    public boolean isValidLengthShopLoginPassword(String shop_password){
        if(shop_password.length()<8 || shop_password.length()>20) return false;
        return true;
    }

    // 샵 이름 길이 검사
    public boolean isValidLengthShopName(String shop_name){
        if(shop_name.length()>50) return false;
        return true;
    }

    // 샵 전화번호 길이 검사
    public boolean isValidLengthShopPhone(String shop_phone){
        if(shop_phone.length()>20) return false;
        return true;
    }

    // 샵 대표 이름 길이 검사
    public boolean isValidLengthShopCeo(String shop_ceo){
        if(shop_ceo.length()>20) return false;
        return true;
    }

    // 샵 대표 전화번호 길이 검사
    public boolean isValidLengthShopCeoPhone(String shop_ceo_phone){
        if(shop_ceo_phone.length()>20) return false;
        return true;
    }
}
