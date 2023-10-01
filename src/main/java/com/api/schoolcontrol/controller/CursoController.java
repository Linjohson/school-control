package com.api.schoolcontrol.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.schoolcontrol.entities.Curso;
import com.api.schoolcontrol.entities.Curso;
import com.api.schoolcontrol.repository.CursoRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/curso")
public class CursoController {

	/*
	 * private final CursoRepository cursoRepository;
	 * 
	 * @Autowired public CursoController(CursoRepository cursoRepository) {
	 * this.cursoRepository = cursoRepository; }
	 * 
	 * @GetMapping("/lista") public List<Curso> listarCurso() { return
	 * cursoRepository.findAll(); }
	 * 
	 * @GetMapping("/lista/{id}") public ResponseEntity<Curso>
	 * obterCursoPorId(@PathVariable Long id) { return cursoRepository.findById(id)
	 * .map(curso -> ResponseEntity.ok().body(curso))
	 * .orElse(ResponseEntity.notFound().build()); }
	 * 
	 * @PostMapping("/adicionar") public ResponseEntity<?>
	 * adicionarCurso(@RequestBody Curso curso) { // Verificar se já existe um curso
	 * com a mesma matrícula Optional<Curso> existingCurso =
	 * cursoRepository.findByNome(curso.getNome());
	 * 
	 * if (existingCurso.isPresent()) { // Um curso com a mesma matrícula já existe,
	 * retorne um erro ou mensagem adequada return
	 * ResponseEntity.badRequest().body("Esse curso " + curso.getNome() +
	 * " já foi cadastrado."); } else { // Não existe um curso com a mesma
	 * matrícula, então podemos salvar o novo curso Curso savedCurso =
	 * cursoRepository.save(curso); return ResponseEntity.ok(savedCurso); } }
	 * 
	 * @PutMapping("/atualizar/{id}") public ResponseEntity<?>
	 * atualizarCurso(@PathVariable Long id, @RequestBody Curso curso) { //
	 * Verificar se já existe um curso com a mesma matrícula (ou outro atributo
	 * único) Optional<Curso> existingCursoWithSameNome =
	 * cursoRepository.findByNome(curso.getNome());
	 * 
	 * if (existingCursoWithSameNome.isPresent() &&
	 * !existingCursoWithSameNome.get().getId().equals(id)) { // Um curso com a
	 * mesma matrícula já existe e não é o mesmo curso que estamos atualizando.
	 * return
	 * ResponseEntity.badRequest().body("Já existe um curso com a mesma matrícula."
	 * ); } else { // Prossiga com a atualização do curso, pois a matrícula é única
	 * ou não existe conflito. Optional<Curso> existingCurso =
	 * cursoRepository.findById(id);
	 * 
	 * if (existingCurso.isPresent()) { // Atualize os dados do curso existente com
	 * os novos dados Curso updatedCurso = existingCurso.get();
	 * updatedCurso.setNome(curso.getNome()); // Atualize outros atributos, se
	 * necessário
	 * 
	 * Curso savedCurso = cursoRepository.save(updatedCurso); return
	 * ResponseEntity.ok(savedCurso); } else { // Se o curso com o ID especificado
	 * não existe, retorne um erro adequado. return
	 * ResponseEntity.notFound().build(); } } }
	 * 
	 * @DeleteMapping("/deletar/{id}") public void deletarCurso(@PathVariable Long
	 * id) { cursoRepository.deleteById(id); }
	 */
}

