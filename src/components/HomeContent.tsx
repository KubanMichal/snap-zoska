// src/components/HomeContent.tsx

"use client";

import { useSession } from 'next-auth/react';
import Typography from '@mui/material/Typography';

export default function HomeContent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Typography>Načítavam...</Typography>; // Display a loading message while session status is loading
  }

  return (
    <div>
      {session ? (
        <Typography variant="h4">
          Vitajte, {session.user?.name}!
        </Typography>
      ) : (
        <Typography variant="h5">
          Vitaj, prihlás sa prosím.
        </Typography>
      )}
    </div>
  );
}
