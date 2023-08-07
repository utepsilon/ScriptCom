package com.scriptcom.core.scriptCom.model;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;

public class Script {

    @Id
    private String id;

    private String title;

    private String description;

    private Double reviews;

    private String code;

    private String fileName;

    private String thumbnailId;

    public Script(String id, String title, String description, Double reviews, String code, String fileName, String thumbnailId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.reviews = reviews;
        this.code = code;
        this.fileName = fileName;
        this.thumbnailId = thumbnailId;
    }

    public String getThumbnailId() {
        return thumbnailId;
    }

    public void setThumbnailId(String thumbnailId) {
        this.thumbnailId = thumbnailId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public Double getReviews() {
        return reviews;
    }

    public void setReviews(Double reviews) {
        this.reviews = reviews;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Script() {
    }
}
