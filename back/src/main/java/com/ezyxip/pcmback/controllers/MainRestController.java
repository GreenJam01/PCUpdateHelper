package com.ezyxip.pcmback.controllers;

import com.ezyxip.pcmback.entities.AssemblyEntity;
import com.ezyxip.pcmback.repositories.AssemblyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
