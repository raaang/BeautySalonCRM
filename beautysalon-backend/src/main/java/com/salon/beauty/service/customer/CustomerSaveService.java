package com.salon.beauty.service.customer;

import com.salon.beauty.model.dto.request.customer.CustomerSaveRequestDTO;

public interface CustomerSaveService {
    public boolean customerSaveData(CustomerSaveRequestDTO customerSaveRequestDTO) throws Exception;
}
