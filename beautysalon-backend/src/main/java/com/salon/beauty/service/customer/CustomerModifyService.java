package com.salon.beauty.service.customer;

import com.salon.beauty.model.dto.request.customer.CustomerModifyRequestDTO;

public interface CustomerModifyService {
    // 고객 정보 수정
    public boolean customerModify(CustomerModifyRequestDTO customerModifyRequestDTO) throws Exception;
}
