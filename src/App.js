import React, { useEffect, useState } from "react";
import FormBilhetes from "./components/FormBilhetes";
import ListaBilhetes from "./components/ListaBilhetes";
import { fetchBilhetes, createBilhete, deleteBilhete } from "./services/api";
import "./styles/App.css"; // Importando o CSS

const App = () => {
  const [bilhetes, setBilhetes] = useState([]); // Estado para a lista de bilhetes
  const [errorMessage, setErrorMessage] = useState(""); // Estado para a mensagem de erro

  // Carregar bilhetes da API ao montar o componente
  useEffect(() => {
    const loadBilhetes = async () => {
      try {
        const response = await fetchBilhetes();
        setBilhetes(response);
      } catch (error) {
        setErrorMessage("Erro ao carregar os bilhetes.");
      }
    };

    loadBilhetes();
  }, []);

  // Função para adicionar um novo bilhete
  const handleSalvar = async (novoBilhete) => {
    try {
      const bilheteCriado = await createBilhete(novoBilhete);
      setBilhetes((prevBilhetes) => [...prevBilhetes, bilheteCriado]);
      setErrorMessage(""); // Limpar a mensagem de erro se a operação for bem-sucedida
    } catch (error) {
      console.error("Erro ao salvar bilhete:", error);
      setErrorMessage("Erro ao salvar bilhete. Tente novamente.");
    }
  };

  // Função para excluir um bilhete
  const handleExcluir = async (id) => {
    try {
      await deleteBilhete(id);
      setBilhetes((prevBilhetes) =>
        prevBilhetes.filter((bilhete) => bilhete.id !== id)
      );
    } catch (error) {
      console.error("Erro ao excluir bilhete:", error);
      setErrorMessage("Erro ao excluir bilhete. Tente novamente.");
    }
  };

  return (
    <div>
      <h1>Gestão de Bilhetes</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <FormBilhetes onSalvar={handleSalvar} />
      <ListaBilhetes bilhetes={bilhetes} onExcluir={handleExcluir} />
    </div>
  );
};

export default App;
