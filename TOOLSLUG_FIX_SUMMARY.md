# Fix: toolSlug Parameter Reading

## ✅ Problema Resolvido

**Erro**: `{"success":false,"error":"Missing toolSlug","detail":"toolSlug parameter is required"}`

**Causa**: O backend não estava lendo o `toolSlug` corretamente do multipart/form-data.

**Solução**: Implementada leitura de `toolSlug` de múltiplas fontes (body, query, format fallback).

## 📝 Arquivos Modificados

### 1. **api/routes/conversionRoutes.js**

**Mudanças:**
- ✅ Extração de `toolSlug` melhorada para ler de múltiplas fontes:
  - `req.body.toolSlug` ou `req.body.tool_slug`
  - `req.query.toolSlug` ou `req.query.tool_slug`
  - `req.body.format` ou `req.query.format` (fallback)
- ✅ Logs de debug adicionados (temporários)
- ✅ Mensagem de erro mais informativa

**Código anterior:**
```javascript
const toolSlug = req.body.toolSlug;
```

**Código novo:**
```javascript
const toolSlug =
  (req.body && (req.body.toolSlug || req.body.tool_slug)) ||
  (req.query && (req.query.toolSlug || req.query.tool_slug)) ||
  (req.body && req.body.format) ||
  (req.query && req.query.format);
```

## 🔍 Como toolSlug é Parseado Agora

1. **Primeiro**: Tenta `req.body.toolSlug` (campo do form-data)
2. **Segundo**: Tenta `req.body.tool_slug` (alternativa com underscore)
3. **Terceiro**: Tenta `req.query.toolSlug` (query string)
4. **Quarto**: Tenta `req.query.tool_slug` (query string alternativa)
5. **Fallback**: Tenta `req.body.format` ou `req.query.format`

## 🧪 Logs de Debug

Adicionados logs temporários para diagnóstico:
```javascript
console.log('[DEBUG convert] Body keys:', Object.keys(req.body || {}));
console.log('[DEBUG convert] Query:', req.query);
console.log('[DEBUG convert] Final toolSlug:', toolSlug);
```

## 🚀 Comandos para Testar

### 1. Teste com form-data (body)
```bash
curl -X POST "https://pdfstation-production.up.railway.app/api/convert" \
  -F "file=@/Users/celso/Desktop/teste.pdf" \
  -F "toolSlug=pdf-to-word" \
  -o ~/Desktop/output.docx
```

### 2. Teste com query string
```bash
curl -X POST "https://pdfstation-production.up.railway.app/api/convert?toolSlug=pdf-to-word" \
  -F "file=@/Users/celso/Desktop/teste.pdf" \
  -o ~/Desktop/output.docx
```

### 3. Verificar logs no Railway
Após fazer deploy, verifique os logs do Railway para ver:
- `[DEBUG convert] Body keys: [...]`
- `[DEBUG convert] Query: {...}`
- `[DEBUG convert] Final toolSlug: pdf-to-word`

## 📊 Exemplo de Log Esperado

**Sucesso:**
```
[DEBUG convert] Body keys: ['toolSlug', 'fromFormat', 'toFormat']
[DEBUG convert] Query: {}
[DEBUG convert] Final toolSlug: pdf-to-word
Converting pdf → docx using tool: pdf-to-word
```

**Se ainda falhar:**
```
[DEBUG convert] Body keys: []
[DEBUG convert] Query: {}
[DEBUG convert] Final toolSlug: undefined
```
Isso indicaria que o multer não está parseando os campos de texto.

## 🔧 Se Ainda Não Funcionar

Se após o deploy o problema persistir, pode ser necessário:

1. **Verificar configuração do multer** - garantir que está parseando campos de texto
2. **Adicionar `express.urlencoded()`** - se necessário para form-data
3. **Verificar ordem dos middlewares** - multer deve vir antes de outros parsers

## ✅ Checklist

- [x] toolSlug lê de múltiplas fontes
- [x] Logs de debug adicionados
- [x] Mensagem de erro melhorada
- [x] Compatibilidade com query string
- [x] Fallback para `format` mantido
- [ ] Deploy no Railway
- [ ] Teste com curl
- [ ] Verificar logs

---

**Status**: ✅ Fix aplicado
**Próximo passo**: Deploy e teste
**Data**: $(date)

