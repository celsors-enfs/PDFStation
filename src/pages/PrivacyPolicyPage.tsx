import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Seo } from '@/components/Seo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { GoogleAd } from '@/components/GoogleAd';

export const PrivacyPolicyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Seo
        title="Privacy Policy | PDFStation"
        description="Read PDFStation's privacy policy to understand how we collect, use, and protect your data. Your privacy is important to us."
        canonical="/privacy-policy"
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                This Privacy Policy explains how PDFStation ("we", "our", "us") handles information when you use our website and tools. We are committed to protecting your privacy and ensuring the security of your data.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">1. Files You Upload</h2>
              <p className="text-muted-foreground mb-4">
                Files you upload are used only to perform the requested operation (convert, compress, merge, etc.). Files are kept temporarily on our servers for processing and are deleted automatically after a short period.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Files are processed only for the time needed to complete your request</li>
                <li>We do not sell, share, or manually inspect the content of your files</li>
                <li>Files are automatically deleted from our servers after processing</li>
                <li>We do not store your files permanently or use them for any purpose other than the conversion you requested</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">2. Usage Data and Analytics</h2>
              <p className="text-muted-foreground mb-4">
                We may collect anonymous usage data to understand how the site is used (for example, which tools are most popular, approximate location, device type). This may be done using third-party analytics tools such as Mixpanel or similar services.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>This data helps us improve performance, stability, and user experience</li>
                <li>We do not collect personally identifiable information without your consent</li>
                <li>Analytics data is aggregated and anonymized</li>
                <li>We use this information to fix bugs and optimize our tools</li>
                <li>You can opt out of analytics tracking through your browser settings</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">3. Cookies and Similar Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We may use cookies or local storage to remember your language preference or improve loading performance. Advertising partners such as Google AdSense may use cookies to serve and personalize ads, according to their own policies.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Cookies are used to remember your preferences (like language selection)</li>
                <li>We do not use cookies to track your browsing behavior across other websites</li>
                <li>You can disable cookies in your browser settings, though this may affect some functionality</li>
                <li>Third-party advertising networks may use their own cookies for ad personalization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">4. Advertising</h2>
              <p className="text-muted-foreground mb-4">
                PDFStation may display ads from third-party networks such as Google AdSense. These networks may use cookies or other identifiers to show relevant ads in line with their own advertising and privacy policies. We do not control the content of these ads, but we work only with reputable advertising partners.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">5. Personal Information</h2>
              <p className="text-muted-foreground mb-4">
                We do not require you to create an account to use the core tools. If you contact us by email, we will use your email address only to reply to your message. We do not share your email address with third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                Files uploaded to PDFStation are deleted automatically after processing, typically within minutes. We do not retain your files for longer than necessary to complete the conversion. Analytics data may be retained in aggregated form for longer periods to help us improve the service.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Access any personal information we may have about you</li>
                <li>Request deletion of your data</li>
                <li>Opt out of analytics tracking</li>
                <li>Contact us with privacy concerns or questions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. The latest version will always be available on this page. We will notify users of significant changes by updating the "Last updated" date at the top of this page.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or how we handle your data, you can contact us at:
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:rodgues.celso7@gmail.com" className="text-primary hover:underline">
                  rodgues.celso7@gmail.com
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
