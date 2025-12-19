import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Seo } from '@/components/Seo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const CopyrightPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Seo
        title="Copyright & DMCA Policy | PDFStation"
        description="PDFStation's copyright and DMCA policy. Learn how to report copyright infringement and request removal of content."
        canonical="/copyright"
      />

      {/* Ads removed from Copyright page per AdSense policy: "Ads served on screens without publisher content" */}
      {/* Legal pages are primarily navigation/functional, so ads are disabled */}
      
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Copyright & DMCA Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">1. Our Commitment</h2>
              <p className="text-muted-foreground mb-4">
                PDFStation respects the intellectual property rights of others and expects our users to do the same. 
                We are committed to responding to notices of alleged copyright infringement that comply with the 
                Digital Millennium Copyright Act (DMCA) and other applicable intellectual property laws.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">2. How Our Service Works</h2>
              <p className="text-muted-foreground mb-4">
                PDFStation provides online file conversion tools. Files uploaded by users are processed automatically 
                and temporarily stored only for the purpose of completing the conversion. Files are automatically 
                deleted after processing according to our data retention policy.
              </p>
              <p className="text-muted-foreground mb-4">
                We do not host, store, or distribute user files permanently. We do not monitor, review, or screen 
                user-uploaded content unless required by law or in response to a valid legal request.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">3. Reporting Copyright Infringement</h2>
              <p className="text-muted-foreground mb-4">
                If you believe that content uploaded by a user to PDFStation infringes your copyright, you may send 
                us a DMCA takedown notice. To be effective, your notice must include:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
                <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing, with enough detail to locate it</li>
                <li>Your contact information (address, telephone number, and email address)</li>
                <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner</li>
                <li>A statement that the information in the notice is accurate and that you are authorized to act on behalf of the copyright owner</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">4. Where to Send Notices</h2>
              <p className="text-muted-foreground mb-4">
                Please send DMCA takedown notices to our designated agent:
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Copyright Agent</p>
                <p className="text-muted-foreground mb-2">PDFStation</p>
                <p className="text-muted-foreground mb-2">
                  Email: <a href="mailto:copyright@pdfstation.app" className="text-primary hover:underline">copyright@pdfstation.app</a>
                </p>
                <p className="text-muted-foreground">
                  Subject line: "DMCA Takedown Request"
                </p>
              </div>
              <p className="text-muted-foreground">
                We will respond to valid DMCA notices promptly and take appropriate action as required by law.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">5. Counter-Notification</h2>
              <p className="text-muted-foreground mb-4">
                If you believe your content was removed in error, you may submit a counter-notification. Your 
                counter-notification must include:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that was removed and where it was located</li>
                <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                <li>Your name, address, and telephone number</li>
                <li>A statement that you consent to the jurisdiction of the federal court in your district</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">6. Repeat Infringers</h2>
              <p className="text-muted-foreground mb-4">
                It is our policy to terminate, in appropriate circumstances, the accounts of users who are repeat 
                infringers of intellectual property rights. We reserve the right to take such action at our sole 
                discretion.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">7. Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The information provided on this page is for informational purposes only and does not constitute 
                legal advice. If you have questions about copyright law or your rights, please consult with a 
                qualified attorney.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
              <p className="text-muted-foreground mb-4">
                For questions about this Copyright Policy, please contact us at:
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:copyright@pdfstation.app" className="text-primary hover:underline">
                  copyright@pdfstation.app
                </a>
              </p>
              <p className="text-muted-foreground mt-4">
                For general inquiries, visit our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* All ads removed from Copyright page per AdSense policy compliance */}
    </Layout>
  );
};

