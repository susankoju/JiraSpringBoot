package com.s7.jiraSpringBoot.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "board", schema = "public")
public class Board implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    private Board board;

    private String type;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Board(int id, String name, Board board, String type) {
        this.id = id;
        this.name = name;
        this.board = board;
        this.type = type;
    }
}
