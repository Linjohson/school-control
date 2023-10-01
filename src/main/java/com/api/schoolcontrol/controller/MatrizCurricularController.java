/*
 * package com.api.schoolcontrol.controller;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.web.bind.annotation.*;
 * 
 * import com.api.schoolcontrol.entities.MatrizCurricular; import
 * com.api.schoolcontrol.repository.MatrizCurricularRepository;
 * 
 * import java.util.List;
 * 
 * @RestController
 * 
 * @RequestMapping("/api/matriz-curricular") public class
 * MatrizCurricularController {
 * 
 * @Autowired private MatrizCurricularRepository matrizCurricularRepository;
 * 
 * @GetMapping("/listarMatriz") public List<MatrizCurricular>
 * getAllMatrizCurricular() { return matrizCurricularRepository.findAll(); }
 * 
 * @GetMapping("/listarMatriz/{id}") public MatrizCurricular
 * getMatrizCurricularById(@PathVariable Long id) { return
 * matrizCurricularRepository.findById(id).orElse(null); }
 * 
 * @PostMapping("/adicionarMatriz") public MatrizCurricular
 * createMatrizCurricular(@RequestBody MatrizCurricular matrizCurricular) {
 * return matrizCurricularRepository.save(matrizCurricular); }
 * 
 * @PutMapping("/atualizarMatriz/{id}") public MatrizCurricular
 * updateMatrizCurricular(@PathVariable Long id, @RequestBody MatrizCurricular
 * matrizCurricular) { MatrizCurricular existingMatrizCurricular =
 * matrizCurricularRepository.findById(id).orElse(null); if
 * (existingMatrizCurricular != null) {
 * existingMatrizCurricular.setNome(matrizCurricular.getNome()); // Atualize
 * outros campos conforme necessário return
 * matrizCurricularRepository.save(existingMatrizCurricular); } else { return
 * null; // Trate o cenário em que a matriz curricular não foi encontrada } }
 * 
 * @DeleteMapping("/deletarMatriz/{id}") public void
 * deleteMatrizCurricular(@PathVariable Long id) {
 * matrizCurricularRepository.deleteById(id); } }
 * 
 */