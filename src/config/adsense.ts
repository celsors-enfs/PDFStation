/**
 * Google AdSense Configuration
 * 
 * Fluxo de integração:
 * 1) index.html carrega script global do AdSense
 * 2) adsense.ts fornece client ID / slots centralizados
 * 3) GoogleAd.tsx exibe anúncios nas páginas
 * 4) placeholders foram convertidos em <GoogleAd />
 * 
 * Para adicionar slots reais:
 * 1. Acesse o painel do Google AdSense
 * 2. Crie os blocos de anúncio para cada posição
 * 3. Copie o data-ad-slot ID de cada bloco
 * 4. Preencha os valores abaixo em ADSENSE_SLOTS
 */

export const ADSENSE_CLIENT_ID = "ca-pub-2937516149660107";

/**
 * Mapeamento de slots por "apelido" interno.
 * 
 * A Gabriela poderá substituir os valores dos slots depois,
 * quando criar os blocos de anúncio no painel do AdSense.
 * 
 * Para desligar temporariamente um bloco, deixe o valor como "".
 */
export const ADSENSE_SLOTS = {
  TOP_BANNER: "",      // Banner no topo da homepage (antes do hero)
  TOOL_HEADER: "",     // Banner no topo das páginas de ferramenta
  SIDEBAR: "",         // Sidebar/right rail (se existir)
  IN_CONTENT: "",      // Anúncio no meio do conteúdo
  FOOTER: "",          // Banner no rodapé
} as const;

/**
 * Type helper para slot keys
 */
export type AdSlotKey = keyof typeof ADSENSE_SLOTS;


