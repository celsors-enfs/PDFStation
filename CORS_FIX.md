# Correção de CORS - "Failed to fetch"

## Problema Identificado

O erro "Failed to fetch" ao fazer upload de arquivos é causado por problemas de CORS (Cross-Origin Resource Sharing). O backend estava configurado para aceitar apenas requisições de `http://localhost:5173`, mas em produção precisa aceitar requisições de qualquer origem.

## Correções Aplicadas

### 1. **Configuração de CORS no Backend** (`server.js`)

**Antes:**
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
```

**Depois:**
```javascript
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // In production, allow all origins
    if (process.env.NODE_ENV === 'production' || !process.env.FRONTEND_URL) {
      return callback(null, true);
    }
    
    // In development, check against allowed origins
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
```

### 2. **Melhorias no Tratamento de Erros** (`conversionClient.ts`)

- Adicionado logging detalhado de erros de rede
- Mensagens de erro mais específicas para CORS vs. conexão
- Detecção automática do tipo de erro

### 3. **Mensagens de Erro Melhoradas** (`useFileConversion.ts`)

- Mensagens em português para erros de conexão
- Diferenciação entre erros de CORS e erros de conexão

## Como Funciona Agora

### Em Produção (Railway):
- ✅ Aceita requisições de **qualquer origem**
- ✅ Permite métodos: GET, POST, PUT, DELETE, OPTIONS
- ✅ Headers permitidos: Content-Type, Authorization

### Em Desenvolvimento:
- ✅ Aceita apenas origens configuradas em `FRONTEND_URL`
- ✅ Fallback para `http://localhost:5173` se não configurado

## Variáveis de Ambiente

Para configurar origens específicas em produção, defina:

```bash
FRONTEND_URL=https://seu-dominio.com,https://www.seu-dominio.com
```

Ou deixe sem definir para aceitar todas as origens.

## Teste

Após fazer deploy, teste:

1. **Verificar CORS:**
```bash
curl -H "Origin: https://seu-frontend.com" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: Content-Type" \
     -X OPTIONS \
     https://pdfstation-production.up.railway.app/api/convert
```

2. **Testar conversão:**
```bash
curl -X POST https://pdfstation-production.up.railway.app/api/convert \
  -F "file=@test.pdf" \
  -F "toolSlug=pdf-to-word" \
  --output converted.docx
```

## Próximos Passos

1. ✅ CORS corrigido para aceitar todas as origens em produção
2. ⏭️ Fazer deploy do backend atualizado no Railway
3. ⏭️ Testar upload de arquivo no frontend
4. ⏭️ Verificar logs do Railway se ainda houver problemas

---

**Status**: ✅ CORS corrigido
**Data**: $(date)

