package com.s7.jiraSpringBoot.Service;

import com.s7.jiraSpringBoot.Model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MainService <T> {
    Page<T> getAll(Pageable pageable);
    T add( T o);
    T update (T o, int id);
    T getById( int id);
    T deleteById(int id);

    List<User> getAllUsers();
}
