# Implementação - Backend Docker LibreOffice PDF → DOCX

## ✅ Arquivos Modificados

### 1. **Dockerfile**
- ✅ Adicionado `libreoffice-writer` (necessário para exportação DOCX)
- ✅ Adicionado `libreoffice-core` (componentes core)
- ✅ Adicionadas fontes: `fonts-dejavu`, `fonts-liberation`
- ✅ Adicionadas dependências do sistema: `libxinerama1`, `libfontconfig1`, `libxrender1`
- ✅ Adicionada verificação de instalação do `soffice`
- ✅ Comentários explicativos sobre `/app/temp`

### 2. **api/utils/libreoffice.js**
- ✅ Logging detalhado antes da execução (caminhos, comando completo)
- ✅ Logging em tempo real de stdout/stderr
- ✅ Verificação de existência do arquivo após execução
- ✅ Verificação de tamanho do arquivo (não pode ser 0 bytes)
- ✅ Listagem de arquivos no diretório em caso de erro
- ✅ Mensagens de erro mais informativas com stderr
- ✅ Configuração explícita de `cwd` no spawn

### 3. **package.json**
- ✅ Adicionado script `test:generate-pdf` - gera PDF de teste
- ✅ Adicionado script `test:convert` - testa conversão PDF → DOCX

### 4. **scripts/generateTestPdf.js** (NOVO)
- ✅ Gera PDF minimalista válido para testes
- ✅ Salva em `test-assets/sample.pdf`

### 5. **scripts/testConversion.js** (NOVO)
- ✅ Testa conversão usando a mesma função da API
- ✅ Valida que o arquivo foi gerado
- ✅ Salva resultado em `test-output/output.docx`
- ✅ Verifica que o DOCX é válido (formato ZIP)

### 6. **BACKEND_DOCKER_LIBREOFFICE.md** (NOVO)
- ✅ Documentação completa
- ✅ Instruções de teste
- ✅ Guia de deploy no Railway
- ✅ Troubleshooting

## 🔧 O Que Foi Instalado no Docker

### Pacotes Principais
- `libreoffice` - Pacote base
- `libreoffice-writer` - **CRÍTICO** para PDF → DOCX
- `libreoffice-core` - Componentes essenciais

### Fontes (para renderização correta)
- `fonts-dejavu*` - Fontes DejaVu
- `fonts-liberation*` - Fontes Liberation

### Dependências do Sistema
- `libxinerama1` - Suporte X11 headless
- `libfontconfig1` - Configuração de fontes
- `libxrender1` - Renderização

## 🧪 Como o Teste de Conversão Funciona

1. **Gera PDF de teste** (`npm run test:generate-pdf`)
   - Cria `test-assets/sample.pdf` (557 bytes)
   - PDF minimalista mas válido

2. **Executa conversão** (`npm run test:convert`)
   - Lê o PDF de teste
   - Chama `convertWithLibreOffice()` (mesma função da API)
   - Aguarda execução do `soffice`
   - Valida que o arquivo foi gerado
   - Salva em `test-output/output.docx`

3. **Validação**
   - Verifica tamanho > 0 bytes
   - Verifica formato ZIP (DOCX é ZIP)
   - Loga estatísticas (tamanho, tempo)

## 📊 Exemplo de Log de Conversão Bem-Sucedida

```
🧪 Starting PDF → DOCX conversion test...

✅ Temp directory ready

📄 Reading test PDF: /app/test-assets/sample.pdf
   PDF size: 557 bytes

🔄 Starting conversion: PDF → DOCX
   Using LibreOffice (soffice)...

[LibreOffice] Starting conversion: pdf → docx
[LibreOffice] Input file: /app/temp/temp_1234567890_abc123.pdf (557 bytes)
[LibreOffice] Output directory: /app/temp
[LibreOffice] Expected output file: /app/temp/temp_1234567890_abc123.docx
[LibreOffice] Running command: soffice --headless --nodefault --nolockcheck --nologo --norestore --convert-to docx --outdir /app/temp /app/temp/temp_1234567890_abc123.pdf
[LibreOffice] Working directory: /app/temp
[LibreOffice] Input file exists: true
[LibreOffice] stderr: <mensagens do LibreOffice>
[LibreOffice] Process exited with code: 0
[LibreOffice] Output file exists after conversion: true
[LibreOffice] Output file size: 15234 bytes
[LibreOffice] Output file found: /app/temp/temp_1234567890_abc123.docx (15234 bytes)
[LibreOffice] ✅ Successfully read output file: /app/temp/temp_1234567890_abc123.docx (15234 bytes)

✅ Conversion successful!
   Output size: 15234 bytes
   Duration: 2.45s

💾 Output saved to: /app/test-output/output.docx
✅ Output file is valid DOCX (ZIP format detected)

🎉 Test completed successfully!

📋 Summary:
   Input:  /app/test-assets/sample.pdf (557 bytes)
   Output: /app/test-output/output.docx (15234 bytes)
   Time:   2.45s
```

## 🚀 Comandos para Executar

### 1. Testar Localmente (fora do Docker)

```bash
# Gerar PDF de teste
npm run test:generate-pdf

# Executar teste (requer LibreOffice instalado localmente)
npm run test:convert
```

### 2. Testar Dentro do Container Docker

```bash
# Build da imagem
docker build -t pdfstation-backend-test .

# Executar teste
docker run --rm \
  -v $(pwd)/test-assets:/app/test-assets:ro \
  -v $(pwd)/test-output:/app/test-output \
  pdfstation-backend-test \
  npm run test:convert

# Verificar resultado
ls -lh test-output/output.docx
file test-output/output.docx
```

### 3. Deploy no Railway

```bash
# Commit e push
git add .
git commit -m "Fix: LibreOffice PDF → DOCX conversion with proper dependencies and logging"
git push origin main

# Railway fará deploy automático
# Verificar logs no dashboard do Railway
```

## 🔍 Melhorias nos Logs

### Antes
- Logs básicos
- Não mostrava caminho esperado
- Não verificava tamanho do arquivo
- Erros genéricos

### Depois
- ✅ Logs detalhados de cada etapa
- ✅ Caminho esperado do arquivo antes da execução
- ✅ Verificação de existência e tamanho após execução
- ✅ Listagem de arquivos no diretório em caso de erro
- ✅ Mensagens de erro com contexto completo (stderr)
- ✅ Logs em tempo real durante execução

## 📝 Próximos Passos

1. ✅ Dockerfile atualizado com dependências completas
2. ✅ Scripts de teste criados
3. ✅ Logging melhorado
4. ⏭️ **Fazer deploy no Railway**
5. ⏭️ **Testar endpoint `/api/convert` com toolSlug=pdf-to-word**
6. ⏭️ **Verificar logs do Railway após deploy**

## ⚠️ Notas Importantes

1. **libreoffice-writer é obrigatório** - Sem ele, o LibreOffice não consegue exportar DOCX
2. **Fontes são necessárias** - Sem fontes, documentos podem ser gerados incorretamente
3. **Diretório /app/temp** - Deve ter permissões de escrita (chmod 777)
4. **Tempo de espera** - Adicionado delay de 1s após execução para sincronização do filesystem
5. **Verificação de tamanho** - Arquivo de saída não pode ser 0 bytes

---

**Status**: ✅ Implementação completa
**Pronto para**: Deploy no Railway
**Data**: $(date)
