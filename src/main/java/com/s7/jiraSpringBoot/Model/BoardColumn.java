package com.s7.jiraSpringBoot.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "board_column", schema = "public")
public class BoardColumn implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private Board board;

    private String name;

    private int index;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public BoardColumn(int id, Board board, String name, int index) {
        this.id = id;
        this.board = board;
        this.name = name;
        this.index = index;
    }
}
