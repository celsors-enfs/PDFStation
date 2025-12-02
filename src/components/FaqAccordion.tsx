import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

export const FaqAccordion: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.convert.question'),
      answer: t('faq.convert.answer'),
    },
    {
      question: t('faq.images.question'),
      answer: t('faq.images.answer'),
    },
    {
      question: t('faq.word.question'),
      answer: t('faq.word.answer'),
    },
    {
      question: t('faq.compress.question'),
      answer: t('faq.compress.answer'),
    },
    {
      question: t('faq.merge.question'),
      answer: t('faq.merge.answer'),
    },
    {
      question: t('faq.formats.question'),
      answer: t('faq.formats.answer'),
    },
    {
      question: t('faq.security.question'),
      answer: t('faq.security.answer'),
    },
    {
      question: t('faq.size.limit.question'),
      answer: t('faq.size.limit.answer'),
    },
    {
      question: t('faq.account.question'),
      answer: t('faq.account.answer'),
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">{t('faq.title')}</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};


