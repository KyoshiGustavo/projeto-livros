import React from 'react';

export default function NavBar({ abaAtiva, setAbaAtiva }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <span className="navbar-brand">Biblioteca Digital</span>
        <div className="navbar-nav">
          <button
            className={`nav-link btn btn-link ${abaAtiva === 'cadastro' ? 'active fw-bold' : ''}`}
            onClick={() => setAbaAtiva('cadastro')}
          >
            Cadastro
          </button>
          <button
            className={`nav-link btn btn-link ${abaAtiva === 'acervo' ? 'active fw-bold' : ''}`}
            onClick={() => setAbaAtiva('acervo')}
          >
            Acervo
          </button>
        </div>
      </div>
    </nav>
  );
}