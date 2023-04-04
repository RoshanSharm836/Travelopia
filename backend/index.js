const app = express();
var cors = require("cors");
app.use(cors());

app.use(express.json());

app.listen(3000, () => {
  console.log("listening on port 3000");
  connection();
});

// unshorted Array,2 sum
