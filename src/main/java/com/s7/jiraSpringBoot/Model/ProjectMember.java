package com.s7.jiraSpringBoot.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class ProjectMember implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private int project_id;

    @Column
    private int user_id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProject_id() {
        return project_id;
    }

    public ProjectMember(int id, int project_id, int user_id) {
        this.id = id;
        this.project_id = project_id;
        this.user_id = user_id;
    }

    public void setProject_id(int project_id) {
        this.project_id = project_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
