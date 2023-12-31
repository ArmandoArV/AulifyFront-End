import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { Register } from "./pages/RegisterPage/Register";
import { Profile } from "./pages/ProfilePage/Profile";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import Leaderboard from "./pages/LeaderboardPage/Leaderboard";
import Dashboard from "./pages/DashBoardPage/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { RecoverPassword } from "./pages/RecoverPassword/RecoverPage";
import { ResetPassword } from "./pages/ResetPasswordPage/ResetPassword";
import PlayPage from "./pages/PlayPage/PlayPage";
// Pages

function App() {
  return (
    <div>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile/:idUser/"
              element={
                <ProtectedRoute redirectTo="/">
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/play"
              element={
                <ProtectedRoute redirectTo="/">
                  <PlayPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/resetPassword/:idUser/:token"
              element={<ResetPassword />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/leaderboard"
              element={
                <ProtectedRoute redirectTo="/">
                  <Leaderboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute redirectTo="/" requiresAdmin={true}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<MainPage />} />
            <Route path="/forgotPassword" element={<RecoverPassword />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;

/*

            <Route
              path="/reset-password"
              element={
                <ProtectedRoute redirectTo="/">
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            */
