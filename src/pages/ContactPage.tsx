import React from 'react';
import { Layout } from '@/layouts/Layout';
import { GoogleAd } from '@/components/GoogleAd';
import { Seo } from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Bug, Lightbulb, FileText } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us – PDFStation | Get in Touch"
        description="Have questions, suggestions, or feedback about PDFStation? Contact us by email. We read all messages and do our best to reply as soon as possible."
        canonical="/contact"
      />

      <div className="container mx-auto px-4 py-4">
        <GoogleAd slotKey="TOOL_HEADER" />
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact</h1>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              We'd love to hear from you. Get in touch with any questions, suggestions, or feedback.
            </p>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions, suggestions, or feedback about PDFStation, you can reach us by email:
                </p>
                <a
                  href="mailto:rodgues.celso7@gmail.com"
                  className="text-primary hover:underline font-medium text-lg"
                >
                  rodgues.celso7@gmail.com
                </a>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Bug className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Report a Bug</h3>
                  <p className="text-sm text-muted-foreground">
                    Found an issue with file conversion or noticed something not working as expected? Let us know and we'll fix it as soon as possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Suggest a Feature</h3>
                  <p className="text-sm text-muted-foreground">
                    Have an idea for a new tool or improvement? We're always looking to make PDFStation better based on user feedback.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Translation Fix</h3>
                  <p className="text-sm text-muted-foreground">
                    Spotted a typo or found a translation that doesn't make sense? Help us improve the multilingual experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">General Inquiry</h3>
                  <p className="text-sm text-muted-foreground">
                    Have a question about how PDFStation works, our privacy practices, or anything else? We're here to help.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Response Time</h2>
                <p className="text-muted-foreground mb-4">
                  We read all messages and do our best to reply as soon as possible. Typically, you can expect a response within 24-48 hours during business days.
                </p>
                <p className="text-muted-foreground">
                  For urgent matters related to file conversion issues or security concerns, please mention "URGENT" in your subject line, and we'll prioritize your message.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <GoogleAd slotKey="IN_CONTENT" />
          </div>
          <div className="lg:col-span-1">
            <GoogleAd slotKey="SIDEBAR" className="sticky top-20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <GoogleAd slotKey="FOOTER" />
      </div>
    </Layout>
  );
};

