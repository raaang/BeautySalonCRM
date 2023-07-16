package com.salon.beauty.model.mapper.shop;

import com.salon.beauty.model.dto.response.shop.MainStyleRetrieveResponseDTO;
import com.salon.beauty.model.dto.response.shop.MiddleStyleRetrieveResponseDTO;
import com.salon.beauty.model.dto.response.shop.SubStyleRetrieveResponseDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.sql.SQLException;
import java.util.List;

/**
 * 스타일 조회와 관련된 데이터 액세스 작업을 수행하는 Mapper 클래스
 */
@Mapper
public interface StyleRetrieveMapper {
    public List<MainStyleRetrieveResponseDTO> getMainStyleList(String shopLoginId) throws SQLException;
    public List<MiddleStyleRetrieveResponseDTO> getMiddleStyleList(@Param("shopId") String shopLoginId, @Param("mainStyleId") String mainStyleId) throws SQLException;

    public List<SubStyleRetrieveResponseDTO> getSubStyleList(@Param("shopId") String shopLoginId, @Param("middleStyleId") String middleStyleId) throws SQLException;
}
