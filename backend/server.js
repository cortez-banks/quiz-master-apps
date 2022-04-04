const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://cbanks:Quiz123@cluster0.ziwte.mongodb.net/QuizMaster?retryWrites=true&w=majority";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
const quizRouter = require('./routes/quiz');
const userRouter = require('./routes/user');

app.use('/quiz', quizRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});