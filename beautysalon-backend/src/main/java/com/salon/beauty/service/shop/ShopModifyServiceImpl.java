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
        System.out.println(shopModifyRequestDTO.getShop_name());
        if(!isValidShopLoginId(shopModifyRequestDTO.getShop_login_id())) throw new IllegalArgumentException("글자(a-z), 숫자(0-9)만 입력 가능합니다.");
        if(!isValidLengthShopLoginId(shopModifyRequestDTO.getShop_login_id())) throw new IllegalArgumentException("로그인 아이디를 6글자 이상 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopLoginPassword(shopModifyRequestDTO.getShop_password())) throw new IllegalArgumentException("로그인 비밀번호를  8글자 이상 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopName(shopModifyRequestDTO.getShop_password())) throw new IllegalArgumentException("샵 이름을 50글자 이내로 입력해주세요.");
        if(!isValidLengthShopPhone(shopModifyRequestDTO.getShop_phone())) throw new IllegalArgumentException("샵 전화번호를 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopCeo(shopModifyRequestDTO.getShop_ceo())) throw new IllegalArgumentException("샵 대표 이름을 20글자 이내로 입력해주세요.");
        if(!isValidLengthShopCeoPhone(shopModifyRequestDTO.getShop_ceo_phone())) throw new IllegalArgumentException("샵 대표 이름을 20글자 이내로 입력해주세요.");
        shopModifyRequestDTO.setShop_password(passwordEncoder.encode(shopModifyRequestDTO.getShop_password()));
        if(shopCheckId(shopModifyRequestDTO.getShop_login_id())) throw new IllegalArgumentException("로그인 아이디가 이미 존재합니다.");
        shopModifyRequestDTO.setShop_id(sqlSession.getMapper(ShopIdMapper.class).shopId(SecurityContextHolder.getContext().getAuthentication().getName()));
        System.out.println(shopModifyRequestDTO.getShop_login_id());
        System.out.println(shopModifyRequestDTO.getShop_id());
        int result = sqlSession.getMapper(ShopModifyMapper.class).shopModify(shopModifyRequestDTO);
        return result==1;
    }

    // 로그인 아이디 중복 검사
    public boolean shopCheckId(String shop_login_id) throws Exception {
        if(sqlSession.getMapper(ShopSignUpMapper.class).shopExistCheck(shop_login_id)>=1) throw new IllegalArgumentException("로그인 아이디가 이미 존재합니다.");
        return false;
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
