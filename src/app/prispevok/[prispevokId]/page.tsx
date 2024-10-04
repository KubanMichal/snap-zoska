// src/app/prispevok/[prispevokId]/page.tsx


import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Detail prispevku | Projektapp" };

export default function PostDetail({
  params,

}: {
  params: {
    prispevokId: string;
  };
}) {

  return (
    <Container>
      <Typography> Prispevok c.: {params.prispevokId} </Typography>
    </Container>

      

  );
}