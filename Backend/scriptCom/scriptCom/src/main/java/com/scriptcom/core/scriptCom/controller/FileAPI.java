package com.scriptcom.core.scriptCom.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.scriptcom.core.scriptCom.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin(value = "*")
public class FileAPI {

    @Autowired
    FileService fileService;


    @PostMapping("/file/upload")
        public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) throws IOException{
        Object response  = fileService.addFile(file);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @GetMapping("/file/{fileName}")
    public ResponseEntity<?> downloadFile(@PathVariable String fileName) throws IOException {

        Object response = fileService.downloadFile(fileName);
        return  new ResponseEntity<>(response,HttpStatus.OK);
    }
}
