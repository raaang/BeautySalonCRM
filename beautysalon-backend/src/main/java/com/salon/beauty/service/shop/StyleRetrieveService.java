package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.response.shop.MainStyleRetrieveResponseDTO;
import com.salon.beauty.model.dto.response.shop.MiddleStyleRetrieveResponseDTO;
import com.salon.beauty.model.dto.response.shop.SubStyleRetrieveResponseDTO;

import java.util.List;

public interface StyleRetrieveService {
    // 메인 스타일 조회
    public List<MainStyleRetrieveResponseDTO> getMainStyleList() throws Exception;

    // 중간 스타일 조회
    public List<MiddleStyleRetrieveResponseDTO> getMiddleStyleList(String mainStyleId) throws Exception;

    // 하위 스타일 조회
    public List<SubStyleRetrieveResponseDTO> getSubStyleList(String middleStyleId) throws Exception;
}
