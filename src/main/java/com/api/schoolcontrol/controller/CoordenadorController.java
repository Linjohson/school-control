package com.api.schoolcontrol.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.schoolcontrol.entities.Curso;
import com.api.schoolcontrol.entities.Disciplina;
import com.api.schoolcontrol.entities.MatrizCurricular;
import com.api.schoolcontrol.entities.Semestre;
import com.api.schoolcontrol.entities.Semestre;
import com.api.schoolcontrol.repository.CursoRepository;
import com.api.schoolcontrol.repository.DisciplinaRepository;
import com.api.schoolcontrol.repository.MatrizCurricularRepository;
import com.api.schoolcontrol.repository.SemestreRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/coordenador")
public class CoordenadorController {

    @Autowired
    private SemestreRepository semestreRepository;
    private final DisciplinaRepository disciplinaRepository;
    private final CursoRepository cursoRepository;
    private MatrizCurricularRepository matrizCurricularRepository;
    
    @Autowired
    public CoordenadorController(DisciplinaRepository disciplinaRepository, CursoRepository cursoRepository, MatrizCurricularRepository matrizCurricularRepository) {
        this.disciplinaRepository = disciplinaRepository;
        this.cursoRepository = cursoRepository;
        this.matrizCurricularRepository = matrizCurricularRepository;
    }
 
    //Semestres
    @GetMapping("/listaSemestre")
    public List<Semestre> getAllSemestres() {
        return semestreRepository.findAll();
    }

    @GetMapping("/listaSemestre/{id}")
    public Semestre getSemestreById(@PathVariable Long id) {
        return semestreRepository.findById(id).orElse(null);
    }

    @PostMapping("/adicionarSemestre")
    public ResponseEntity<?> adicionarSemestre(@RequestBody Semestre semestre) {
        // Verificar se já existe um semestre com a mesma matrícula
        Optional<Semestre> existingSemestre = semestreRepository.findByNome(semestre.getNome());

        if (existingSemestre.isPresent()) {
            // Um semestre com a mesma matrícula já existe, retorne um erro ou mensagem adequada
            return ResponseEntity.badRequest().body("Esse semestre " + semestre.getNome() + " já foi cadastrado.");
        } else {
            // Não existe um semestre com a mesma matrícula, então podemos salvar o novo semestre
            Semestre savedSemestre = semestreRepository.save(semestre);
            return ResponseEntity.ok(savedSemestre);
        }
    }
    
    
    @PutMapping("/atualizarSemestre/{id}")
    public ResponseEntity<?> atualizarSemestre(@PathVariable Long id, @RequestBody Semestre semestre) {
        // Verificar se já existe um semestre com a mesma matrícula (ou outro atributo único)
        Optional<Semestre> existingSemestreWithSameNome = semestreRepository.findByNome(semestre.getNome());

        if (existingSemestreWithSameNome.isPresent() && !existingSemestreWithSameNome.get().getId().equals(id)){
            return ResponseEntity.badRequest().body("Já existe um semestre com a mesma matrícula.");
        } else {
            Optional<Semestre> existingSemestre = semestreRepository.findById(id);
            
            if (existingSemestre.isPresent()) {
                Semestre updatedSemestre = existingSemestre.get();
                updatedSemestre.setNome(semestre.getNome());
                updatedSemestre.setNome(semestre.getNome());
                
                Semestre savedSemestre = semestreRepository.save(updatedSemestre);
                return ResponseEntity.ok(savedSemestre);
            } else {
                return ResponseEntity.notFound().build();
            }
        }
    }


    @DeleteMapping("/deletarSemestre/{id}")
    public void deletarSemestre(@PathVariable Long id) {
        semestreRepository.deleteById(id);
    }
    
    
    // Disciplinas
    @GetMapping("/listaDisciplina")
    public List<Disciplina> listarDisciplinas() {
        return disciplinaRepository.findAll();
    }

