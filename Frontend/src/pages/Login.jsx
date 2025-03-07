import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    Admin_id: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 // For Checking Purpose 
  const handleLogin = async () => {
    const mockAdmin = { username: "admin", password: "12345" ,Admin_id:"123"}; // Hardcoded credentials

    if (
      credentials.username === mockAdmin.username &&
      credentials.password === mockAdmin.password &&
      credentials.Admin_id === mockAdmin.Admin_id
    ) {
      localStorage.setItem("token", "mock_token_123"); // Save a mock token
      navigate("/dashboard");
    } else {
      setError("Invalid credentials"); // Show error for wrong input
    }
  };
  // const handleLogin = async () => {
  //   if (!credentials.username || !credentials.password || !credentials.Admin_id) {
  //     setError("Please enter Special ID, Username, and Password.");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/admin/login", credentials);
  //     if (res.data.success) {
  //       localStorage.setItem("token", res.data.token);
  //       navigate("/dashboard");
  //     } else {
  //       setError("Invalid credentials. Please try again.");
  //     }
  //   } catch (err) {
  //     setError("Error connecting to server. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f5f5f5">
      <Card sx={{ width: 400, padding: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Admin Login
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <TextField
              label="Admin ID"
              fullWidth
              margin="normal"
              value={credentials.Admin_id}
              onChange={(e) => setCredentials({ ...credentials, Admin_id: e.target.value })}
            />
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            {error && (
              <Typography color="error" textAlign="center" mt={1}>
                {error}
              </Typography>
            )}
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              type="submit"
              disabled={loading || !credentials.username || !credentials.password || !credentials.Admin_id}
            >
              {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
