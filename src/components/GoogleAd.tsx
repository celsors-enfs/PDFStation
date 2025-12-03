import React, { useEffect } from 'react';
import { ADSENSE_CLIENT_ID, ADSENSE_SLOTS, AdSlotKey } from '@/config/adsense';

/**
 * GoogleAd Component
 * 
 * Componente reutilizável para exibir anúncios do Google AdSense.
 * 
 * Como usar:
 * 1. Importe: import { GoogleAd } from '@/components/GoogleAd';
 * 2. Use: <GoogleAd slotKey="TOP_BANNER" className="..." />
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

  // Se o slot ainda não foi configurado, mostrar placeholder
  if (!slotId) {
    return (
      <div
        className={`
          border-2 border-dashed border-border rounded-lg 
          bg-muted/50 flex items-center justify-center
          text-xs text-muted-foreground
          min-h-[80px]
          ${className}
        `}
        style={style}
      >
        <div className="text-center p-2">
          <p className="font-semibold mb-1">Ad Space</p>
          <p className="text-xs opacity-70">Slot: {slotKey}</p>
        </div>
      </div>
    );
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

