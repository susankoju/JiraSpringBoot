package com.s7.jiraSpringBoot.Service;

import com.s7.jiraSpringBoot.Model.Project;

import java.util.List;

public abstract class ProjectService implements MainService<Project> {
    public abstract List<Project> getProjectsByMemberId(int id);

    public abstract Project saveProject(Project project);
}
