const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let usernames = [];

app.get('/api/usernames', (req, res) => {
    res.json(usernames);
});

app.post('/api/usernames', (req, res) => {
    const { username } = req.body;
    if (username) {
        usernames.push(username);
        res.status(201).json({ message: 'Username added' });
    } else {
        res.status(400).json({ error: 'Username is required' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
