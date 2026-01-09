const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set defaults
db.defaults({ workouts: [], stats: { totalWorkouts: 0, avgTime: "0m", caloriesBurned: "0" } }).write();

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
