import  express,{Application} from 'express';
import router from './routes/index';
import* as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app:Application= express();
const port=3003;
app.use(cors());


app.use(express.json());

app.use('/',router);



app.listen(port,() => console.log(`express server started on port ${port}`));
