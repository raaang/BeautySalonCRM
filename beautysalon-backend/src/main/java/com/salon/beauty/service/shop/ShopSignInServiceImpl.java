package com.salon.beauty.service.shop;

import com.salon.beauty.model.dto.request.shop.ShopSignInRequestDTO;
import com.salon.beauty.model.dto.response.shop.ShopSignInResponseDTO;
import com.salon.beauty.util.security.JwtAuthenticationProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * shop 로그인 요청을 처리하는 Service
 */
@Service
@RequiredArgsConstructor
public class ShopSignInServiceImpl implements ShopSignInService {

    private final JwtAuthenticationProvider jwtAuthenticationProvider;
    private final AuthenticationManager authenticationManager;



    @Override
    public ShopSignInResponseDTO signIn(ShopSignInRequestDTO shopSignInRequestDTO) throws UsernameNotFoundException {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(shopSignInRequestDTO.getShop_login_id(), shopSignInRequestDTO.getShop_password())
        );
        return ShopSignInResponseDTO.builder()
                .accessToken(jwtAuthenticationProvider.createToken(authentication))
                .shop_login_id(authentication.getName())
                .build();
    }
}
