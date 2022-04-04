const router = require('express').Router();
let Quiz = require('../models/quiz.model');

router.route('/').get((req, res) => {
    User.find()
    .then(quiz => res.json(quiz))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newQuiz = new Quiz({
        username,
        description,
        duration,
        date,
    });

    newQuiz.save()
    .then(() => res.json('Quiz added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;