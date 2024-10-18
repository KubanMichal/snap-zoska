// src/app/(home)/page.tsx

import React from 'react'; // Ensure React is imported
import Typography from '@mui/material/Typography';
import HomeContent from '@/components/HomeContent';

export const metadata = { title: "Domov-zoškasnap" };

export default function Home() {
  return (
    <div>
      <Typography variant="h4">Domovská stránka</Typography>
      <HomeContent />
    </div>
  );
}







