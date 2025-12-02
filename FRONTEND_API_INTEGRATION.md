# Frontend API Integration - PDFStation

## 📋 Resumo da Integração

O frontend do PDFStation está totalmente integrado com o backend da Railway através do cliente API centralizado.

### 📁 Arquivos Criados/Modificados

1. **`src/lib/pdfstationClient.ts`** (NOVO)
   - Cliente centralizado para todas as operações da API
   - Funções: `convertFile()`, `compressPdf()`, `mergePdfs()`
   - Download automático dos arquivos convertidos
   - Tratamento de erros com mensagens claras

2. **`src/hooks/useFileConversion.ts`** (MODIFICADO)
   - Atualizado para usar `pdfstationClient.ts`
   - Download automático após conversão bem-sucedida
   - Removida dependência do `conversionClient.ts` antigo

3. **`.env.local`** (NOVO)
   - Configuração da URL da API
   - Variável: `VITE_PDFSTATION_API_URL`

### 🔌 Fluxo de Integração

#### 1. Configuração da API

**Arquivo:** `.env.local`
```bash
VITE_PDFSTATION_API_URL=https://pdfstation-production.up.railway.app
```

**Para Vercel (produção):**
- Configure a variável de ambiente `VITE_PDFSTATION_API_URL` no dashboard da Vercel
- Valor: `https://pdfstation-production.up.railway.app`

#### 2. Cliente da API

**Arquivo:** `src/lib/pdfstationClient.ts`

**Funções disponíveis:**

- **`convertFile(options)`**
  - Converte arquivos usando `toolSlug`
  - Endpoint: `POST /api/convert`
  - Usado por: JPG→PDF, PNG→PDF, PDF→Word, PDF→Excel, etc.

- **`compressPdf(options)`**
  - Comprime PDFs
  - Endpoint: `POST /api/compress`
  - Usado por: Compress PDF

- **`mergePdfs(options)`**
  - Mescla múltiplos PDFs
  - Endpoint: `POST /api/merge`
  - Usado por: Merge PDFs

**Características:**
- Download automático após sucesso
- Tratamento de erros com JSON parsing
- Nunca baixa arquivo vazio ou corrompido

#### 3. Componentes que Usam o Cliente

**Arquivo:** `src/components/UploadBox.tsx`
- Usa o hook `useFileConversion`
- O hook chama as funções do `pdfstationClient.ts`
- Download automático quando status muda para `ready`

**Arquivo:** `src/hooks/useFileConversion.ts`
- Gerencia estado dos arquivos (idle, converting, ready, error)
- Chama `convertFile()`, `compressPdf()`, ou `mergePdfs()` conforme o modo
- Atualiza UI com progresso e erros

### 🎯 Fluxos Conectados

#### JPG → PDF
1. Usuário seleciona arquivo JPG
2. Clica em "Convert"
3. `useFileConversion` chama `convertFile({ file, toolSlug: 'jpg-to-pdf', outputFileName: '...' })`
4. `pdfstationClient` faz POST para `/api/convert`
5. Backend retorna PDF binário
6. Download automático do PDF

#### PNG → PDF
- Mesmo fluxo, com `toolSlug: 'png-to-pdf'`

#### PDF → Word (DOCX)
- Mesmo fluxo, com `toolSlug: 'pdf-to-word'`
- Output: `documento.docx`

#### PDF → Excel (XLSX)
- Mesmo fluxo, com `toolSlug: 'pdf-to-excel'`
- Output: `planilha.xlsx`

#### Compress PDF
1. Usuário seleciona PDF
2. Clica em "Compress"
3. `useFileConversion` chama `compressPdf({ file, outputFileName: 'compressed.pdf' })`
4. `pdfstationClient` faz POST para `/api/compress`
5. Download automático do PDF comprimido

#### Merge PDFs
1. Usuário seleciona 2+ PDFs
2. Clica em "Merge"
3. `useFileConversion` chama `mergePdfs({ files, outputFileName: 'merged.pdf' })`
4. `pdfstationClient` faz POST para `/api/merge` com múltiplos arquivos
5. Download automático do PDF mesclado

### ⚠️ Tratamento de Erros

**Quando a API retorna erro (JSON):**
- O cliente detecta `!response.ok`
- Lê o texto da resposta
- Tenta fazer parse JSON
- Extrai `error` ou `detail` da resposta
- Lança `Error` com mensagem clara
- **Nunca baixa arquivo vazio ou corrompido**

**Mensagens de erro comuns:**
- "Erro na conversão (status 400)" → Arquivo inválido
- "Erro na conversão (status 413)" → Arquivo muito grande (>500MB)
- "Erro na conversão (status 500)" → Erro no servidor
- "Falha na conexão" → Backend não acessível

### 🔧 Variáveis de Ambiente

**Desenvolvimento local:**
- Arquivo: `.env.local`
- Variável: `VITE_PDFSTATION_API_URL=http://localhost:3000` (se backend local)

**Produção (Vercel):**
- Configure no dashboard da Vercel:
  - Nome: `VITE_PDFSTATION_API_URL`
  - Valor: `https://pdfstation-production.up.railway.app`

**⚠️ IMPORTANTE:**
- Lembre-se de configurar `VITE_PDFSTATION_API_URL` na Vercel antes do deploy!
- Se migrar para Next.js, use `NEXT_PUBLIC_PDFSTATION_API_URL` em vez de `VITE_PDFSTATION_API_URL`

### 📝 Checklist de Deploy

- [x] Cliente da API criado (`src/lib/pdfstationClient.ts`)
- [x] Hook atualizado para usar novo cliente
- [x] Download automático implementado
- [x] Tratamento de erros implementado
- [ ] Variável `VITE_PDFSTATION_API_URL` configurada na Vercel
- [ ] Testado localmente (se possível)
- [ ] Deploy na Vercel
- [ ] Testado em produção

### 🧪 Testes

**Testes manuais recomendados:**
1. JPG → PDF: Selecionar JPG, clicar Convert, verificar download
2. PNG → PDF: Selecionar PNG, clicar Convert, verificar download
3. PDF → Word: Selecionar PDF, clicar Convert, verificar download DOCX
4. PDF → Excel: Selecionar PDF, clicar Convert, verificar download XLSX
5. Compress PDF: Selecionar PDF, clicar Compress, verificar download
6. Merge PDFs: Selecionar 2+ PDFs, clicar Merge, verificar download

**Testes de erro:**
1. Tentar converter sem arquivo → Deve mostrar erro
2. Tentar merge com 1 arquivo → Deve mostrar erro
3. Desconectar backend → Deve mostrar erro de conexão

---

**Data:** $(date)
**Status:** ✅ Integração completa

