import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const Airlingo = () => {
  const navigate = useNavigate();

  const primaryColor = "#1976d2";

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: primaryColor }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 6,
            m: 3,
            fontWeight: "bolder",
          }}
        >
          <Typography variant="h6">Airlingo</Typography>
          <Button color="inherit" onClick={handleRegister}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Airlingo Event
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 5, color: "gray" }}
        >
          Join the experience. Learn. Connect. Pretend you understood everything
          in the event.
        </Typography>

        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 6,
          }}
        >
          <Box
            component="img"
            src="/a.png"
            alt="example"
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 6,
              opacity: 0,
              transform: "translateY(20px)",
              animation: "fadeUp 0.8s ease forwards",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 16,
              },
              "@keyframes fadeUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          />

          <Box
            component="img"
            src="/b.png"
            alt="example"
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: 2,
              opacity: 0,
              boxShadow: 6,
              transform: "translateY(20px)",
              animation: "fadeUp 0.8s ease forwards",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 16,
              },
              "@keyframes fadeUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          />
        </Container>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleRegister}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: "1.2rem",
              borderRadius: 3,
              textTransform: "none",
              backgroundColor: primaryColor,
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#125aa0",
              },
            }}
          >
            Register Now
          </Button>
        </Box>
      </Container>
      <Box
        sx={{
          mt: 10,
          py: 4,
          backgroundColor: primaryColor,
          color: "white",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ mb: 2 }}>
          Owned & Created by <strong>SDK</strong>
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            mb: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            href="https://www.instagram.com/sdktraining/"
            target="_blank"
            sx={{ color: "white" }}
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            href="https://jo.linkedin.com/company/sdk-training-center"
            target="_blank"
            sx={{ color: "white" }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="https://www.facebook.com/SDKcompany/"
            target="_blank"
            sx={{ color: "white" }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>

        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          © {new Date().getFullYear()} Airlingo. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Airlingo;
