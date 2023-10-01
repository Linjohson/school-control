package com.api.schoolcontrol.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.schoolcontrol.entities.Administrador;
import com.api.schoolcontrol.repository.AdministradorRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/administrador")
public class AdministradorController {

    @Autowired
    private AdministradorRepository administradorRepository;

    @GetMapping("/listaUsuarios")
    public List<Administrador> listarUsuarios() {
        return administradorRepository.findAll();
    }

    @GetMapping("/listaUsuarios/{id}")
    public Administrador buscarUsuarioPorId(@PathVariable Long id) {
        return administradorRepository.findById(id).orElse(null);
    }

	/*
	 * @PostMapping("/adicionar") public Usuario adicionarUsuario(@RequestBody Usuario
	 * aluno) { return alunoRepository.save(aluno); }
	 */
    @PostMapping("/adicionarUsuario")
    public ResponseEntity<?> adicionarUsuario(@RequestBody Administrador administrador) {
        // Verificar se já existe um aluno com a mesma matrícula
        Optional<Administrador> existingUsuario = administradorRepository.findByMatricula(administrador.getMatricula());

        if (existingUsuario.isPresent()) {
            // Um aluno com a mesma matrícula já existe, retorne um erro ou mensagem adequada
            return ResponseEntity.badRequest().body("Já existe um aluno com a mesma matrícula.");
        } else {
            // Não existe um aluno com a mesma matrícula, então podemos salvar o novo aluno
        	Administrador savedUsuario = administradorRepository.save(administrador);
            return ResponseEntity.ok(savedUsuario);
        }
    }


    @PutMapping("/atualizarUsuario/{id}")
    public ResponseEntity<?> atualizarUsuario(@PathVariable Long id, @RequestBody Administrador administrador) {
        // Verificar se já existe um aluno com a mesma matrícula (ou outro atributo único)
        Optional<Administrador> existingUsuarioWithSameMatricula = administradorRepository.findByMatricula(administrador.getMatricula());

        if (existingUsuarioWithSameMatricula.isPresent() && !existingUsuarioWithSameMatricula.get().getId().equals(id)) {
            // Um aluno com a mesma matrícula já existe e não é o mesmo aluno que estamos atualizando.
            return ResponseEntity.badRequest().body("Já existe um aluno com a mesma matrícula.");
        } else {
            // Prossiga com a atualização do aluno, pois a matrícula é única ou não existe conflito.
            Optional<Administrador> existingUsuario = administradorRepository.findById(id);
            
            if (existingUsuario.isPresent()) {
                // Atualize os dados do aluno existente com os novos dados
                Administrador updatedUsuario = existingUsuario.get();
                updatedUsuario.setNome(administrador.getNome());
                updatedUsuario.setMatricula(administrador.getMatricula());
                // Atualize outros atributos, se necessário
                
                Administrador savedUsuario = administradorRepository.save(updatedUsuario);
                return ResponseEntity.ok(savedUsuario);
            } else {
                // Se o aluno com o ID especificado não existe, retorne um erro adequado.
                return ResponseEntity.notFound().build();
            }
        }
    }

    @DeleteMapping("/deletarUsuario/{id}")
    public void excluirUsuario(@PathVariable Long id) {
        administradorRepository.deleteById(id);
    }
}
