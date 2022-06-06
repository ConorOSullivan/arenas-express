const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.status(200).send({
        screen: 'home screen'
    })
});

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'blue shirt',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
      res.status(418).send({ message: 'We need a logo!'})
    }

    res.send({
        tshirt: `blue shirt with your ${logo} and ID of ${id}`,
    });
})
