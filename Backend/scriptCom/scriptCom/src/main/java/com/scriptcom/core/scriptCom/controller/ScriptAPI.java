package com.scriptcom.core.scriptCom.controller;

import com.scriptcom.core.scriptCom.model.Script;
import com.scriptcom.core.scriptCom.services.ScriptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.Disposable;
import reactor.core.publisher.Mono;

import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

@RestController
public class ScriptAPI {

    @Autowired
    ScriptService scriptService;


    @GetMapping("/script/{id}")
    public ResponseEntity<Object> getScript(@PathVariable String id){

        Optional<Mono<Script>>  scriptMono = scriptService.getScript(id);

        if(scriptMono.isPresent()){
            return new ResponseEntity<>(scriptMono.get().block(), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Invalid Script ID passed",HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/script")
    public ResponseEntity<Object> saveScript(@RequestBody Script script){

         Optional<Mono<Script>> scriptMono =  scriptService.addScript(script);

         if(scriptMono.isPresent()){
            return new ResponseEntity<>(scriptMono.get(), HttpStatus.CREATED);
         }
         else{
             return  new ResponseEntity<>("Unable to Save Object",HttpStatus.BAD_REQUEST);
         }
    }

}
