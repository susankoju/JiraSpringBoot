package com.s7.jiraSpringBoot.Repository;

import com.s7.jiraSpringBoot.Model.Project;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier(value = "ProjectRepository")
public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
