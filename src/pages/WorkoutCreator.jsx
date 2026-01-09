import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Plus, Trash2, Save, ArrowLeft, Image as ImageIcon, StickyNote, Activity } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function WorkoutCreator() {
    const navigate = useNavigate();
    const [workout, setWorkout] = useState({
        title: "",
        type: "Strength",
        difficulty: "Intermediate",
        equipment: "Full Gym",
        notes: "",
        exercises: [{ name: "", sets: "", reps: "", weight: "" }],
        image: null
    });

    const addExercise = () => {
        setWorkout({
            ...workout,
            exercises: [...workout.exercises, { name: "", sets: "", reps: "", weight: "" }]
        });
    };

    const removeExercise = (index) => {
        const newExercises = [...workout.exercises];
        newExercises.splice(index, 1);
        setWorkout({ ...workout, exercises: newExercises });
    };

    const handleExerciseChange = (index, field, value) => {
        const newExercises = [...workout.exercises];
        newExercises[index][field] = value;
        setWorkout({ ...workout, exercises: newExercises });
    };

    const handleSave = () => {
        const newWorkout = {
            ...workout,
            id: Date.now(),
            date: new Date().toLocaleDateString()
        };

        fetch("http://localhost:5000/api/workouts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newWorkout)
        })
            .then(() => navigate("/dashboard"))
            .catch(err => console.error("Error saving workout:", err));
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-slate-950 transition-colors font-bold">
                        <ArrowLeft size={20} />
                        <span>Back to Dashboard</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Button variant="secondary" size="sm" onClick={() => navigate("/dashboard")}>Cancel</Button>
                        <Button variant="primary" size="sm" onClick={handleSave}>
                            <Save size={18} className="mr-2" /> Save Workout
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 pt-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid lg:grid-cols-3 gap-12"
                >
                    {/* Sidebar: Meta */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Workout Name</label>
                                <input
                                    value={workout.title}
                                    onChange={(e) => setWorkout({ ...workout, title: e.target.value })}
                                    placeholder="Morning Heavy Lift"
                                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:bg-white focus:border-primary transition-all outline-none font-bold text-slate-950"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Activity Type</label>
                                <select
                                    value={workout.type}
                                    onChange={(e) => setWorkout({ ...workout, type: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:bg-white focus:border-primary transition-all outline-none font-bold text-slate-950 appearance-none cursor-pointer"
                                >
                                    <option>Strength</option>
                                    <option>Cardio</option>
                                    <option>Yoga</option>
                                    <option>HIIT</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Difficulty</label>
                                <select
                                    value={workout.difficulty}
                                    onChange={(e) => setWorkout({ ...workout, difficulty: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:bg-white focus:border-primary transition-all outline-none font-bold text-slate-950 appearance-none cursor-pointer"
                                >
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                    <option>Elite</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Equipment</label>
                                <input
                                    value={workout.equipment}
                                    onChange={(e) => setWorkout({ ...workout, equipment: e.target.value })}
                                    placeholder="Dumbbells, Bench..."
                                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:bg-white focus:border-primary transition-all outline-none font-bold text-slate-950"
                                />
                            </div>
                        </div>

                        <div className="bg-slate-950 p-8 rounded-[32px] text-white space-y-4">
                            <div className="flex items-center gap-3">
                                <StickyNote className="text-primary" />
                                <h3 className="font-black italic uppercase tracking-widest text-xs">Training Notes</h3>
                            </div>
                            <textarea
                                value={workout.notes}
                                onChange={(e) => setWorkout({ ...workout, notes: e.target.value })}
                                placeholder="How did you feel today? Any specific focus areas?"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 h-32 focus:bg-white/10 transition-all outline-none font-medium text-sm leading-relaxed"
                            />
                        </div>

                        <div className="bg-white border-2 border-dashed border-slate-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-slate-400 hover:border-primary transition-colors cursor-pointer group">
                            <ImageIcon size={32} className="mb-4 group-hover:text-primary transition-colors" />
                            <p className="text-xs font-black uppercase tracking-widest">Attach Image</p>
                        </div>
                    </div>

                    {/* Main Content: Exercises */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-black text-slate-950 italic">Exercises</h2>
                            <button
                                onClick={addExercise}
                                className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                            >
                                <Plus size={18} /> Add Movement
                            </button>
                        </div>

                        <AnimatePresence>
                            {workout.exercises.map((ex, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm relative group"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div className="md:col-span-2 space-y-1">
                                            <input
                                                value={ex.name}
                                                onChange={(e) => handleExerciseChange(index, "name", e.target.value)}
                                                placeholder="Exercise Name"
                                                className="w-full bg-slate-50 border border-slate-100 p-3 rounded-xl focus:bg-white focus:border-primary transition-all outline-none font-bold"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-2 md:col-span-2">
                                            <input
                                                value={ex.sets}
                                                onChange={(e) => handleExerciseChange(index, "sets", e.target.value)}
                                                placeholder="Sets"
                                                className="bg-slate-50 border border-slate-100 p-3 rounded-xl focus:bg-white focus:border-primary transition-all outline-none text-center font-bold"
                                            />
                                            <input
                                                value={ex.reps}
                                                onChange={(e) => handleExerciseChange(index, "reps", e.target.value)}
                                                placeholder="Reps"
                                                className="bg-slate-50 border border-slate-100 p-3 rounded-xl focus:bg-white focus:border-primary transition-all outline-none text-center font-bold"
                                            />
                                            <input
                                                value={ex.weight}
                                                onChange={(e) => handleExerciseChange(index, "weight", e.target.value)}
                                                placeholder="kg"
                                                className="bg-slate-50 border border-slate-100 p-3 rounded-xl focus:bg-white focus:border-primary transition-all outline-none text-center font-bold"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => removeExercise(index)}
                                        className="absolute -right-3 -top-3 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {workout.exercises.length === 0 && (
                            <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-[40px]">
                                <Activity className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                <p className="text-slate-400 font-bold">No exercises added yet.</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
