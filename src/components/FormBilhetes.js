import React, { useState } from "react";
import "../styles/FormBilhetes.css"; // Importando o CSS

const FormBilhetes = ({ onSalvar }) => {
  const [numero, setNumero] = useState("");
  const [assento, setAssento] = useState("");
  const [dataPartida, setDataPartida] = useState("");
  const [dataChegada, setDataChegada] = useState("");
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validando numero (deve ser inteiro)
    if (!Number.isInteger(Number(numero))) {
      setErrorMessage("O número deve ser um número inteiro.");
      return;
    }

    // Validando tipo (deve ser um dos valores válidos)
    const tiposValidos = ["Leito", "Executivo", "Semi Leito"];
    if (!tiposValidos.includes(tipo)) {
      setErrorMessage(
        "O tipo deve ser um dos seguintes valores: 'Leito', 'Executivo', 'Semi Leito'."
      );
      return;
    }

    const novoBilhete = {
      numero: Number(numero), // Garantindo que o número seja tratado como inteiro
      assento,
      dataPartida,
      dataChegada,
      tipo,
      valor: parseFloat(valor), // Garantindo que o valor seja um número
    };

    // Chama a função de salvar bilhete com validação bem-sucedida
    onSalvar(novoBilhete);

    // Limpar os campos após o envio
    setNumero("");
    setAssento("");
    setDataPartida("");
    setDataChegada("");
    setTipo("");
    setValor("");
    setErrorMessage(""); // Limpar a mensagem de erro após envio bem-sucedido
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Assento"
        value={assento}
        onChange={(e) => setAssento(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        placeholder="Data de Partida"
        value={dataPartida}
        onChange={(e) => setDataPartida(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        placeholder="Data de Chegada"
        value={dataChegada}
        onChange={(e) => setDataChegada(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tipo (Leito, Executivo, Semi Leito)"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
};

export default FormBilhetes;
