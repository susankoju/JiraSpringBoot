package com.s7.jiraSpringBoot.Model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Comment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String text;

    @Column
    private User posted_by;

    @Column
    private Issue issue_id;

    @Column
    private Date created_at;

    public Comment(int id, String text, User posted_by, Issue issue_id, Date created_at, Date updated_at) {
        this.id = id;
        this.text = text;
        this.posted_by = posted_by;
        this.issue_id = issue_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public User getPosted_by() {
        return posted_by;
    }

    public void setPosted_by(User posted_by) {
        this.posted_by = posted_by;
    }

    public Issue getTask_id() {
        return issue_id;
    }

    public void setTask_id(Issue issue_id) {
        this.issue_id = issue_id;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Date updated_at) {
        this.updated_at = updated_at;
    }

    @Column
    private Date updated_at;
}
