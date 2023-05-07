package com.salon.beauty.util.security;

import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@ToString
public class UserDetailsImpl implements UserDetails {
    private String shop_login_id;
    private String shop_password;
    List<GrantedAuthority> roles = new ArrayList<>();

    public UserDetailsImpl() {
        super();
    }

    public UserDetailsImpl(UserDetailsImpl users) {
        super();
        this.shop_login_id = users.shop_login_id;
        this.shop_password = users.shop_password;
        roles.add(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @Override
    public String getPassword() {
        return shop_password;
    }

    @Override
    public String getUsername() {
        return shop_login_id;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
