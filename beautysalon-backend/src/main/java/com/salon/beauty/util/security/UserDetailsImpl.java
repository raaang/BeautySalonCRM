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
    private String shopLoginId;
    private String shopPassword;
    List<GrantedAuthority> roles = new ArrayList<>();

    public UserDetailsImpl() {
        super();
    }

    public UserDetailsImpl(UserDetailsImpl users) {
        super();
        this.shopLoginId = users.shopLoginId;
        this.shopPassword = users.shopPassword;
        roles.add(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @Override
    public String getPassword() {
        return shopPassword;
    }

    @Override
    public String getUsername() {
        return shopLoginId;
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
