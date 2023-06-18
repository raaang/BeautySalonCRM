package com.salon.beauty.model.dto.dto.shop;

import lombok.Data;

@Data
public class EmployeeGetListDTO {
    // 샵 id
    public String shopId;

    // 페이지 번호
    public int pageNum;
}
