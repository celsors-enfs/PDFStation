import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chrome, Facebook } from 'lucide-react';
import { FEATURES } from '@/config/features';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithEmail, loginWithGoogle, loginWithFacebook } = useAuth();
  const { t } = useLanguage();

  useEffect(() => {
    if (!FEATURES.authUIEnabled) {
      navigate('/', { replace: true });
    }
  }, [navigate]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const from = (location.state as any)?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await loginWithEmail(email, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError(t('auth.login.invalid'));
      }
    } catch (err) {
      setError(t('auth.login.error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await loginWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      setError(t('auth.login.google.error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setIsLoading(true);
    try {
      await loginWithFacebook();
      navigate(from, { replace: true });
    } catch (err) {
      setError(t('auth.login.facebook.error'));
    } finally {
      setIsLoading(false);
    }
  };

  if (!FEATURES.authUIEnabled) {
    return (
      <Layout>
        <Seo
          title="Login | PDFStation"
          description="Login to your PDFStation account to access advanced features and unlimited conversions."
          canonical="/login"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">{t('auth.disabled.title')}</CardTitle>
                <CardDescription className="text-center">
                  {t('auth.disabled.message')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/')} className="w-full">
                  {t('auth.disabled.go.home')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title="Login | PDFStation"
        description="Login to your PDFStation account to access advanced features and unlimited conversions."
        canonical="/login"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">{t('auth.login.title')}</CardTitle>
              <CardDescription className="text-center">
                {t('auth.login.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">{t('auth.login.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('auth.signup.email.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">{t('auth.login.password')}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t('auth.signup.password.placeholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? t('auth.login.submitting') : t('auth.login.submit')}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    {t('auth.login.or')}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full"
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleFacebookLogin}
                  disabled={isLoading}
                  className="w-full"
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
              </div>

              <div className="mt-4 text-center text-sm">
                <span className="text-muted-foreground">{t('auth.login.no.account')} </span>
                <Link to="/signup" className="text-primary hover:underline">
                  {t('auth.login.signup.link')}
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};


