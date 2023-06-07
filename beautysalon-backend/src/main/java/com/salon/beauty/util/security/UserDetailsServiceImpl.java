package com.salon.beauty.util.security;

import com.salon.beauty.model.mapper.shop.ShopSignInMapper;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private SqlSession sqlSession;

    @Override
    public UserDetails loadUserByUsername(String shopLoginId) throws UsernameNotFoundException {
        UserDetailsImpl users = new UserDetailsImpl();
        try {
            users = sqlSession.getMapper(ShopSignInMapper.class).getUserById(shopLoginId);
        } catch (SQLException e) {
            throw new UsernameNotFoundException("아이디 혹은 비밀번호를 잘못 입력하였습니다.");
        }
        return new UserDetailsImpl(users);
    }
}
