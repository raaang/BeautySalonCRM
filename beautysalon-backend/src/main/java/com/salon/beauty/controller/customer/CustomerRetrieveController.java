package com.salon.beauty.controller.customer;

import com.salon.beauty.service.customer.CustomerRetrieveService;
import com.salon.beauty.service.shop.EmployeeRetrieveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * 고객 정보 조회 요청을 처리하는 Controller
 */
@RequestMapping("/api/customer/retrieve")
@RequiredArgsConstructor
@Controller
public class CustomerRetrieveController {

    private final CustomerRetrieveService customerRetrieveService;

    @GetMapping("/list")
    public ResponseEntity<?> getCustomerList(@RequestParam(defaultValue = "0", required = false, name = "pagenum") int pageNum, @RequestParam(defaultValue = "7", required = false, name = "pagesize") int pageSize) throws Exception {
        return ResponseEntity.status(200).body(customerRetrieveService.customerList(pageNum, pageSize));
    }

    @GetMapping("/detail")
    public ResponseEntity<?> getCustomerList(@RequestParam(name = "customerId") String customerId) throws Exception {
        return ResponseEntity.status(200).body(customerRetrieveService.customerDetail(customerId));
    }
}