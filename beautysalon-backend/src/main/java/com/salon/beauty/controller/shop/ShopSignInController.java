package com.salon.beauty.controller.shop;

import com.salon.beauty.model.dto.request.shop.ShopSignInRequestDTO;
import com.salon.beauty.service.shop.ShopSignInService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * shop 로그인 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/signin")
@RequiredArgsConstructor
@Controller
public class ShopSignInController {

    private final ShopSignInService shopSignInService;

    @PostMapping("")
    public ResponseEntity<?> signIn(@RequestBody ShopSignInRequestDTO shopSignInRequestDTO) throws Exception {
        return ResponseEntity.status(200).body(shopSignInService.signIn(shopSignInRequestDTO));
    }
}
