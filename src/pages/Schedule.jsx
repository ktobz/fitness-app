import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, parseISO, startOfWeek, endOfWeek } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, X, Trash2, Clock, Calendar as CalendarIcon, Dumbbell } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Schedule() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({ title: "", type: "Strength", time: "09:00", duration: "60" });

    useEffect(() => {
        fetch("http://localhost:5000/api/schedule")
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.error("Error fetching schedule:", err));
    }, []);

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days = eachDayOfInterval({ start: startDate, end: endDate });

    const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    const handleDayClick = (day) => {
        setSelectedDate(day);
        setFormData({ title: "", type: "Strength", time: "09:00", duration: "60" });
        setSelectedEvent(null);
        setIsModalOpen(true);
    };

    const handleEventClick = (e, event) => {
        e.stopPropagation();
        setSelectedEvent(event);
        setFormData({ title: event.title, type: event.type, time: event.time, duration: event.duration });
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (!formData.title) return;

        if (selectedEvent) {
            // Update
            fetch(`http://localhost:5000/api/schedule/${selectedEvent.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(updated => {
                    setEvents(events.map(ev => ev.id === updated.id ? updated : ev));
                    setIsModalOpen(false);
                });
        } else {
            // Create
            const newEvent = {
                ...formData,
                date: selectedDate.toISOString()
            };
            fetch("http://localhost:5000/api/schedule", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEvent)
            })
                .then(res => res.json())
                .then(saved => {
                    setEvents([...events, saved]);
                    setIsModalOpen(false);
                });
        }
    };

    const handleDelete = () => {
        if (!selectedEvent) return;
        fetch(`http://localhost:5000/api/schedule/${selectedEvent.id}`, {
            method: "DELETE"
        }).then(() => {
            setEvents(events.filter(ev => ev.id !== selectedEvent.id));
            setIsModalOpen(false);
        });
    };

    const getEventsForDay = (day) => {
        return events.filter(ev => isSameDay(parseISO(ev.date), day));
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <main className="container mx-auto px-6 pt-32 pb-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-950 italic tracking-tighter mb-4">
                            Training <span className="text-primary">Schedule</span>
                        </h1>
                        <p className="text-slate-500 font-medium">Plan your path to greatness. Consistency is key.</p>
                    </div>

                    <div className="flex items-center gap-6 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
                        <button onClick={handlePrevMonth} className="p-3 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-slate-950">
                            <ChevronLeft size={24} />
                        </button>
                        <span className="text-xl font-black text-slate-950 min-w-[160px] text-center uppercase tracking-widest">
                            {format(currentDate, "MMMM yyyy")}
                        </span>
                        <button onClick={handleNextMonth} className="p-3 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-slate-950">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden">
                    {/* Days Header */}
                    <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/50">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                            <div key={day} className="py-4 text-center text-xs font-black uppercase tracking-widest text-slate-400">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7 auto-rows-fr">
                        {days.map((day, idx) => {
                            const dayEvents = getEventsForDay(day);
                            const isCurrentMonth = isSameMonth(day, currentDate);
                            const isToday = isSameDay(day, new Date());

                            return (
                                <div
                                    key={day.toISOString()}
                                    onClick={() => handleDayClick(day)}
                                    className={`
                                        min-h-[140px] p-2 border-b border-r border-slate-100 transition-all cursor-pointer group relative
                                        ${!isCurrentMonth ? "bg-slate-50/30 text-slate-300" : "bg-white hover:bg-slate-50"}
                                    `}
                                >
                                    <div className={`
                                        w-8 h-8 flex items-center justify-center rounded-full text-sm font-black mb-2
                                        ${isToday ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-slate-400"}
                                    `}>
                                        {format(day, "d")}
                                    </div>

                                    <div className="space-y-1.5">
                                        {dayEvents.map(ev => (
                                            <div
                                                key={ev.id}
                                                onClick={(e) => handleEventClick(e, ev)}
                                                className="px-3 py-1.5 rounded-lg bg-slate-950 text-white text-[10px] font-bold uppercase tracking-wide truncate shadow-sm hover:scale-105 transition-transform border-l-2 border-primary"
                                            >
                                                {ev.time} {ev.title}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Add Button on Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center backdrop-blur-sm">
                                            <Plus size={20} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>

            <Footer />

            {/* Event Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-[32px] p-8 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-black italic text-slate-950">
                                    {selectedEvent ? "Edit Session" : "Schedule Session"}
                                </h3>
                                <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Workout Title</label>
                                    <input
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="e.g. Leg Day Destruction"
                                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:bg-white focus:border-primary transition-all outline-none font-bold text-slate-950"
                                        autoFocus
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Type</label>
                                        <select
                                            value={formData.type}
                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:bg-white focus:border-primary transition-all outline-none font-bold text-slate-950 appearance-none"
                                        >
                                            <option>Strength</option>
                                            <option>Cardio</option>
                                            <option>Yoga</option>
                                            <option>HIIT</option>
                                            <option>Rest</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Time</label>
                                        <input
                                            type="time"
                                            value={formData.time}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:bg-white focus:border-primary transition-all outline-none font-bold text-slate-950"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Duration (min)</label>
                                    <input
                                        type="number"
                                        value={formData.duration}
                                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:bg-white focus:border-primary transition-all outline-none font-bold text-slate-950"
                                    />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    {selectedEvent && (
                                        <Button variant="secondary" onClick={handleDelete} className="bg-rose-50 text-rose-500 hover:bg-rose-100 hover:text-rose-600 border-rose-100">
                                            <Trash2 size={20} />
                                        </Button>
                                    )}
                                    <Button variant="primary" className="flex-1" onClick={handleSave}>
                                        {selectedEvent ? "Update Session" : "Add to Schedule"}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
