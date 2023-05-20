package com.salon.beauty.controller.shop;

import com.salon.beauty.service.shop.ShopCheckIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * shop 로그인 아이디 중복 검사 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/checkid")
@RequiredArgsConstructor
@Controller
public class ShopCheckIdController {//private String shop_login_id

    private final ShopCheckIdService shopCheckIdService;

    @GetMapping("")
    public ResponseEntity<?> getShopCheckId(@RequestParam String shop_login_id) throws Exception {
        if(shopCheckIdService.shopCheckId(shop_login_id)) return ResponseEntity.status(200).body("이미 사용된 로그인 아이디입니다. 다른 아이디를 선택하세요.");
        return ResponseEntity.status(200).body("사용 가능한 로그인 아이디입니다.");
    }
}
