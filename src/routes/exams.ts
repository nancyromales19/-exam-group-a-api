const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Group A API" });
});

router.get('/exams', (req, res) => {
    res.json([
        { id: 1, name: "Math Exam", date: "2025-04-01" },
        { id: 2, name: "Science Exam", date: "2025-04-05" }
    ]);
});


module.exports = router;
