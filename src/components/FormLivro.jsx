import React, { useState } from 'react';

export default function FormLivro({ aoAdicionarLivro }) {
  // useState separado para cada campo (Exigência do exercício)
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [ano, setAno] = useState('');
  
  const [erros, setErros] = useState({});

  const validar = () => {
    const novosErros = {};
    const anoAtual = new Date().getFullYear();

    if (titulo.trim().length < 3) {
      novosErros.titulo = 'O título deve ter no mínimo 3 caracteres.';
    }
    if (autor.trim().length < 3) {
      novosErros.autor = 'O autor deve ter no mínimo 3 caracteres.';
    }
    if (!categoria) {
      novosErros.categoria = 'Escolha uma categoria obrigatória.';
    }
    if (!ano || Number(ano) <= 1900 || Number(ano) > anoAtual) {
      novosErros.ano = `Ano deve ser maior que 1900 e não pode ser maior que ${anoAtual}.`;
    }

    return novosErros;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errosValidacao = validar();

    if (Object.keys(errosValidacao).length > 0) {
      setErros(errosValidacao);
    } else {
      aoAdicionarLivro({ titulo, autor, categoria, ano });
      setTitulo('');
      setAutor('');
      setCategoria('');
      setAno('');
      setErros({});
    }
  };

  return (
    <div className="card p-4 shadow-sm mb-4">
      <h3 className="mb-3">Cadastrar Novo Livro</h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Título</label>
            <input
              type="text"
              className={`form-control ${erros.titulo ? 'is-invalid' : ''}`}
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            {erros.titulo && <div className="invalid-feedback">{erros.titulo}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Autor</label>
            <input
              type="text"
              className={`form-control ${erros.autor ? 'is-invalid' : ''}`}
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
            {erros.autor && <div className="invalid-feedback">{erros.autor}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Categoria</label>
            <select
              className={`form-select ${erros.categoria ? 'is-invalid' : ''}`}
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Selecione...</option>
              <option value="Romance">Romance</option>
              <option value="Técnico">Técnico</option>
              <option value="Infantil">Infantil</option>
              <option value="Biografia">Biografia</option>
            </select>
            {erros.categoria && <div className="invalid-feedback">{erros.categoria}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Ano de Publicação</label>
            <input
              type="number"
              className={`form-control ${erros.ano ? 'is-invalid' : ''}`}
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
            {erros.ano && <div className="invalid-feedback">{erros.ano}</div>}
          </div>
        </div>

        <button type="submit" className="btn btn-success mt-3">
          Cadastrar Livro
        </button>
      </form>
    </div>
  );
}