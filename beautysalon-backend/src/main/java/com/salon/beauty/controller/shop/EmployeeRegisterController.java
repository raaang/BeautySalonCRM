package com.salon.beauty.controller.shop;

import com.salon.beauty.model.dto.request.shop.EmployeeRegisterRequestDTO;
import com.salon.beauty.service.shop.EmployeeRegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 직원 등록 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/employee")
@RequiredArgsConstructor
@Controller
public class EmployeeRegisterController {
    private final EmployeeRegisterService employeeRegisterService;

    @PostMapping("")
    public ResponseEntity<?> employeeRegister(@RequestBody EmployeeRegisterRequestDTO employeeRegisterRequestDTO) throws Exception {
        if(employeeRegisterService.employeeRegister(employeeRegisterRequestDTO)) return ResponseEntity.status(201).body("직원 등록에 성공하였습니다.");
        return ResponseEntity.status(400).body("직원 등록에 실패하였습니다.");
    }
}
