package com.salon.beauty.controller.shop;

import com.salon.beauty.model.dto.request.shop.EmployeeModifyRequestDTO;
import com.salon.beauty.service.shop.EmployeeModifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 직원 수정 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/employee/modify")
@RequiredArgsConstructor
@Controller
public class EmployeeModifyController {
    private final EmployeeModifyService employeeModifyService;

    @PostMapping("")
    public ResponseEntity<?> employeeModify(@RequestBody EmployeeModifyRequestDTO employeeModifyRequestDTO) throws Exception {
        if(employeeModifyService.employeeModify(employeeModifyRequestDTO)) return ResponseEntity.status(201).body("직원 정보 수정에 성공하였습니다.");
        return ResponseEntity.status(400).body("직원 정보 수정에 실패하였습니다.");
    }
}
