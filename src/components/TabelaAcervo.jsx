import React from 'react';

export default function TabelaAcervo({ livros, modoSimplificado = false }) {
  if (livros.length === 0) {
    return <div className="alert alert-info">Nenhum livro cadastrado.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            {!modoSimplificado && <th>Categoria</th>}
            {!modoSimplificado && <th>Ano</th>}
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <tr key={index}>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              {!modoSimplificado && <td>{livro.categoria}</td>}
              {!modoSimplificado && <td>{livro.ano}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}