package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.AssemblyEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AssemblyRepository extends CrudRepository<AssemblyEntity, Long> {
    List<AssemblyEntity> findAll();
    AssemblyEntity findFirstByOrderByIdDesc();
}
