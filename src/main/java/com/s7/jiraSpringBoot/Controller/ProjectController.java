package com.s7.jiraSpringBoot.Controller;


import com.s7.jiraSpringBoot.Model.Project;
import com.s7.jiraSpringBoot.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/projects")
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Project> getProjects() { return projectService.getProjectsByMemberId(1); }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Project saveProject(@RequestBody Project project) {
        return projectService.saveProject(project);
    }

}
