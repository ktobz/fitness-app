const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set defaults
db.defaults({ workouts: [], schedule: [], stats: { totalWorkouts: 0, avgTime: "0m", caloriesBurned: "0" } }).write();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Get all user workouts
app.get('/api/workouts', (req, res) => {
    const workouts = db.get('workouts').value();
    res.json(workouts);
});

// Get curated library
app.get('/api/library', (req, res) => {
    const library = db.get('library').value();
    res.json(library);
});

// Add a workout
app.post('/api/workouts', (req, res) => {
    const workout = req.body;
    db.get('workouts')
        .push(workout)
        .write();

    // Update stats
    const total = db.get('workouts').size().value();
    db.get('stats').set('totalWorkouts', total).write();

    res.status(201).json(workout);
});

// Get a single workout
app.get('/api/workouts/:id', (req, res) => {
    const { id } = req.params;
    const workout = db.get('workouts')
        .find({ id: parseInt(id) })
        .value();

    if (!workout) {
        return res.status(404).json({ error: "Workout not found" });
    }
    res.json(workout);
});

// Update a workout
app.patch('/api/workouts/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db.get('workouts')
        .find({ id: parseInt(id) })
        .assign(changes)
        .write();

    const updatedWorkout = db.get('workouts')
        .find({ id: parseInt(id) })
        .value();

    res.json(updatedWorkout);
});

// Delete a workout
app.delete('/api/workouts/:id', (req, res) => {
    const { id } = req.params;
    db.get('workouts')
        .remove({ id: parseInt(id) })
        .write();

    const total = db.get('workouts').size().value();
    db.get('stats').set('totalWorkouts', total).write();

    res.json({ success: true });
});

// Get stats
app.get('/api/stats', (req, res) => {
    const stats = db.get('stats').value();
    res.json(stats);
});

// --- Schedule Routes ---

// Get all schedule events
app.get('/api/schedule', (req, res) => {
    const events = db.get('schedule').value();
    res.json(events);
});

// Add a schedule event
app.post('/api/schedule', (req, res) => {
    const event = { ...req.body, id: Date.now() };
    db.get('schedule').push(event).write();
    res.status(201).json(event);
});

// Update a schedule event
app.patch('/api/schedule/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.get('schedule').find({ id: parseInt(id) }).assign(changes).write();
    const updated = db.get('schedule').find({ id: parseInt(id) }).value();
    res.json(updated);
});

// Delete a schedule event
app.delete('/api/schedule/:id', (req, res) => {
    const { id } = req.params;
    db.get('schedule').remove({ id: parseInt(id) }).write();
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
