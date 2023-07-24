package com.salon.beauty.controller.customer;

import com.salon.beauty.service.customer.CustomerDeleteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * 고객 삭제 요청을 처리하는 Controller
 */
@RequestMapping("/api/customer/delete")
@RequiredArgsConstructor
@Controller
public class CustomerDeleteController {
    private final CustomerDeleteService customerDeleteService;

    @GetMapping("")
    public ResponseEntity<?> employeeDelete(@RequestParam String customerId) throws Exception {
        System.out.println(customerId);
        if(customerDeleteService.customerDelete(customerId)) return ResponseEntity.status(201).body("직원 삭제에 성공하였습니다.");
        return ResponseEntity.status(400).body("직원 삭제에 실패하였습니다.");
    }
}
