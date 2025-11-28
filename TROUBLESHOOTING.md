# Troubleshooting - Erro "Backend não está rodando"

## Problema

O frontend mostra o erro: "Falha na conexão: Não foi possível conectar ao servidor. Verifique se o backend está rodando."

## Soluções

### 1. **Verificar se está rodando localmente ou em produção**

#### Se estiver rodando o frontend LOCALMENTE (npm run dev):

**Opção A: Usar backend local**
1. Inicie o backend local:
   ```bash
   npm run start
   # ou
   node server.js
   ```

2. Crie um arquivo `.env` na raiz do projeto:
   ```bash
   VITE_API_BASE_URL=http://localhost:3000
   ```

3. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

**Opção B: Usar backend do Railway (produção)**
1. Não precisa criar `.env` - o código já usa a URL de produção por padrão
2. Certifique-se de que o backend está deployado no Railway
3. Verifique se a URL está correta: `https://pdfstation-production.up.railway.app`

#### Se estiver rodando em PRODUÇÃO:

1. Verifique se o backend está deployado no Railway
2. Verifique se a variável de ambiente `NODE_ENV=production` está configurada
3. Teste o endpoint de health:
   ```bash
   curl https://pdfstation-production.up.railway.app/health
   ```

### 2. **Verificar Console do Navegador**

Abra o DevTools (F12) e verifique:
- **Console tab**: Procure por erros de rede ou CORS
- **Network tab**: Veja se a requisição está sendo feita e qual é a resposta

### 3. **Testar Backend Manualmente**

```bash
# Testar health endpoint
curl https://pdfstation-production.up.railway.app/health

# Testar conversão (substitua test.pdf por um arquivo real)
curl -X POST https://pdfstation-production.up.railway.app/api/convert \
  -F "file=@test.pdf" \
  -F "toolSlug=pdf-to-word" \
  --output converted.docx
```

### 4. **Verificar CORS**

Se o erro for de CORS:
- O backend já está configurado para aceitar todas as origens em produção
- Verifique se `NODE_ENV=production` está configurado no Railway
- Ou defina `FRONTEND_URL` com o domínio do seu frontend

### 5. **Verificar Logs do Railway**

1. Acesse o dashboard do Railway
2. Vá para o serviço do backend
3. Verifique os logs para erros

### 6. **Configuração de Ambiente**

#### Para Desenvolvimento Local:

Crie `.env` na raiz:
```env
VITE_API_BASE_URL=http://localhost:3000
```

#### Para Produção:

No Railway, configure:
- `NODE_ENV=production`
- `FRONTEND_URL=https://seu-dominio.com` (opcional)

## Debug

O código agora inclui logs detalhados. Abra o console do navegador e procure por:
- `[API Config] Using API_BASE_URL:` - mostra qual URL está sendo usada
- `[ConversionClient] Sending request to:` - mostra a URL completa da requisição
- `[ConversionClient] Network error:` - mostra detalhes do erro

## Checklist

- [ ] Backend está rodando (local ou Railway)
- [ ] URL da API está correta
- [ ] CORS está configurado corretamente
- [ ] Variáveis de ambiente estão configuradas
- [ ] Console do navegador não mostra outros erros
- [ ] Teste manual do backend funciona

## Ainda com problemas?

1. Verifique os logs do console do navegador
2. Verifique os logs do backend (Railway ou terminal local)
3. Teste o backend manualmente com curl
4. Verifique se há firewall ou proxy bloqueando a conexão

