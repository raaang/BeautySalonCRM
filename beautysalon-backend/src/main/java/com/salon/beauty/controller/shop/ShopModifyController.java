package com.salon.beauty.controller.shop;

import com.salon.beauty.model.dto.request.shop.ShopModifyRequestDTO;
import com.salon.beauty.service.shop.ShopModifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * shop 정보 수정 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/modify")
@RequiredArgsConstructor
@Controller
public class ShopModifyController {

    private final ShopModifyService shopModifyService;

    @PostMapping("")
    public ResponseEntity<?> signup(@RequestBody ShopModifyRequestDTO shopModifyRequestDTO) throws Exception {
        if(shopModifyService.shopModify(shopModifyRequestDTO)) return ResponseEntity.status(201).body("샵 정보 수정에 성공하였습니다.");
        return ResponseEntity.status(400).body("샵 정보 수정에 실패하였습니다.");
    }
}
