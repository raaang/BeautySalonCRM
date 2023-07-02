package com.salon.beauty.controller.shop;

import com.salon.beauty.model.dto.request.shop.MainStyleRegisterRequestDTO;
import com.salon.beauty.model.dto.request.shop.MiddleStyleRegisterRequestDTO;
import com.salon.beauty.model.dto.request.shop.SubStyleRegisterRequestDTO;
import com.salon.beauty.service.shop.StyleRegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 스타일 등록 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/style")
@RequiredArgsConstructor
@Controller
public class StyleRegisterController {

    private final StyleRegisterService styleRegisterService;

    @PostMapping("/main")
    public ResponseEntity<?> mainStyleRegister(@RequestBody MainStyleRegisterRequestDTO mainStyleRegisterRequestDTO) throws Exception {
        if(styleRegisterService.mainStyleRegister(mainStyleRegisterRequestDTO)) return ResponseEntity.status(201).body("메인 스타일 등록에 성공하였습니다.");
        return ResponseEntity.status(400).body("메인 스타일 등록에 실패하였습니다.");
    }

    @PostMapping("/middle")
    public ResponseEntity<?> middleStyleRegister(@RequestBody MiddleStyleRegisterRequestDTO middleStyleRegisterRequestDTO) throws Exception {
        if(styleRegisterService.middleStyleRegister(middleStyleRegisterRequestDTO)) return ResponseEntity.status(201).body("중간 스타일 등록에 성공하였습니다.");
        return ResponseEntity.status(400).body("중간 스타일 등록에 실패하였습니다.");
    }

    @PostMapping("/sub")
    public ResponseEntity<?> subStyleRegister(@RequestBody SubStyleRegisterRequestDTO subStyleRegisterRequestDTO) throws Exception {
        if(styleRegisterService.subStyleRegister(subStyleRegisterRequestDTO)) return ResponseEntity.status(201).body("하위 스타일 등록에 성공하였습니다.");
        return ResponseEntity.status(400).body("하위 스타일 등록에 실패하였습니다.");
    }
}
