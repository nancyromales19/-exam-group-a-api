// src/routes/exam-group.ts
import express from 'express';

const router = express.Router();

router.get('/exam-group', (req, res) => {
    res.json({ 
        message: "Group A API" 
    });
});


router.get('/exams', (req, res) => {
    const exams = [
        {
            id: 1,
            name: "Mathematics Midterm",
            subject: "Mathematics",
            date: "2024-04-15",
            duration: 120,
            totalMarks: 100
        },
        {
            id: 2,
            name: "English Literature Final", 
            subject: "English",
            date: "2024-05-20", 
            duration: 180,
            totalMarks: 150
        },
        {
            id: 3,
            name: "Physics Comprehensive",
            subject: "Physics", 
            date: "2024-06-10",
            duration: 150,
            totalMarks: 125
        }
    ];

    res.json(exams);
});

router.put('exam');

export default router;
