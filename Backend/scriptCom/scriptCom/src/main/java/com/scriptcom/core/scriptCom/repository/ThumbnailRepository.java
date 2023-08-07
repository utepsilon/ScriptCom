package com.scriptcom.core.scriptCom.repository;

import com.scriptcom.core.scriptCom.model.Thumbnail;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThumbnailRepository extends MongoRepository<Thumbnail,String> {



}
