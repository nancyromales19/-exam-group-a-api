const express = require('express');
const app = express();
const port = 3000;

const examRoutes = require('./routes/examRoutes');

app.use(express.json());
app.use('/exam-group', examRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
    