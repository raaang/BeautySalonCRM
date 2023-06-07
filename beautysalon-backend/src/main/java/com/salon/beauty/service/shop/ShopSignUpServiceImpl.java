package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.ShopSignUpRequestDTO;
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
    public boolean signUp(ShopSignUpRequestDTO shopSignUpRequestDTO) throws Exception {
        if(!isValidShopLoginId(shopSignUpRequestDTO.getShopLoginId())) throw new IllegalArgumentException("글자(a-z), 숫자(0-9)만 입력 가능합니다.");
        if(!isValidLengthShopLoginId(shopSignUpRequestDTO.getShopLoginId())) throw new IllegalArgumentException("로그인 아이디를 6글자 이상 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopLoginPassword(shopSignUpRequestDTO.getShopPassword())) throw new IllegalArgumentException("로그인 비밀번호를 8글자 이상 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopName(shopSignUpRequestDTO.getShopName())) throw new IllegalArgumentException("샵 이름을 50글자 이내로 입력해주세요.");
        if(!isValidLengthShopPhone(shopSignUpRequestDTO.getShopPhone())) throw new IllegalArgumentException("샵 전화번호를 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopCeo(shopSignUpRequestDTO.getShopCeo())) throw new IllegalArgumentException("샵 대표 이름을 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopCeoPhone(shopSignUpRequestDTO.getShopCeoPhone())) throw new IllegalArgumentException("샵 대표 이름을 20글자 이내로 입력해주세요.");
        shopSignUpRequestDTO.setShopPassword(passwordEncoder.encode(shopSignUpRequestDTO.getShopPassword()));
        if(shopCheckId(shopSignUpRequestDTO.getShopLoginId())) throw new IllegalArgumentException("로그인 아이디가 이미 존재합니다.");
        int result = sqlSession.getMapper(ShopSignUpMapper.class).signup(shopSignUpRequestDTO);
        return result==1;
    }

    // 로그인 아이디 중복 검사
    @Override
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
