import React, { useState } from 'react';
import NavBar from './components/NavBar';
import FormLivro from './components/FormLivro';
import TabelaAcervo from './components/TabelaAcervo';

export default function App() {
  const [livros, setLivros] = useState([]);
  const [abaAtiva, setAbaAtiva] = useState('cadastro');

  const adicionarLivro = (novoLivro) => {
    setLivros([...livros, novoLivro]);
  };

  return (
    <div>
      <NavBar abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />
      
      <div className="container my-4">
        {abaAtiva === 'cadastro' && (
          <div>
            <FormLivro aoAdicionarLivro={adicionarLivro} />
            <h4 className="mt-4 mb-3">Últimos Cadastrados</h4>
            <TabelaAcervo livros={livros} modoSimplificado={true} />
          </div>
        )}

        {abaAtiva === 'acervo' && (
          <div>
            <h3 className="mb-3">Acervo Completo de Livros</h3>
            <TabelaAcervo livros={livros} modoSimplificado={false} />
          </div>
        )}
      </div>
    </div>
  );
}