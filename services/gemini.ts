import { GoogleGenAI, Chat } from "@google/genai";
import { RESUME_TEXT } from "../constants";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key missing");
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are a polite, elegant, and professional AI assistant for Helen Wu's personal portfolio website. 
      Your persona is inspired by the art style of Claude Monet—calm, reflective, and articulate.
      
      You have access to Helen's resume below. Answer visitors' questions about her skills, experience, and projects based strictly on this context.
      If asked about something not in the resume, gently state that you don't have that information but can discuss her known professional background.
      
      Keep answers concise (under 3 sentences unless asked for detail) and helpful.
      
      RESUME CONTEXT:
      ${RESUME_TEXT}`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I seem to be having trouble connecting to my thoughts right now. Please try again later.";
  }
};