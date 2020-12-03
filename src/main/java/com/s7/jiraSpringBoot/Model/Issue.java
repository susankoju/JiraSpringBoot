package com.s7.jiraSpringBoot.Model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "task", schema = "public")
public class Issue implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String status;

    @Column
    private int storyPoint;

    @Column
    private int priority;

    @Column
    private boolean isSprint;

    @Column
    private Sprint sprint;

    @Column
    private BoardColumn boardColumn;

    @Column
    private String label;

    @Column
    private String type;

    @Column
    private Date due_date;

    @Column
    private String attachment;

    @ManyToOne
    private User reporter;

    @ManyToOne
    private User assignee;

    @ManyToOne
    private Project project;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getStoryPoint() {
        return storyPoint;
    }

    public void setStoryPoint(int storyPoint) {
        this.storyPoint = storyPoint;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public boolean isSprint() {
        return isSprint;
    }

    public void setSprint(boolean sprint) {
        isSprint = sprint;
    }

    public Sprint getSprint() {
        return sprint;
    }

    public void setSprint(Sprint sprint) {
        this.sprint = sprint;
    }

    public BoardColumn getBoardColumn() {
        return boardColumn;
    }

    public void setBoardColumn(BoardColumn boardColumn) {
        this.boardColumn = boardColumn;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getDue_date() {
        return due_date;
    }

    public void setDue_date(Date due_date) {
        this.due_date = due_date;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    public User getReporter() {
        return reporter;
    }

    public void setReporter(User reporter) {
        this.reporter = reporter;
    }

    public User getAssignee() {
        return assignee;
    }

    public void setAssignee(User assignee) {
        this.assignee = assignee;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Issue(int id, String title, String description, String status, int storyPoint, int priority, boolean isSprint, Sprint sprint, BoardColumn boardColumn, String label, String type, Date due_date, String attachment, User reporter, User assignee, Project project) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.storyPoint = storyPoint;
        this.priority = priority;
        this.isSprint = isSprint;
        this.sprint = sprint;
        this.boardColumn = boardColumn;
        this.label = label;
        this.type = type;
        this.due_date = due_date;
        this.attachment = attachment;
        this.reporter = reporter;
        this.assignee = assignee;
        this.project = project;
    }
}
