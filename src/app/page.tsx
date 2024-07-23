import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "100vh",
            height: "100vh"
          }}
        >
          <Typography variant="h1" fontWeight="bold">
            NextJs MUI Template
          </Typography>
        </Box>
      </Container>
    </main>
  );
}
