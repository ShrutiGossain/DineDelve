import app from "./App.js";

app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.PORT}`);
});