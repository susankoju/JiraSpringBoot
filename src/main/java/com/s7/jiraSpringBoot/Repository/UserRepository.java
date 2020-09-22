package com.s7.jiraSpringBoot.Repository;

import com.s7.jiraSpringBoot.Model.User;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier(value = "UserRepository")
public interface UserRepository extends JpaRepository<User, Integer> {
}
