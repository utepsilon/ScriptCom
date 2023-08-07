package com.scriptcom.core.scriptCom.controller;

import com.scriptcom.core.scriptCom.services.ThumbnailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class ThumbnailAPI {

    @Autowired
    ThumbnailService thumbnailService;

    @GetMapping("/thumbnail/{id}")
    public ResponseEntity<?> getThumbnailData(String id){
        return new ResponseEntity<>(thumbnailService.getThumbnail(id), HttpStatus.OK);
    }

    @PostMapping("/thumbnail")
    public ResponseEntity<?> saveThumbnail(@RequestParam("title") String title,@RequestParam("thumbnail") MultipartFile multipartFile) throws IOException {

        return new ResponseEntity<>(thumbnailService.addThumbnail(title,multipartFile),HttpStatus.CREATED);
    }

}

