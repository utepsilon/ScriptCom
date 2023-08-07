package com.scriptcom.core.scriptCom.services;

import com.scriptcom.core.scriptCom.model.Thumbnail;
import com.scriptcom.core.scriptCom.repository.ThumbnailRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ThumbnailService {

    @Autowired
    ThumbnailRepository thumbnailRepository;

    public String addThumbnail(String title, MultipartFile file) throws IOException {
        Thumbnail thumbnail = new Thumbnail(title);
        thumbnail.setImage(
                new Binary(BsonBinarySubType.BINARY, file.getBytes()));
        thumbnail = thumbnailRepository.insert(thumbnail);
        return thumbnail.getId();
    }

    public Thumbnail getThumbnail(String id) {
        return thumbnailRepository.findById(id).get();
    }
}
