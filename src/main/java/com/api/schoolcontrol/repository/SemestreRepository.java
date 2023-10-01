package com.api.schoolcontrol.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.api.schoolcontrol.entities.Semestre;


public interface SemestreRepository extends JpaRepository<Semestre, Long> {

    List<Semestre> findAll(); // Método existente

    Optional<Semestre> findByNome(String semestre); // Novo método para verificar a matrícula
}

