package com.api.schoolcontrol.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.schoolcontrol.entities.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
    // Aqui você pode adicionar métodos de consulta personalizados, se necessário
}

