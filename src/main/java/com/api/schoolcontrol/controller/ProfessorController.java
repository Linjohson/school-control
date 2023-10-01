package com.api.schoolcontrol.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.schoolcontrol.entities.Professor;
import com.api.schoolcontrol.repository.ProfessorRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/professores")
public class ProfessorController {
    private final ProfessorRepository professorRepository;

    @Autowired
    public ProfessorController(ProfessorRepository professorRepository) {
        this.professorRepository = professorRepository;
    }

    @GetMapping
    public ResponseEntity<List<Professor>> getAllProfessores() {
        List<Professor> professores = professorRepository.findAll();
        return ResponseEntity.ok(professores);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professor> getProfessorById(@PathVariable Long id) {
        Optional<Professor> professor = professorRepository.findById(id);
        return professor.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Professor> createProfessor(@RequestBody Professor professor) {
        Professor savedProfessor = professorRepository.save(professor);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProfessor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Professor> updateProfessor(@PathVariable Long id, @RequestBody Professor professor) {
        if (!professorRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        professor.setId(id);
        Professor updatedProfessor = professorRepository.save(professor);
        return ResponseEntity.ok(updatedProfessor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfessor(@PathVariable Long id) {
        if (!professorRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        professorRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

