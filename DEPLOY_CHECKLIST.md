# Checklist de Deploy - Backend Railway

## ⚠️ Problema Atual

O frontend não consegue conectar ao backend no Railway. Isso geralmente significa que:
1. O backend não foi deployado com as correções de CORS
2. O backend precisa ser redeployado
3. Variáveis de ambiente não estão configuradas

## ✅ Solução: Redeploy do Backend

### Passo 1: Verificar Código Local

Certifique-se de que o `server.js` tem a configuração de CORS atualizada:

```javascript
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (process.env.NODE_ENV === 'production' || !process.env.FRONTEND_URL) {
      return callback(null, true);
    }
    // ... resto do código
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
```

### Passo 2: Fazer Commit e Push

```bash
git add .
git commit -m "Fix: CORS configuration for production"
git push origin main
```

### Passo 3: Verificar Deploy no Railway

1. Acesse o dashboard do Railway: https://railway.app
2. Vá para o projeto `pdfstation-production`
3. Verifique se o deploy está rodando
4. Veja os logs para confirmar que o servidor iniciou

### Passo 4: Configurar Variáveis de Ambiente no Railway

No dashboard do Railway, vá em **Variables** e configure:

**Obrigatório:**
```
NODE_ENV=production
```

**Opcional (se quiser restringir CORS):**
```
FRONTEND_URL=https://seu-dominio-frontend.com
```

### Passo 5: Verificar Logs

No Railway, vá em **Deployments** → **View Logs** e procure por:

```
🚀 PDFStation Backend Server running on port 3000
🌐 CORS: All origins allowed
```

### Passo 6: Testar Backend

```bash
# Testar health
curl https://pdfstation-production.up.railway.app/health

# Testar CORS (deve retornar headers Access-Control-*)
curl -X OPTIONS \
  -H "Origin: http://localhost:5173" \
  -H "Access-Control-Request-Method: POST" \
  -v https://pdfstation-production.up.railway.app/api/convert
```

## 🔍 Verificações

### Backend está rodando?
```bash
curl https://pdfstation-production.up.railway.app/health
```
**Esperado:** `{"status":"ok",...}`

### CORS está configurado?
```bash
curl -X OPTIONS \
  -H "Origin: http://localhost:5173" \
  -H "Access-Control-Request-Method: POST" \
  -I https://pdfstation-production.up.railway.app/api/convert
```
**Esperado:** Headers `Access-Control-Allow-Origin: *` ou similar

### Backend responde a requisições?
```bash
curl -X POST \
  -F "toolSlug=pdf-to-word" \
  https://pdfstation-production.up.railway.app/api/convert
```
**Esperado:** Erro 400 (falta arquivo) - mas significa que o endpoint está funcionando

## 🐛 Problemas Comuns

### 1. "Failed to fetch" no frontend
- **Causa**: CORS não configurado ou backend não deployado
- **Solução**: Redeploy do backend com código atualizado

### 2. Backend retorna 404
- **Causa**: Rota não existe ou servidor não está rodando
- **Solução**: Verificar logs do Railway

### 3. CORS ainda bloqueando
- **Causa**: `NODE_ENV` não está como `production`
- **Solução**: Configurar variável de ambiente no Railway

## 📝 Próximos Passos

1. ✅ Fazer commit do código atualizado
2. ✅ Push para o repositório
3. ✅ Railway deve fazer deploy automático
4. ✅ Verificar logs do Railway
5. ✅ Testar no frontend

---

**Status**: Aguardando redeploy do backend
**Última atualização**: $(date)

