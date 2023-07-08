
const app = require("./app.js")

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
}); // here appListening is the call back function