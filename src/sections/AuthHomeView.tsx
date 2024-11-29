'use client';

import { useSession } from 'next-auth/react';
import Typography from '@mui/material/Typography';

export default function AuthHomeView() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Typography variant="h5" align="center">Loading...</Typography>;
  }

  'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import GavelIcon from '@mui/icons-material/Gavel';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router'; // To handle redirection
import Link from 'next/link';

export default function BottomNavbar() {
  const [value, setValue] = React.useState(0);
  const { data: session } = useSession();
  const router = useRouter(); // Use router for programmatic navigation

  // Common items that are available to everyone
  const commonItems = [
    { label: 'Domov', icon: <HomeIcon />, href: '/' },
  ];

  // Items that are available for authenticated users
  const authenticatedItems = [
    { label: 'Hľadať', icon: <SearchIcon />, href: '/hladanie' },
    { label: 'Profily', icon: <PersonIcon />, href: '/profil' },
    { label: 'Pridať', icon: <AddIcon />, href: '/pridat' },
    { label: 'Prispevky', icon: <SearchIcon />, href: '/prispevok' }, // Add the "Prispevky" link
    { label: 'Odhlásiť', icon: <LogoutIcon />, href: '/auth/odhlasenie' },
  ];

  // Items for unauthenticated users
  const unauthenticatedItems = [
    { label: 'O mne', icon: <InfoIcon />, href: '/o-mne' },
    { label: 'GDPR', icon: <GavelIcon />, href: '/gdpr' },
    { label: 'Prihlásenie', icon: <LoginIcon />, href: '/auth/prihlasenie' },
    { label: 'Registrácia', icon: <PersonAddIcon />, href: '/auth/registracia' },
  ];

  // Set the items based on the session state
  const navItems = [...commonItems, ...(session ? authenticatedItems : unauthenticatedItems)];

  // Redirect to Prispevky page if user is authenticated and on the home page
  React.useEffect(() => {
    if (session && router.pathname === '/') {
      router.push('/prispevok'); // Redirect to Prispevky if logged in and on the home page
    }
  }, [session, router]);

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          router.push(newValue); // Navigate to the selected page
        }}
        sx={{
          backgroundColor: 'background.paper',
          '& .MuiBottomNavigationAction-root': {
            color: 'text.secondary',
            '&.Mui-selected': {
              color: 'primary.main',
            },
          },
        }}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            icon={item.icon}
            component={Link}
            href={item.href}
            sx={{
              minWidth: 'auto',
              padding: '6px 12px',
              fontSize: '0.75rem',
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}

}