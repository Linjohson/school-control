package com.api.schoolcontrol.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.schoolcontrol.entities.Administrador;

import java.util.List;
import java.util.Optional;

public interface AdministradorRepository extends JpaRepository<Administrador, Long> {

    List<Administrador> findAll(); // Método existente

    Optional<Administrador> findByMatricula(String matricula); // Novo método para verificar a matrícula
}


