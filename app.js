import express from 'express';
import examGroupRoutes from './src/routes/exam-group';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use('/api', examGroupRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});