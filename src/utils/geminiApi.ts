import { GoogleGenerativeAI } from "@google/generative-ai";

export const askGemini = async (prompt: string) => {

    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    const genAI = new GoogleGenerativeAI(API_KEY || "");

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContent( prompt );
    const response = await result.response;
    return response.text();

}