package com.salon.beauty.controller.customer;

import com.salon.beauty.model.dto.request.customer.CustomerSaveRequestDTO;
import com.salon.beauty.service.customer.CustomerSaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 고객 등록 요청을 처리하는 Controller
 */
@RequestMapping("/api/customer/save")
@RequiredArgsConstructor
@Controller
public class CustomerSaveController {
    private final CustomerSaveService customerSaveService;

    @PostMapping("")
    public ResponseEntity<?> customerSaveData(@RequestBody CustomerSaveRequestDTO customerSaveRequestDTO) throws Exception {
        if(customerSaveService.customerSaveData(customerSaveRequestDTO)) return ResponseEntity.status(201).body("고객 등록에 성공하였습니다.");
        return ResponseEntity.status(400).body("고객 등록에 실패하였습니다.");
    }
}
