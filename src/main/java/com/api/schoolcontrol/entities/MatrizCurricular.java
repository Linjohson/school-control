
 package com.api.schoolcontrol.entities;
  
 import java.util.List;
  
 import jakarta.persistence.Entity; import jakarta.persistence.GeneratedValue;
 import jakarta.persistence.GenerationType; import jakarta.persistence.Id;
 import jakarta.persistence.OneToMany;
 
 @Entity public class MatrizCurricular {
 
 @Id
 
 @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id; private
 String nome;
 
	/*
	 * @OneToMany(mappedBy = "matrizCurricular") private List<Disciplina>
	 * disciplinas;
	 */
 
 public Long getId() { return id; }
 
 public void setId(Long id) { this.id = id; }
 
 public String getNome() { return nome; }
 
 public void setNome(String nome) { this.nome = nome; }
 
	/*
	 * public List<Disciplina> getDisciplinas() { return disciplinas; }
	 * 
	 * public void setDisciplinas(List<Disciplina> disciplinas) { this.disciplinas =
	 * disciplinas; }
	 */
 
 // Outros campos e métodos getters e setters
 
 }
 
 