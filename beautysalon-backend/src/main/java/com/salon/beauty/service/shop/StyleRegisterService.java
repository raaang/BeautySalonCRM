package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.MainStyleRegisterRequestDTO;
import com.salon.beauty.model.dto.request.shop.MiddleStyleRegisterRequestDTO;
import com.salon.beauty.model.dto.request.shop.SubStyleRegisterRequestDTO;

public interface StyleRegisterService {
    public boolean mainStyleRegister(MainStyleRegisterRequestDTO mainStyleRegisterRequestDTO) throws Exception;
    public boolean middleStyleRegister(MiddleStyleRegisterRequestDTO middleStyleRegisterRequestDTO) throws Exception;
    public boolean subStyleRegister(SubStyleRegisterRequestDTO subStyleRegisterRequestDTO) throws Exception;
}
