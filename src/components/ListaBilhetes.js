import React from "react";
import "../styles/ListaBilhetes.css";

const ListaBilhetes = ({ bilhetes, onExcluir }) => {
  return (
    <div>
      <h2>Lista de Bilhetes</h2>
      {bilhetes.length === 0 ? (
        <p>Nenhum bilhete cadastrado.</p>
      ) : (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Número</th>
              <th>Assento</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {bilhetes.map((bilhete) => (
              <tr key={bilhete.id}>
                <td>{bilhete.numero}</td>
                <td>{bilhete.assento}</td>
                <td>{bilhete.tipo}</td>
                <td>R$ {bilhete.valor.toFixed(2)}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                    onClick={() => onExcluir(bilhete.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaBilhetes;
