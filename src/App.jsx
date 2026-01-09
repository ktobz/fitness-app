import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import WorkoutCreator from "./pages/WorkoutCreator";
import PerformanceLab from "./pages/PerformanceLab";
import WorkoutLibrary from "./pages/WorkoutLibrary";
import Programs from "./pages/Programs";
import Coaching from "./pages/Coaching";
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
import PersonalizedCoaching from "./pages/PersonalizedCoaching";
import CommunityPage from "./pages/Community";
import FindSquads from "./pages/FindSquads";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-workout" element={<WorkoutCreator />} />
        <Route path="/performance-lab" element={<PerformanceLab />} />
        <Route path="/workouts" element={<WorkoutLibrary />} />
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
    </Router>
  )
}
