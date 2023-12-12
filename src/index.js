import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
	path: "./env"
});

const port = process.env.PORT || 8000;

connectDB()
.then(() => {
	app.listen(port, () => {
		console.log(`Server is running at port: ${port}`);
	})
})
.catch((err) => {
	console.log("MongoDB Connection failed: ", err);
});


/*
! - This way of writing code pollutes the index.js 
TODO - You can write the same code in other file inside a function and then import here

import express from "express";
const app = express();

( async () => {
	try {
		await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

		app.on("error", (error) => {
			console.log("ERROR: ", error);
			throw error;
		});

		app.listen(process.env.PORT, () => {
			console.log(`App is listening on port: ${process.env.PORT}`);
		});

	} catch (error) {
		console.error("ERROR: ", error);
		throw error;
	}
})();

*/