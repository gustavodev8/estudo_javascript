import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// ✅ INICIALIZAÇÃO CORRETA do cliente Gemini
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Rota de saúde
app.get("/", (req, res) => {
  res.json({ 
    status: "✅ Servidor funcionando!", 
    message: "API Gemini Chat está online",
    timestamp: new Date().toISOString()
  });
});

// Rota do chat - USANDO A BIBLIOTECA OFICIAL
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // Validação
    if (!message) {
      return res.status(400).json({ 
        error: "❌ Mensagem é obrigatória" 
      });
    }

    if (!GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: "❌ Chave da API Gemini não configurada. Verifique o arquivo .env" 
      });
    }

    console.log("📨 Recebendo mensagem:", message);

    // ✅ CHAMADA CORRETA usando a biblioteca oficial
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // ou "gemini-pro"
      contents: message,
    });

    console.log("✅ Resposta da API recebida com sucesso");

    const reply = response.text;

    if (!reply) {
      console.error("❌ Resposta inválida da IA:", response);
      return res.status(500).json({ 
        error: "Resposta inválida da IA",
        details: response 
      });
    }

    // Retorna sucesso
    return res.json({ 
      success: true, 
      reply,
      timestamp: new Date().toISOString()
    });

  } catch (err) {
    console.error("💥 Erro no servidor:", err);
    return res.status(500).json({ 
      error: "Erro interno do servidor",
      message: err.message 
    });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor Gemini Chat iniciado!`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`⏰ Iniciado em: ${new Date().toLocaleString()}`);
  console.log(`🔑 API Key: ${GEMINI_API_KEY ? '✅ Configurada' : '❌ AUSENTE'}`);
  
  if (!GEMINI_API_KEY) {
    console.log(`\n❌ CONFIGURAÇÃO NECESSÁRIA:`);
    console.log(`1. Acesse: https://aistudio.google.com/app/apikey`);
    console.log(`2. Crie uma nova API Key`);
    console.log(`3. Adicione no arquivo .env: GEMINI_API_KEY=sua_chave_aqui`);
  }
});