package com.scriptcom.core.scriptCom.repository;

import com.scriptcom.core.scriptCom.model.Script;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface ScriptRepository extends ReactiveMongoRepository<Script,String> {




}
