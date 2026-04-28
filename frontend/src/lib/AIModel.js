import {GoogleGenAI} from '@google/genai'

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY
})
const config = {
    ResponseMimeType: "text/plain",
};
const model = "gemini-1.5-flash";

export async function getAIRecommendations(prompt) {
    try {
        const response = await ai.models.generateContent({
            model,
            config,
            contents: [{role: "user", parts: [{ text: prompt }]}],
        });
        return response.candidates?.[0]?.content?.parts?.[0]?.text;
    } catch (error) {
        console.error("Error sending message: ", error)
        return null;
    }
}