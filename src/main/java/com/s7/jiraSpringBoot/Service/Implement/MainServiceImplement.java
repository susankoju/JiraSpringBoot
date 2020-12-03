package com.s7.jiraSpringBoot.Service.Implement;

import com.s7.jiraSpringBoot.Model.Project;
import com.s7.jiraSpringBoot.Model.User;
import com.s7.jiraSpringBoot.Repository.ProjectRepository;
import com.s7.jiraSpringBoot.Repository.UserRepository;
import com.s7.jiraSpringBoot.Service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainServiceImplement implements MainService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepo;

    @Override
    public List<Project> getProjectsByMemberId(int id) {
        List<Project> projects = projectRepo.findAll();

        return projects;
    }

    @Override
    public Project saveProject(Project project) {
        Project proj = projectRepo.save(project);

        return proj;
    }

    @Override
    public Page getAll(Pageable pageable) {
        return null;
    }

    @Override
    public Object add(Object o) {
        return null;
    }

    @Override
    public Object update(Object o, int id) {
        return null;
    }

    @Override
    public Object getById(int id) {
        return null;
    }

    @Override
    public Object deleteById(int id) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
