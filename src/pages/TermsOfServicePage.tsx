import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Seo } from '@/components/Seo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { GoogleAd } from '@/components/GoogleAd';

export const TermsOfServicePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Seo
        title="Terms of Service | PDFStation"
        description="Read PDFStation's terms of service to understand the rules and guidelines for using our free file conversion service."
        canonical="/terms-of-service"
      />

      <div className="container mx-auto px-4 py-4">
        <GoogleAd slotKey="TOOL_HEADER" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Use</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By using PDFStation, you agree to the following terms. If you do not agree with these terms, please do not use our service.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                PDFStation provides online tools to convert, compress, and merge files such as images and PDF documents. The service is provided "as is", without any guarantee of uninterrupted availability or error-free operation.
              </p>
              <p className="text-muted-foreground mb-4">
                We strive to maintain high availability and quality, but we cannot guarantee that the service will always be available or that conversions will always be successful. Technical issues, maintenance, or other factors may temporarily affect service availability.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to use PDFStation to upload or process illegal content, copyrighted material you do not own, or any files that violate applicable laws. You must not attempt to interfere with the security, integrity, or performance of the service.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Do not upload files containing illegal, harmful, or malicious content</li>
                <li>Do not upload copyrighted material without proper authorization</li>
                <li>Do not attempt to hack, disrupt, or damage our servers or infrastructure</li>
                <li>Do not use automated tools to abuse or overload our service</li>
                <li>Respect the rights of others and comply with all applicable laws</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The PDFStation brand, interface, and website design are protected by copyright and related rights. You retain all rights to the original files you upload and the converted files you download. We do not claim ownership of your files.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                We do our best to keep the service stable, but we cannot be held responsible for loss of data, corrupted files, or any damage resulting from the use of the tools. You are responsible for keeping backups of important documents.
              </p>
              <p className="text-muted-foreground mb-4">
                PDFStation is provided free of charge, and we make no warranties, express or implied, regarding the service. Use the service at your own risk.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">6. Data and Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Your use of PDFStation is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we handle your data. Files you upload are processed and deleted automatically, and we do not store your files permanently.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">7. Changes to the Service</h2>
              <p className="text-muted-foreground mb-4">
                We may update, add, or remove tools and features at any time, with or without prior notice. We reserve the right to modify or discontinue the service at any time.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">8. Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                PDFStation is provided "as is" without warranties of any kind. We do not guarantee that the service will meet your requirements, be uninterrupted, secure, or error-free. We are not responsible for any loss or damage that may result from your use of the service.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
              <p className="text-muted-foreground mb-4">
                For any questions regarding these Terms of Use, please reach out at:
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:hi@pdfstation.app" className="text-primary hover:underline">
                  hi@pdfstation.app
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <GoogleAd slotKey="FOOTER" />
      </div>
    </Layout>
  );
};
