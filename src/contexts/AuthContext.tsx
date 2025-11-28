import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  provider: 'local' | 'google' | 'facebook';
}

interface AuthContextType {
  user: User | null;
  loginWithEmail: (email: string, password: string) => Promise<boolean>;
  signupWithEmail: (name: string, email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage on mount
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          localStorage.removeItem('user');
        }
      }
    }
    setIsLoading(false);
  }, []);

  const saveUser = (userData: User) => {
    setUser(userData);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('user', JSON.stringify(userData));
    }
  };

  const loginWithEmail = async (email: string, password: string): Promise<boolean> => {
    // Mock validation - accept any non-empty email and password
    if (!email || !password) {
      return false;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const userData: User = {
      id: `local-${Date.now()}`,
      name: email.split('@')[0],
      email,
      provider: 'local',
    };

    saveUser(userData);
    return true;
  };

  const signupWithEmail = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock validation
    if (!name || !email || !password) {
      return false;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const userData: User = {
      id: `local-${Date.now()}`,
      name,
      email,
      provider: 'local',
    };

    saveUser(userData);
    return true;
  };

  const loginWithGoogle = async (): Promise<void> => {
    // Simulate Google OAuth flow
    await new Promise(resolve => setTimeout(resolve, 500));

    const userData: User = {
      id: `google-${Date.now()}`,
      name: 'Google User',
      email: 'user@gmail.com',
      provider: 'google',
    };

    saveUser(userData);
  };

  const loginWithFacebook = async (): Promise<void> => {
    // Simulate Facebook OAuth flow
    await new Promise(resolve => setTimeout(resolve, 500));

    const userData: User = {
      id: `facebook-${Date.now()}`,
      name: 'Facebook User',
      email: 'user@facebook.com',
      provider: 'facebook',
    };

    saveUser(userData);
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('user');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithEmail,
        signupWithEmail,
        loginWithGoogle,
        loginWithFacebook,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};


