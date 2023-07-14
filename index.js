import express from 'express';

const port = process.argv[2];
const app = express();
app.get('/', (req, res) => res.send(`Helloooo from port ${port}`));
app.listen(port, () => console.log('Server is running at http://localhost:' + port));
