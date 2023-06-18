package com.salon.beauty.controller.shop;

import com.salon.beauty.service.shop.EmployeeRetrieveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

/**
 * 직원 정보 조회 요청을 처리하는 Controller
 */
@RequestMapping("/api/shop/employee/retrieve")
@RequiredArgsConstructor
@Controller
public class EmployeeRetrieveController {

    private final EmployeeRetrieveService employeeRetrieveService;

    @GetMapping("/list")
    public ResponseEntity<?> getEmployeeList(@RequestParam(defaultValue = "0", required = false, name = "pagenum") int pageNum, @RequestParam(defaultValue = "7", required = false, name = "pagesize") int pageSize) throws Exception {
        return ResponseEntity.status(200).body(employeeRetrieveService.employeeList(pageNum, pageSize));
    }

    @GetMapping("/detail")
    public ResponseEntity<?> getEmployeeList(@RequestParam(name = "employeeid") String employeeId) throws Exception {
        return ResponseEntity.status(200).body(employeeRetrieveService.employeeDetail(employeeId));
    }
}