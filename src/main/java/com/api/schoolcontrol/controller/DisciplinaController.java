/*
 * package com.api.schoolcontrol.controller;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.http.ResponseEntity; import
 * org.springframework.web.bind.annotation.*;
 * 
 * import com.api.schoolcontrol.entities.Disciplina; import
 * com.api.schoolcontrol.entities.Disciplina; import
 * com.api.schoolcontrol.repository.DisciplinaRepository;
 * 
 * import java.util.List; import java.util.Optional;
 * 
 * @RestController
 * 
 * @RequestMapping("/api/disciplinas") public class DisciplinaController {
 * private final DisciplinaRepository disciplinaRepository;
 * 
 * @Autowired public DisciplinaController(DisciplinaRepository
 * disciplinaRepository) { this.disciplinaRepository = disciplinaRepository; }
 * 
 * @GetMapping("/lista") public List<Disciplina> listarDisciplinas() { return
 * disciplinaRepository.findAll(); }
 * 
 * @GetMapping("/lista/{id}") public ResponseEntity<Disciplina>
 * obterDisciplinaPorId(@PathVariable Long id) { return
 * disciplinaRepository.findById(id) .map(disciplina ->
 * ResponseEntity.ok().body(disciplina))
 * .orElse(ResponseEntity.notFound().build()); }
 * 
 * @PostMapping("/adicionar") public ResponseEntity<?>
 * adicionarDisciplina(@RequestBody Disciplina disciplina) { // Verificar se já
 * existe um disciplina com a mesma matrícula Optional<Disciplina>
 * existingDisciplina = disciplinaRepository.findByNome(disciplina.getNome());
 * 
 * if (existingDisciplina.isPresent()) { // Um disciplina com a mesma matrícula
 * já existe, retorne um erro ou mensagem adequada return
 * ResponseEntity.badRequest().body("Esse disciplina " + disciplina.getNome() +
 * " já foi cadastrado."); } else { // Não existe um disciplina com a mesma
 * matrícula, então podemos salvar o novo disciplina Disciplina savedDisciplina
 * = disciplinaRepository.save(disciplina); return
 * ResponseEntity.ok(savedDisciplina); } }
 * 
 * @PutMapping("/atualizar/{id}") public ResponseEntity<?>
 * atualizarDisciplina(@PathVariable Long id, @RequestBody Disciplina
 * disciplina) { // Verificar se já existe um disciplina com a mesma matrícula
 * (ou outro atributo único) Optional<Disciplina> existingDisciplinaWithSameNome
 * = disciplinaRepository.findByNome(disciplina.getNome());
 * 
 * if (existingDisciplinaWithSameNome.isPresent() &&
 * !existingDisciplinaWithSameNome.get().getId().equals(id)) { // Um disciplina
 * com a mesma matrícula já existe e não é o mesmo disciplina que estamos
 * atualizando. return ResponseEntity.badRequest().
 * body("Já existe um disciplina com a mesma matrícula."); } else { // Prossiga
 * com a atualização do disciplina, pois a matrícula é única ou não existe
 * conflito. Optional<Disciplina> existingDisciplina =
 * disciplinaRepository.findById(id);
 * 
 * if (existingDisciplina.isPresent()) { // Atualize os dados do disciplina
 * existente com os novos dados Disciplina updatedDisciplina =
 * existingDisciplina.get(); updatedDisciplina.setNome(disciplina.getNome());
 * updatedDisciplina.setNome(disciplina.getNome()); // Atualize outros
 * atributos, se necessário
 * 
 * Disciplina savedDisciplina = disciplinaRepository.save(updatedDisciplina);
 * return ResponseEntity.ok(savedDisciplina); } else { // Se o disciplina com o
 * ID especificado não existe, retorne um erro adequado. return
 * ResponseEntity.notFound().build(); } } }
 * 
 * @DeleteMapping("deletar/{id}") public void deletarDisciplina(@PathVariable
 * Long id) { disciplinaRepository.deleteById(id); } }
 */




