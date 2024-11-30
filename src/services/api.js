const API_URL =
  "https://api-bilhete-dot-api-samples-423102.uc.r.appspot.com/api/bilhetes";
const AUTH_TOKEN = "Bearer 12121059"; // Verifique se o token é válido

/**
 * Retorna todos os bilhetes da API.
 * @returns {Promise<Array>} Lista de bilhetes.
 */
export const fetchBilhetes = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    });

    // Verifica se a resposta foi ok
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Erro ao buscar bilhetes: ${errorData.message || "Erro desconhecido"}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na requisição de buscar bilhetes:", error);
    throw error;
  }
};

/**
 * Salva um novo bilhete na API.
 * @param {Object} bilhete Bilhete a ser salvo.
 * @returns {Promise<Object>} Bilhete salvo.
 */
export const createBilhete = async (bilhete) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify(bilhete),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Erro ao salvar bilhete: ${errorData.message || "Erro desconhecido"}`
      );
    }

    return await response.json(); // Retorna o bilhete criado
  } catch (error) {
    console.error("Erro na requisição de criação do bilhete:", error);
    throw error; // Lança o erro para ser tratado pelo componente
  }
};

/**
 * Exclui um bilhete pelo ID.
 * @param {string} id ID do bilhete a ser excluído.
 * @returns {Promise<void>}
 */
export const deleteBilhete = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: AUTH_TOKEN,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Erro ao excluir bilhete: ${errorData.message || "Erro desconhecido"}`
      );
    }
  } catch (error) {
    console.error("Erro na requisição de exclusão do bilhete:", error);
    throw error; // Lança o erro para ser tratado pelo componente
  }
};
