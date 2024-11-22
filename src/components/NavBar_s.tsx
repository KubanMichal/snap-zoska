// /src/components/Navbar.tsx
"use client";

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';
//import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const [value, setValue] = React.useState('/');
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  const handleLogin = () => {
    signIn('google');
  };

  const handleLogout = () => {
    signOut();
    setValue('/'); // Redirect to home or any other page after logout
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
        sx={{ '.Mui-selected': { fontSize: '0.875rem' } }}
      >
        <BottomNavigationAction label="Domov" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profily" value="/profil" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Príspevky" value="/prispevok" icon={<AddCircleIcon />} />

        {!session ? (
          <>
            <BottomNavigationAction 
              label="Prihlásenie" 
              //value="/auth/prihlasenie" 
              icon={<LoginIcon />} 
              onClick={handleLogin} 
            />
          </>
        ) : (
          <BottomNavigationAction 
            label="Odhlásiť" 
            icon={<LogoutIcon />} 
            onClick={handleLogout} 
          />
        )}
      </BottomNavigation>
    </Box>
  );
}


