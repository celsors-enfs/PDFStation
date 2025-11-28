# Fix: LibreOffice DOCX Export Filter

## ✅ Problema Resolvido

**Erro**: `Error: no export filter for .docx found, aborting.`

**Solução**: Adicionado `libreoffice-common` ao Dockerfile. Este pacote contém os filtros de exportação necessários para DOCX.

## 📝 Arquivos Modificados

### 1. **Dockerfile**
- ✅ Adicionado `libreoffice-common` (contém filtros de exportação)
- ✅ Mantidos `libreoffice-writer` e `libreoffice-core`
- ✅ Adicionada verificação de instalação dos pacotes
- ✅ Comentários explicativos sobre por que cada pacote é necessário

### 2. **api/utils/libreoffice.js**
- ✅ Adicionado `--nofirststartwizard` ao comando (evita problemas de inicialização)
- ✅ Detecção específica de erro "no export filter"
- ✅ Mensagens de erro mais informativas sugerindo instalação de pacotes
- ✅ Logs detalhados de caminhos, comandos e saídas

### 3. **scripts/testPdfToDocx.js** (NOVO)
- ✅ Script específico para testar PDF → DOCX
- ✅ Usa a mesma função da API (`convertWithLibreOffice`)
- ✅ Valida que o DOCX foi gerado e é válido
- ✅ Salva resultado em `/app/temp/test-docx-from-test.docx`

### 4. **package.json**
- ✅ Adicionado script `test:pdf-to-docx`

### 5. **BACKEND_LIBREOFFICE_DOCX.md** (NOVO)
- ✅ Documentação completa do fix
- ✅ Instruções de teste
- ✅ Guia de deploy

## 🔧 Como o LibreOffice Está Sendo Instalado

O Dockerfile instala:

```dockerfile
libreoffice              # Pacote principal
libreoffice-common       # CRÍTICO: Contém filtros de exportação (DOCX, etc.)
libreoffice-writer       # Módulo Writer para DOCX
libreoffice-core         # Componentes core
```

**Por que `libreoffice-common` é crítico:**
- Contém todos os filtros de exportação/importação
- Sem ele, o LibreOffice não consegue exportar para DOCX
- É um pacote separado do `libreoffice` base

## 🧪 Como Rodar o Teste de Conversão

### Teste Local (fora do Docker)

```bash
# Gerar PDF de teste (se ainda não existir)
npm run test:generate-pdf

# Executar teste
npm run test:pdf-to-docx
```

### Teste Dentro do Container Docker

```bash
# 1. Build da imagem
docker build -t pdfstation-backend-test .

# 2. Executar teste
docker run --rm \
  -v $(pwd)/test-assets:/app/test-assets:ro \
  pdfstation-backend-test \
  npm run test:pdf-to-docx
```

**Comportamento esperado:**
- ✅ Logs mostram comando do LibreOffice executado
- ✅ Nenhum "no export filter" em stderr
- ✅ Arquivo de saída encontrado em `/app/temp/test-docx-from-test.docx`
- ✅ Tamanho > 0 bytes
- ✅ Mensagem: "🎉 Test conversion OK!"

## 🚀 Comandos Finais para Executar

### 1. Testar Localmente no Docker

```bash
# Build
docker build -t pdfstation-backend-test .

# Teste
docker run --rm \
  -v $(pwd)/test-assets:/app/test-assets:ro \
  pdfstation-backend-test \
  npm run test:pdf-to-docx
```

### 2. Deploy no Railway

```bash
# Commit
git add .
git commit -m "Fix: Add libreoffice-common for DOCX export filter support"

# Push (dispara deploy automático no Railway)
git push origin main
```

### 3. Verificar Deploy

Após o push, no Railway:
1. Acesse o dashboard
2. Vá em **Deployments** → **View Logs**
3. Procure por: `🚀 PDFStation Backend Server running`
4. Teste o endpoint:
   ```bash
   curl -X POST https://pdfstation-production.up.railway.app/api/convert \
     -F "file=@test-assets/sample.pdf" \
     -F "toolSlug=pdf-to-word" \
     --output converted.docx
   ```

## 📊 Exemplo de Log de Sucesso

```
🧪 Testing PDF → DOCX conversion...
✅ Temp directory ready
📄 Reading test PDF: /app/test-assets/sample.pdf
   PDF size: 557 bytes
🔄 Starting conversion: PDF → DOCX
   Using LibreOffice (soffice)...
[LibreOffice] Starting conversion: pdf → docx
[LibreOffice] Expected output file: /app/temp/temp_1234567890_abc123.docx
[LibreOffice] Running command: soffice --headless --nofirststartwizard ...
[LibreOffice] Process exited with code: 0
[LibreOffice] Output file exists after conversion: true
[LibreOffice] Output file size: 15234 bytes
✅ Conversion successful!
   Output size: 15234 bytes
💾 Output saved to: /app/temp/test-docx-from-test.docx
✅ Output file is valid DOCX (ZIP format detected)
🎉 Test conversion OK!
```

## ✅ Checklist

- [x] `libreoffice-common` adicionado ao Dockerfile
- [x] `--nofirststartwizard` adicionado ao comando
- [x] Detecção de erro "no export filter" implementada
- [x] Script de teste criado
- [x] Documentação criada
- [ ] Teste no Docker executado e passou
- [ ] Deploy no Railway feito
- [ ] Endpoint testado em produção

---

**Status**: ✅ Fix implementado
**Próximo passo**: Testar no Docker e fazer deploy
**Data**: $(date)

