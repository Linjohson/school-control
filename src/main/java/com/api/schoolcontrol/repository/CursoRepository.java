package com.api.schoolcontrol.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.schoolcontrol.entities.Curso;
import com.api.schoolcontrol.entities.Semestre;

public interface CursoRepository extends JpaRepository<Curso, Long> {

    List<Curso> findAll(); // Método existente

    Optional<Curso> findByNome(String Curso); // Novo método para verificar a matrícula
}

