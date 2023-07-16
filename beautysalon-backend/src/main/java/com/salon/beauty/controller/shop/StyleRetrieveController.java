package com.salon.beauty.controller.shop;

import com.salon.beauty.service.shop.StyleRetrieveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * 스타일 조회 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/style/retrieve")
@RequiredArgsConstructor
@Controller
public class StyleRetrieveController {
    private final StyleRetrieveService styleRetrieveService;

    @GetMapping("/main")
    public ResponseEntity<?> getMainStyleList() throws Exception {
        return ResponseEntity.status(200).body(styleRetrieveService.getMainStyleList());
    }

    @GetMapping("/middle")
    public ResponseEntity<?> getMiddleStyleList(@RequestParam String mainStyleId) throws Exception {
        return ResponseEntity.status(200).body(styleRetrieveService.getMiddleStyleList(mainStyleId));
    }

    @GetMapping("/sub")
    public ResponseEntity<?> getSubStyleList(@RequestParam String middleStyleId) throws Exception {
        return ResponseEntity.status(200).body(styleRetrieveService.getSubStyleList(middleStyleId));
    }
}
