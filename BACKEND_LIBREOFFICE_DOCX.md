# Backend LibreOffice DOCX Export - Fix

## 🔧 Problema Resolvido

**Erro original**: `Error: no export filter for .docx found, aborting.`

**Causa**: O pacote `libreoffice-common` não estava instalado. Este pacote contém os filtros de exportação necessários para converter arquivos para DOCX.

## 📦 Pacotes Instalados no Docker

O `Dockerfile` agora instala explicitamente:

### LibreOffice (para PDF → DOCX)
- `libreoffice` - Pacote principal
- `libreoffice-common` - **CRÍTICO**: Contém os filtros de exportação (incluindo DOCX)
- `libreoffice-writer` - Módulo Writer necessário para DOCX
- `libreoffice-core` - Componentes core

### Fontes
- `fonts-dejavu*` - Fontes DejaVu
- `fonts-liberation*` - Fontes Liberation

### Dependências do Sistema
- `libxinerama1`, `libfontconfig1`, `libxrender1` - Para modo headless

### Outras Ferramentas (mantidas)
- `imagemagick` - Conversões de imagem
- `ghostscript` - Compressão de PDF
- `qpdf` - Merge de PDFs

## 🧪 Teste de Conversão

### Gerar PDF de Teste

```bash
npm run test:generate-pdf
```

Cria `test-assets/sample.pdf` (557 bytes).

### Executar Teste PDF → DOCX

```bash
npm run test:pdf-to-docx
```

Este script:
1. Lê `test-assets/sample.pdf`
2. Chama `convertWithLibreOffice()` (mesma função da API)
3. Verifica que o DOCX foi gerado
4. Salva em `/app/temp/test-docx-from-test.docx`
5. Valida formato (deve ser ZIP/DOCX válido)

## 🐳 Teste no Docker

### Build da Imagem

```bash
docker build -t pdfstation-backend-test .
```

### Executar Teste

```bash
docker run --rm \
  -v $(pwd)/test-assets:/app/test-assets:ro \
  pdfstation-backend-test \
  npm run test:pdf-to-docx
```

### Comportamento Esperado

**Sucesso:**
```
🧪 Testing PDF → DOCX conversion...
✅ Temp directory ready
📄 Reading test PDF: /app/test-assets/sample.pdf
   PDF size: 557 bytes
🔄 Starting conversion: PDF → DOCX
   Using LibreOffice (soffice)...
[LibreOffice] Starting conversion: pdf → docx
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

**Falha (se filtro não estiver instalado):**
```
❌ Test failed!
Error: LibreOffice DOCX export filter not found. Make sure 'libreoffice-common' and 'libreoffice-writer' are installed.
```

## 🔍 Melhorias no Comando LibreOffice

Adicionado `--nofirststartwizard` para evitar problemas de inicialização:

```bash
soffice --headless \
  --nofirststartwizard \
  --nodefault \
  --nolockcheck \
  --nologo \
  --norestore \
  --convert-to docx \
  --outdir /app/temp \
  /app/temp/arquivo.pdf
```

## 📊 Logs Melhorados

O `libreoffice.js` agora:

1. **Antes da execução:**
   - Loga caminho do input
   - Loga caminho esperado do output
   - Loga comando completo
   - Verifica se input existe

2. **Durante a execução:**
   - Loga stderr em tempo real
   - Loga exit code

3. **Após a execução:**
   - Verifica existência do arquivo
   - Verifica tamanho do arquivo
   - Detecta erros específicos de filtro
   - Lista arquivos no diretório se houver erro

4. **Mensagens de erro específicas:**
   - Detecta "no export filter" e sugere instalação de pacotes
   - Fornece contexto completo (stderr, caminhos, etc.)

## 🚀 Deploy no Railway

### Passos

1. **Commit e Push**
   ```bash
   git add .
   git commit -m "Fix: Add libreoffice-common for DOCX export filter"
   git push origin main
   ```

2. **Railway Deploy Automático**
   - Railway detecta o push
   - Faz build usando o `Dockerfile` atualizado
   - Deploy automático

3. **Verificar Logs**
   - Acesse Railway dashboard
   - Vá em **Deployments** → **View Logs**
   - Procure por:
     ```
     🚀 PDFStation Backend Server running on port 3000
     ```

4. **Testar Endpoint**
   ```bash
   curl -X POST https://pdfstation-production.up.railway.app/api/convert \
     -F "file=@test-assets/sample.pdf" \
     -F "toolSlug=pdf-to-word" \
     --output converted.docx
   
   # Verificar que é um DOCX válido
   file converted.docx
   ```

## ✅ Checklist de Validação

Antes de fazer deploy, verifique:

- [ ] `libreoffice-common` está no Dockerfile
- [ ] `libreoffice-writer` está no Dockerfile
- [ ] Teste local passa: `npm run test:pdf-to-docx`
- [ ] Teste no Docker passa: `docker run ... npm run test:pdf-to-docx`
- [ ] Logs não mostram "no export filter"
- [ ] Arquivo DOCX gerado é válido (abre no Word/LibreOffice)
- [ ] Tamanho do arquivo > 0 bytes
- [ ] Código commitado e push feito

## 🐛 Troubleshooting

### Erro: "no export filter for .docx found"

**Causa**: `libreoffice-common` não instalado.

**Solução**: 
1. Verificar Dockerfile contém `libreoffice-common`
2. Rebuild da imagem: `docker build -t pdfstation-backend-test .`
3. Verificar instalação: `docker run --rm pdfstation-backend-test dpkg -l | grep libreoffice-common`

### Erro: "LibreOffice exited with code 0 but output file not found"

**Causa**: Filtro não disponível ou problema de permissões.

**Solução**:
1. Verificar `libreoffice-common` e `libreoffice-writer` instalados
2. Verificar permissões de `/app/temp` (deve ser 777)
3. Verificar logs do stderr do LibreOffice

### Arquivo DOCX Vazio (0 bytes)

**Causa**: Conversão falhou silenciosamente.

**Solução**:
1. Verificar stderr do LibreOffice nos logs
2. Verificar se PDF de entrada é válido
3. Testar com PDF diferente

---

**Status**: ✅ Fix aplicado
**Pronto para**: Deploy no Railway
**Última atualização**: $(date)

