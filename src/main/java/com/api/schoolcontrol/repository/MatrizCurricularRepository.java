package com.api.schoolcontrol.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.schoolcontrol.entities.MatrizCurricular;

public interface MatrizCurricularRepository extends JpaRepository<MatrizCurricular, Long> {

    List<MatrizCurricular> findAll(); // Método existente

    Optional<MatrizCurricular> findByNome(String MatrizCurricular); // Novo método para verificar a matrícula
}
