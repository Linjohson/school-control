package com.api.schoolcontrol.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.api.schoolcontrol.entities.Disciplina;
import com.api.schoolcontrol.entities.Semestre;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {

    List<Disciplina> findAll(); // Método existente

    Optional<Disciplina> findByNome(String disciplina); // Novo método para verificar a matrícula
}


