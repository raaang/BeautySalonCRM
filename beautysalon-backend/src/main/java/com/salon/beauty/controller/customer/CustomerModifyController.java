package com.salon.beauty.controller.customer;

import com.salon.beauty.model.dto.request.customer.CustomerModifyRequestDTO;
import com.salon.beauty.service.customer.CustomerModifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * customer 정보 수정 요청을 처리하는 Controller
 */
@RequestMapping("/api/customer/modify")
@RequiredArgsConstructor
@Controller
public class CustomerModifyController {

    private final CustomerModifyService customerModifyService;

    @PostMapping("")
    public ResponseEntity<?> signup(@RequestBody CustomerModifyRequestDTO customerModifyRequestDTO) throws Exception {
        if(customerModifyService.customerModify(customerModifyRequestDTO)) return ResponseEntity.status(201).body("고객 정보 수정에 성공하였습니다.");
        return ResponseEntity.status(201).body("고객 정보 수정에 실패하였습니다.");
    }
}
