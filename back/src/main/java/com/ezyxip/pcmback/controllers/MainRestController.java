package com.ezyxip.pcmback.controllers;

import com.ezyxip.pcmback.entities.AssemblyEntity;
import com.ezyxip.pcmback.repositories.AssemblyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainRestController {

    @Autowired
    private AssemblyRepository assemblyRepository;

    private AssemblyEntity getLastAssembly(){
        return assemblyRepository.findFirstByOrderByIdDesc();
    }

    @GetMapping(value = "/getLastAssembly")
    private AssemblyEntity getLastAssemblyEndpoint(){
        return getLastAssembly();
    }

    @PostMapping("/addAssembly")
    public ResponseEntity<AssemblyEntity> createTutorial(@RequestBody AssemblyEntity assembly) {
        try {
            AssemblyEntity _tutorial = assemblyRepository
                    .save(new AssemblyEntity(assembly.getCPU(), assembly.getOP(),
                            assembly.getGPU(),
                            assembly.getHDD(),
                            assembly.getMotherboard()));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
