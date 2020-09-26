package com.s7.jiraSpringBoot.Model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "project", schema="public")
public class Project implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    @NotNull
    private String name;

    @Column
    @NotNull
    private String type;

    @Column
    @NotNull
    private String key;

    @Column
    private Date createdAt;

    @Column
    private Date updatedAt;

    @ManyToOne
    @JoinColumn(name = "lead_id")
    private User lead;

    @Column
    @OneToMany
    private List<User> team;

    public Project(int id, String name, String type, String key, Date createdAt, Date updatedAt, User lead, List<User> team) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.key = key;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.lead = lead;
        this.team = team;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public User getLead() {
        return lead;
    }

    public void setLead(User lead) {
        this.lead = lead;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
