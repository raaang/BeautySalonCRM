package com.salon.beauty.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api/shop")
@Controller
public class ShopController {

    @GetMapping("/test")
    public ResponseEntity<String> test(){
        HttpStatus status = HttpStatus.ACCEPTED;
        return new ResponseEntity<String>("success", status);
    }
}
