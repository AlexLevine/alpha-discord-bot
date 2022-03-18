import express from 'express';

const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});


app.get('/', (req, res) => {
    res.send('This is the homepage');
});
