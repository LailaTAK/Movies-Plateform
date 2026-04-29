export async function getAIRecommendations(prompt) {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`
            },
            body: JSON.stringify({
                model: "openrouter/free",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 1000,
            })
        });
        const data = await response.json();
        return data.choices?.[0]?.message?.content;
    } catch (error) {
        console.error("Error: ", error);
        return null;
    }
}