import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import WorkoutCreator from "./pages/WorkoutCreator";
import EditWorkout from "./pages/EditWorkout";
import Schedule from "./pages/Schedule";
import PerformanceLab from "./pages/PerformanceLab";
import PerformanceReport from "./pages/PerformanceReport";
import WorkoutLibrary from "./pages/WorkoutLibrary";
import Programs from "./pages/Programs";
import Coaching from "./pages/Coaching";
import PersonalizedCoaching from "./pages/PersonalizedCoaching";
import Nutrition from "./pages/Nutrition";
import Wearables from "./pages/Wearables";
import Discord from "./pages/Discord";
import Teams from "./pages/Teams";
import Challenges from "./pages/Challenges";
import Leaderboard from "./pages/Leaderboard";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Safety from "./pages/Safety";
import FindSquads from "./pages/FindSquads";
import CommunityPage from "./pages/Community";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/create-workout" element={
            <ProtectedRoute>
              <WorkoutCreator />
            </ProtectedRoute>
          } />
          <Route path="/edit-workout/:id" element={
            <ProtectedRoute>
              <EditWorkout />
            </ProtectedRoute>
          } />
          <Route path="/schedule" element={
            <ProtectedRoute>
              <Schedule />
            </ProtectedRoute>
          } />
          <Route path="/performance-lab" element={
            <ProtectedRoute>
              <PerformanceLab />
            </ProtectedRoute>
          } />
          <Route path="/performance-report" element={
            <ProtectedRoute>
              <PerformanceReport />
            </ProtectedRoute>
          } />
          <Route path="/workouts" element={
            <ProtectedRoute>
              <WorkoutLibrary />
            </ProtectedRoute>
          } />

          {/* Product Routes */}
          <Route path="/programs" element={<Programs />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/personalized-coaching" element={<PersonalizedCoaching />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/wearables" element={<Wearables />} />
          {/* Community Routes */}
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/find-squads" element={<FindSquads />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          {/* Support Routes */}
          <Route path="/help" element={<Help />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/safety" element={<Safety />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
