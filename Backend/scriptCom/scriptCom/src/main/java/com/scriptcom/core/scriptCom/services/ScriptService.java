package com.scriptcom.core.scriptCom.services;

import com.mongodb.MongoException;
import com.scriptcom.core.scriptCom.model.Script;
import com.scriptcom.core.scriptCom.repository.ScriptRepository;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.Optional;

@Service
public class ScriptService {

    @Autowired
    ScriptRepository scriptRepository;


    public Optional<Mono<Script>>addScript(Script script){
        try{
            if(Objects.nonNull(script)){
                return Optional.ofNullable(scriptRepository.save(script));
            }
        }
        catch (Exception e){
            if(e instanceof  NullPointerException)
            {

            }
            if(e instanceof MongoException)
            {

            }
        }
        return Optional.empty();
    }


    public Optional<Mono<Script>> getScript(String id){

        try {
            if(Strings.isNotEmpty(id)){
                return Optional.ofNullable(scriptRepository.findById(id));
            }
        }
        catch (Exception e){

        }
        return Optional.empty();
    }
}
