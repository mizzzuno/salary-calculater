"use client";

import Header from "@/app/ui/staff/Header";
import { Box } from "@mui/joy";
import Modal from "@/app/ui/staff/Modal";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        <Modal />
      </Box>
    </>
  );
}
