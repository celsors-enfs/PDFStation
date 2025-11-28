# Debug Guide - Página não está abrindo

## Verificações Realizadas

✅ Servidor de desenvolvimento funcionando (http://localhost:5173)
✅ HTML sendo servido corretamente
✅ Imports corretos
✅ Hook useFileConversion exportado corretamente
✅ Erros de TypeScript principais corrigidos

## Próximos Passos para Diagnóstico

### 1. Verificar Console do Navegador

Abra o console do navegador (F12 → Console) e verifique:
- Há erros em vermelho?
- Qual é a mensagem de erro exata?

### 2. Verificar Network Tab

No DevTools (F12 → Network):
- A página HTML carrega? (status 200)
- Os arquivos JavaScript carregam? (index.js, etc.)
- Há requisições falhando?

### 3. Testar Servidor

```bash
# Inicie o servidor
npm run dev

# Em outro terminal, teste se responde
curl http://localhost:5173
```

### 4. Limpar Cache

```bash
# Limpe o cache do navegador
# Chrome/Edge: Ctrl+Shift+Delete (Windows) ou Cmd+Shift+Delete (Mac)
# Ou use modo anônimo
```

### 5. Verificar Erros de Build

```bash
# Tente fazer build para ver erros
npm run build
```

## Possíveis Problemas

1. **Erro de JavaScript em runtime**:**
   - Verifique console do navegador
   - Pode ser um erro no hook useFileConversion

2. **Problema com tool undefined:**
   - HomePage usa UploadBox sem tool
   - Já corrigido para aceitar tool undefined

3. **Problema de importação:**
   - Verifique se todos os módulos estão sendo encontrados

## Comandos Úteis

```bash
# Verificar se servidor está rodando
lsof -ti:5173

# Matar processo na porta 5173
kill -9 $(lsof -ti:5173)

# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Iniciar servidor limpo
npm run dev
```

