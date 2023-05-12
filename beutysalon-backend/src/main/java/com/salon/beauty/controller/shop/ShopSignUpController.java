package com.salon.beauty.controller.shop;

import com.salon.beauty.model.dto.request.shop.ShopSignUpRequestDTO;
import com.salon.beauty.service.shop.ShopSignUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * shop 회원가입 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/signup")
@RequiredArgsConstructor
@Controller
public class ShopSignUpController {

    private final ShopSignUpService shopSignUpService;

    @PostMapping("")
    public ResponseEntity<?> signup(@RequestBody ShopSignUpRequestDTO shopSignUpRequestDTO) throws Exception {
        if(shopSignUpService.signup(shopSignUpRequestDTO)) return ResponseEntity.status(201).body("성공");
        return ResponseEntity.status(201).body("회원가입에 성공하였습니다.");
    }
}
