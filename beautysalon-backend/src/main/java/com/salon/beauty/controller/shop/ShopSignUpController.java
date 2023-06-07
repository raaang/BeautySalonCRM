package com.salon.beauty.controller.shop;

import com.salon.beauty.model.dto.request.shop.ShopSignUpRequestDTO;
import com.salon.beauty.service.shop.ShopSignUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


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
        if(shopSignUpService.signUp(shopSignUpRequestDTO)) return ResponseEntity.status(201).body("회원가입에 성공하였습니다.");
        return ResponseEntity.status(400).body("회원가입에 실패하였습니다.");
    }

    @GetMapping("/checkid")
    public ResponseEntity<?> getShopCheckId(@RequestParam String shopLoginId) throws Exception {
        if(shopSignUpService.shopCheckId(shopLoginId)) return ResponseEntity.status(200).body("이미 사용된 로그인 아이디입니다. 다른 아이디를 선택하세요.");
        return ResponseEntity.status(200).body("사용 가능한 로그인 아이디입니다.");
    }
}
