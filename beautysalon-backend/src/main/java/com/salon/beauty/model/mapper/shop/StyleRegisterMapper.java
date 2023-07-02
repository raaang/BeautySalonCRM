package com.salon.beauty.model.mapper.shop;

import com.salon.beauty.model.dto.request.shop.MainStyleRegisterRequestDTO;
import com.salon.beauty.model.dto.request.shop.MiddleStyleRegisterRequestDTO;
import com.salon.beauty.model.dto.request.shop.SubStyleRegisterRequestDTO;
import org.apache.ibatis.annotations.Mapper;

/**
 * 스타일 등록과 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface StyleRegisterMapper {
    public int mainStyleRegister(MainStyleRegisterRequestDTO mainStyleRegisterRequestDTO) throws Exception;
    public int middleStyleRegister(MiddleStyleRegisterRequestDTO middleStyleRegisterRequestDTO) throws Exception;
    public int subStyleRegister(SubStyleRegisterRequestDTO subStyleRegisterRequestDTO) throws Exception;
}
