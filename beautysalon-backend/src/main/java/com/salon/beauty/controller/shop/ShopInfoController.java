package com.salon.beauty.controller.shop;

import com.salon.beauty.service.shop.ShopInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * shop 정보 조회 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/info")
@RequiredArgsConstructor
@Controller
public class ShopInfoController {

    private final ShopInfoService shopInfoService;

    @GetMapping("")
    public ResponseEntity<?> getShopInfo() throws Exception {
        return ResponseEntity.status(200).body(shopInfoService.getShopInfo());
    }
}
