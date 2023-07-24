package com.salon.beauty.service.customer;

import com.salon.beauty.model.dto.request.customer.CustomerDetailResponseDTO;
import com.salon.beauty.model.dto.response.customer.CustomerListResponseDTO;

public interface CustomerRetrieveService {
    // 직원 리스트 조회
    public CustomerListResponseDTO customerList(int pageNum, int pageSize) throws Exception;

    // 직원 세부 정보 조회
    public CustomerDetailResponseDTO customerDetail(String customerId) throws Exception;
}
