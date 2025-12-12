import React, { useEffect } from 'react';
import { ADSENSE_CLIENT_ID, ADSENSE_SLOTS, AdSlotKey } from '@/config/adsense';

/**
 * GoogleAd Component
 * 
 * Componente reutilizável para exibir anúncios do Google AdSense.
 * 
 * ADSense POLICY COMPLIANCE:
 * - Ads must NOT render before H1 title or first content section
 * - Ads must NOT render on pages without substantial editorial content
 * - Placeholders are disabled in production (return null if slot not configured)
 * - Sidebar ads are disabled globally to prevent "empty screen + ad" scenarios
 * 
 * Como usar:
 * 1. Importe: import { GoogleAd } from '@/components/GoogleAd';
 * 2. Use: <GoogleAd slotKey="TOP_BANNER" className="..." />
 * 3. Ensure ads render ONLY after at least ~300 words of editorial content
 * 
 * Para adicionar slots reais:
 * 1. Acesse o painel do Google AdSense
 * 2. Crie um bloco de anúncio
 * 3. Copie o data-ad-slot ID
 * 4. Preencha em src/config/adsense.ts no ADSENSE_SLOTS correspondente
 * 
 * Para desligar temporariamente um anúncio:
 * Deixe o slot vazio ("") em adsense.ts
 */
type GoogleAdProps = {
  slotKey: AdSlotKey; // "TOP_BANNER" | "TOOL_HEADER" | "SIDEBAR" | "IN_CONTENT" | "FOOTER"
  className?: string;
  style?: React.CSSProperties;
};

export const GoogleAd: React.FC<GoogleAdProps> = ({
  slotKey,
  className = '',
  style,
}) => {
  const slotId = ADSENSE_SLOTS[slotKey];

  // AdSense Policy Compliance: Disable sidebar ads globally
  // Sidebar ads can create "empty screen + ad" scenarios on mobile/tablet devices
  // This violates "Ads served on screens without publisher content" policy
  if (slotKey === 'SIDEBAR') {
    return null;
  }

  // Inicializar AdSense quando o componente montar
  useEffect(() => {
    if (!slotId) {
      // Slot ainda não configurado, apenas mostrar placeholder
      return;
    }

    try {
      // Garantir que o script já foi carregado
      // e evitar erros em SSR ou build
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        
        // Inicializar adsbygoogle se ainda não foi inicializado
        if (!w.adsbygoogle) {
          w.adsbygoogle = [];
        }
        
        // Verificar se adsbygoogle está disponível e é um array
        if (Array.isArray(w.adsbygoogle)) {
          w.adsbygoogle.push({});
        } else {
          // Script ainda não carregou, tentar novamente após um delay
          const timer = setTimeout(() => {
            if (w.adsbygoogle && Array.isArray(w.adsbygoogle)) {
              w.adsbygoogle.push({});
            }
          }, 100);
          return () => clearTimeout(timer);
        }
      }
    } catch (error) {
      console.error('Erro ao inicializar AdSense', error);
    }
  }, [slotId]);

  // AdSense Policy Compliance: Do NOT show placeholders in production
  // Placeholders violate "Ads served on screens without publisher content" policy
  // If slot is not configured, return null instead of showing placeholder
  if (!slotId) {
    return null;
  }

  // Renderizar o anúncio do AdSense
  return (
    <div className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          ...style,
        }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

