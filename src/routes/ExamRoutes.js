const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Group A API" });
});

router.get('/exams', (req, res) => {
    res.json([
        { id: 1, name: "Physics Exam", date: "2025-04-01" },
        { id: 2, name: "Science Exam", date: "2025-04-05" }
    ]);
});


const exams = [];

router.post('/exams', (req, res) => {
    const { name, date } = req.body;
    const newExam = { id: exams.length + 1, name, date };
    exams.push(newExam);
    res.status(201).json(newExam);
});


router.put('/exams/:id', (req, res) => {
    const examId = parseInt(req.params.id);
    const { name, date } = req.body;

    const exam = exams.find(e => e.id === examId);
    if (!exam) {
        return res.status(404).json({ message: "Exam not found" });
    }

    exam.name = name || exam.name;
    exam.date = date || exam.date;
    res.json(exam);
});


module.exports = router;
