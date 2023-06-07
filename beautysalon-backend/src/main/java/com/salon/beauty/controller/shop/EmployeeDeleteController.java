package com.salon.beauty.controller.shop;

import com.salon.beauty.service.shop.EmployeeDeleteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * 직원 삭제 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/employee/delete")
@RequiredArgsConstructor
@Controller
public class EmployeeDeleteController {
    private final EmployeeDeleteService employeeDeleteService;

    @GetMapping("")
    public ResponseEntity<?> employeeDelete(@RequestParam String employeeId) throws Exception {
        System.out.println(employeeId);
        if(employeeDeleteService.employeeDelete(employeeId)) return ResponseEntity.status(201).body("직원 삭제에 성공하였습니다.");
        return ResponseEntity.status(400).body("직원 삭제에 실패하였습니다.");
    }
}
