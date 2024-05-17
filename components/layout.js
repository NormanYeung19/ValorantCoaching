// components/Layout.js
import React from 'react';
import { Auth, Typography } from '@supabase/ui';
import supabase from '../utils/supabaseClient';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-4">
        <Auth.UserContextProvider supabaseClient={supabase}>
          <Auth
            supabaseClient={supabase}
            providers={['google']}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
            socialColors={true}
          />
          <Typography>{children}</Typography>
        </Auth.UserContextProvider>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