    @GetMapping("/listaDisciplina/{id}")
    public ResponseEntity<Disciplina> obterDisciplinaPorId(@PathVariable Long id) {
        return disciplinaRepository.findById(id)
                .map(disciplina -> ResponseEntity.ok().body(disciplina))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/adicionarDisciplina")
    public ResponseEntity<?> adicionarDisciplina(@RequestBody Disciplina disciplina) {
        Optional<Disciplina> existingDisciplina = disciplinaRepository.findByNome(disciplina.getNome());

        if (existingDisciplina.isPresent()) {
            return ResponseEntity.badRequest().body("Esse disciplina " + disciplina.getNome() + " já foi cadastrado.");
        } else {
            Disciplina savedDisciplina = disciplinaRepository.save(disciplina);
            return ResponseEntity.ok(savedDisciplina);
        }
    }

    @PutMapping("/atualizarDisciplina/{id}")
    public ResponseEntity<?> atualizarDisciplina(@PathVariable Long id, @RequestBody Disciplina disciplina) {
        Optional<Disciplina> existingDisciplinaWithSameNome = disciplinaRepository.findByNome(disciplina.getNome());

        if (existingDisciplinaWithSameNome.isPresent() && !existingDisciplinaWithSameNome.get().getId().equals(id)) {
            return ResponseEntity.badRequest().body("Já existe um disciplina com a mesma matrícula.");
        } else {
            Optional<Disciplina> existingDisciplina = disciplinaRepository.findById(id);
            
            if (existingDisciplina.isPresent()) {
                Disciplina updatedDisciplina = existingDisciplina.get();
                updatedDisciplina.setNome(disciplina.getNome());
                updatedDisciplina.setNome(disciplina.getNome());
                
                Disciplina savedDisciplina = disciplinaRepository.save(updatedDisciplina);
                return ResponseEntity.ok(savedDisciplina);
            } else {
                return ResponseEntity.notFound().build();
            }
        }
    }

    @DeleteMapping("deletarDisciplina/{id}")
    public void deletarDisciplina(@PathVariable Long id) {
        disciplinaRepository.deleteById(id);
    }
    
    
    //Cursos
    @GetMapping("/listaCurso")
    public List<Curso> listarCurso() {
        return cursoRepository.findAll();
    }

    @GetMapping("/listaCurso/{id}")
    public ResponseEntity<Curso> obterCursoPorId(@PathVariable Long id) {
        return cursoRepository.findById(id)
                .map(curso -> ResponseEntity.ok().body(curso))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/adicionarCurso")
    public ResponseEntity<?> adicionarCurso(@RequestBody Curso curso) {
        Optional<Curso> existingCurso = cursoRepository.findByNome(curso.getNome());

        if (existingCurso.isPresent()) {
            return ResponseEntity.badRequest().body("Esse curso " + curso.getNome() + " já foi cadastrado.");
        } else {
            Curso savedCurso = cursoRepository.save(curso);
            return ResponseEntity.ok(savedCurso);
        }
    }
    
    @PutMapping("/atualizarCurso/{id}")
    public ResponseEntity<?> atualizarCurso(@PathVariable Long id, @RequestBody Curso curso) {
        Optional<Curso> existingCursoWithSameNome = cursoRepository.findByNome(curso.getNome());

        if (existingCursoWithSameNome.isPresent() && !existingCursoWithSameNome.get().getId().equals(id)) {
            return ResponseEntity.badRequest().body("Já existe um curso com a mesma matrícula.");
        } else {
            Optional<Curso> existingCurso = cursoRepository.findById(id);
            
            if (existingCurso.isPresent()) {
                Curso updatedCurso = existingCurso.get();
                updatedCurso.setNome(curso.getNome());
                
                Curso savedCurso = cursoRepository.save(updatedCurso);
                return ResponseEntity.ok(savedCurso);
            } else {
                return ResponseEntity.notFound().build();
            }
        }
    }

    @DeleteMapping("/deletarCurso/{id}")
    public void deletarCurso(@PathVariable Long id) {
        cursoRepository.deleteById(id);
    }
    
    
    //MatrizCurricular
    @GetMapping("/listarMatriz")
    public List<MatrizCurricular> getAllMatrizCurricular() {
        return matrizCurricularRepository.findAll();
    }

    @GetMapping("/listarMatriz/{id}")
    public MatrizCurricular getMatrizCurricularById(@PathVariable Long id) {
        return matrizCurricularRepository.findById(id).orElse(null);
    }

    @PostMapping("/adicionarMatriz")
    public MatrizCurricular createMatrizCurricular(@RequestBody MatrizCurricular matrizCurricular) {
        return matrizCurricularRepository.save(matrizCurricular);
    }

    @PutMapping("/atualizarMatriz/{id}") 
    public MatrizCurricular updateMatrizCurricular(@PathVariable Long id, @RequestBody MatrizCurricular matrizCurricular) {
        MatrizCurricular existingMatrizCurricular = matrizCurricularRepository.findById(id).orElse(null);
        if (existingMatrizCurricular != null) {
            existingMatrizCurricular.setNome(matrizCurricular.getNome());
            // Atualize outros campos conforme necessário
            return matrizCurricularRepository.save(existingMatrizCurricular);
        } else {
            return null; // Trate o cenário em que a matriz curricular não foi encontrada
        }
    }

    @DeleteMapping("/deletarMatriz/{id}")
    public void deleteMatrizCurricular(@PathVariable Long id) {
        matrizCurricularRepository.deleteById(id);
    }
}

