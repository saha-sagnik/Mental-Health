const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.listen(5001,()=>{
    console.log("running at 5001");
})