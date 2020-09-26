package com.s7.jiraSpringBoot.Service;

import com.s7.jiraSpringBoot.Model.User;

import java.util.List;

public abstract class UserService implements MainService<User> {
    public abstract List<User> getUserById(int i );
}
