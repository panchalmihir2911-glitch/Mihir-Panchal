import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Business context for the system instruction
const BUSINESS_CONTEXT = `
You are the virtual assistant for Baguley MOT Centre, a local garage in Manchester.
Your tone is friendly, professional, straightforward, and helpful. You do not use salesy jargon.

BUSINESS INFO:
- Name: Baguley MOT Centre
- Location: Baguley, Manchester (Serving Wythenshawe, Brooklands, Timperley)
- Core Service: Class 4 MOT Testing (Cars, Small vans, Taxis, SUVs)
- Additional Services: Pre-MOT Inspection, MOT Re-tests (Free/Discounted per DVSA rules), Minor Repairs (Bulbs, wipers, tyres, brake checks).
- Unique Selling Points: Budget-friendly, No upsell pressure, Fast (45-60 mins), DVSA-approved.
- Hours: Mon-Sat 9:00 AM - 6:00 PM, Sunday Closed.
- Contact: Phone (0161 123 4567 - Placeholder), Email info@baguleymot.co.uk.

GUIDELINES:
- If asked about prices, say "We offer competitive local rates. Please call us for the latest MOT offers."
- If asked to book, guide them to the contact page or phone number.
- If asked about repairs we don't do (major engine work), say we recommend trusted partners.
- Keep answers concise (under 3 sentences where possible).
`;

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

export const initializeChat = (): boolean => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Chat functionality will be limited.");
    return false;
  }

  try {
    genAI = new GoogleGenAI({ apiKey });
    chatSession = genAI.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: BUSINESS_CONTEXT,
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    // Attempt re-initialization if key exists now
    if (!initializeChat()) {
      return "I'm currently offline. Please call us directly to book your MOT!";
    }
  }

  try {
    if (!chatSession) throw new Error("Chat session not initialized");
    
    const response: GenerateContentResponse = await chatSession.sendMessage({ 
      message 
    });
    
    return response.text || "I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the garage systems right now. Please call us.";
  }
};