const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

// baseRouter.get('/',(req,res)=>{
//     return res.send("<html><body>hi</body></html>")
// })

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World!');
});

baseRouter.post('/add', (req, res) => {
    res.json({ "result": req.body.first + req.body.second });
});


baseRouter.post('/subtract', (req, res) => {
    res.json({ "result": req.body.first - req.body.second });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});