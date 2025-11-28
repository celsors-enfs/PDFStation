# Backend Docker - LibreOffice PDF → DOCX Conversion

## 📋 Resumo

Este documento descreve a configuração do backend para conversão PDF → DOCX usando LibreOffice dentro de um container Docker, pronto para deploy no Railway.

## 🔧 Dependências Instaladas no Docker

O `Dockerfile` instala os seguintes pacotes:

### LibreOffice Core
- `libreoffice` - Pacote principal do LibreOffice
- `libreoffice-writer` - Módulo Writer necessário para exportação DOCX
- `libreoffice-core` - Componentes core do LibreOffice

### Fontes
- `fonts-dejavu`, `fonts-dejavu-core`, `fonts-dejavu-extra` - Fontes DejaVu para renderização
- `fonts-liberation`, `fonts-liberation2` - Fontes Liberation alternativas

### Dependências do Sistema
- `libxinerama1` - Para modo headless
- `libfontconfig1` - Configuração de fontes
- `libxrender1` - Renderização X11

### Outras Ferramentas
- `imagemagick` - Conversões de imagem
- `ghostscript` - Compressão de PDF
- `qpdf` - Merge de PDFs

## 📁 Estrutura de Diretórios

```
/app/
├── server.js              # Servidor Express
├── api/
│   ├── routes/
│   │   └── conversionRoutes.js
│   └── utils/
│       ├── libreoffice.js  # Função de conversão
│       └── fileUtils.js    # Utilitários de arquivo
└── temp/                   # Diretório temporário (criado automaticamente)
    └── temp_*.pdf          # Arquivos temporários de entrada
    └── temp_*.docx         # Arquivos temporários de saída
```

## 🧪 Teste de Conversão

### Gerar PDF de Teste

```bash
npm run test:generate-pdf
```

Isso cria `test-assets/sample.pdf` - um PDF minimalista válido.

### Executar Teste de Conversão

```bash
npm run test:convert
```

Este script:
1. Lê `test-assets/sample.pdf`
2. Chama `convertWithLibreOffice()` (mesma função usada pela API)
3. Salva o resultado em `test-output/output.docx`
4. Valida que o arquivo foi gerado e não está vazio

### Teste Dentro do Container Docker

#### 1. Build da Imagem

```bash
docker build -t pdfstation-backend-test .
```

#### 2. Executar Teste

```bash
docker run --rm \
  -v $(pwd)/test-assets:/app/test-assets:ro \
  -v $(pwd)/test-output:/app/test-output \
  pdfstation-backend-test \
  npm run test:convert
```

#### 3. Verificar Resultado

```bash
ls -lh test-output/output.docx
file test-output/output.docx  # Deve mostrar "Microsoft Word 2007+"
```

## 📊 Logs de Conversão

O `libreoffice.js` gera logs detalhados:

### Antes da Conversão
```
[LibreOffice] Starting conversion: pdf → docx
[LibreOffice] Input file: /app/temp/temp_1234567890_abc123.pdf (12345 bytes)
[LibreOffice] Output directory: /app/temp
[LibreOffice] Expected output file: /app/temp/temp_1234567890_abc123.docx
[LibreOffice] Running command: soffice --headless --nodefault --nolockcheck --nologo --norestore --convert-to docx --outdir /app/temp /app/temp/temp_1234567890_abc123.pdf
```

### Durante a Conversão
```
[LibreOffice] stderr: <mensagens do LibreOffice>
[LibreOffice] Process exited with code: 0
[LibreOffice] Output file exists after conversion: true
[LibreOffice] Output file size: 15234 bytes
```

### Após Conversão Bem-Sucedida
```
[LibreOffice] ✅ Successfully read output file: /app/temp/temp_1234567890_abc123.docx (15234 bytes)
```

## 🚀 Deploy no Railway

### Pré-requisitos

1. Código commitado no repositório Git
2. Railway conectado ao repositório
3. Variáveis de ambiente configuradas:
   - `NODE_ENV=production` (obrigatório para CORS)
   - `PORT` (definido automaticamente pelo Railway)

### Passos

1. **Commit e Push**
   ```bash
   git add .
   git commit -m "Fix: LibreOffice PDF → DOCX conversion in Docker"
   git push origin main
   ```

2. **Railway Deploy Automático**
   - Railway detecta o push
   - Faz build usando o `Dockerfile`
   - Deploy automático

3. **Verificar Logs**
   - Acesse o dashboard do Railway
   - Vá em **Deployments** → **View Logs**
   - Procure por:
     ```
     🚀 PDFStation Backend Server running on port 3000
     🌐 CORS: All origins allowed
     ```

4. **Testar Endpoint**
   ```bash
   curl -X POST https://pdfstation-production.up.railway.app/api/convert \
     -F "file=@test.pdf" \
     -F "toolSlug=pdf-to-word" \
     --output converted.docx
   ```

## 🐛 Troubleshooting

### Erro: "Converted file not found"

**Causa**: LibreOffice não gerou o arquivo ou gerou em local diferente.

**Solução**:
1. Verificar logs do LibreOffice no Railway
2. Verificar se `soffice` está no PATH: `which soffice`
3. Verificar permissões do diretório `/app/temp`
4. Verificar se `libreoffice-writer` está instalado

### Erro: "Failed to spawn LibreOffice"

**Causa**: Comando `soffice` não encontrado.

**Solução**:
1. Verificar instalação no Dockerfile
2. Adicionar `RUN which soffice` no Dockerfile para debug
3. Verificar se todas as dependências estão instaladas

### Arquivo de Saída Vazio (0 bytes)

**Causa**: LibreOffice executou mas não gerou conteúdo válido.

**Solução**:
1. Verificar stderr do LibreOffice nos logs
2. Verificar se o PDF de entrada é válido
3. Testar com PDF diferente

## 📝 Comandos Úteis

### Verificar Instalação do LibreOffice no Container

```bash
docker run --rm pdfstation-backend-test soffice --version
```

### Listar Arquivos no Diretório Temp

```bash
docker run --rm pdfstation-backend-test ls -la /app/temp
```

### Executar Comando LibreOffice Manualmente

```bash
docker run --rm \
  -v $(pwd)/test-assets:/input:ro \
  -v $(pwd)/test-output:/output \
  pdfstation-backend-test \
  soffice --headless --convert-to docx --outdir /output /input/sample.pdf
```

## ✅ Checklist de Validação

Antes de fazer deploy, verifique:

- [ ] Dockerfile instala `libreoffice-writer`
- [ ] Teste local passa: `npm run test:convert`
- [ ] Teste no container passa: `docker run ... npm run test:convert`
- [ ] Logs mostram caminho correto do arquivo de saída
- [ ] Arquivo DOCX gerado é válido (abre no Word/LibreOffice)
- [ ] Tamanho do arquivo de saída > 0 bytes
- [ ] Código commitado e push feito
- [ ] Railway fez deploy com sucesso
- [ ] Endpoint `/api/convert` retorna DOCX válido

---

**Última atualização**: $(date)
**Status**: ✅ Pronto para produção

