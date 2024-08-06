import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import { ChatOpenAI } from "@langchain/openai";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use(
  cors({ origin: "http://localhost:5173", methods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"] })
);

app.get("/listings", async (req, res) => {
  const listings = await prisma.listing.findMany();

  return res.status(200).json(listings);
});

app.listen(3000);

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});
