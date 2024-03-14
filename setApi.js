import e from 'express';
import searchGenre , {findTrackById} from './app.js';
const app = e();

app.get("/" , (req,res) => {
    res.send("Home Screen");
});

app.get("/searchGenre" , (req,res) => {
    res.send(searchGenre("Romantic"));
});

app.get("/findTrackById" , (req,res) => {
    res.send(findTrackById(3));
});

app.listen(5000);