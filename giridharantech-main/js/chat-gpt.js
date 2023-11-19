const API_ENDPOINT = "https://api.openai.com/v1/engines/davinci-codex/completions";

// Replace YOUR_API_KEY with your actual API key
const API_KEY = "YOUR_API_KEY";

async function generateText(promptText) {
  const requestBody = {
    prompt: promptText,
    max_tokens: 100,
    temperature: 0.7,
    n: 1,
    stop: "\n",
  };

  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();
  const generatedText = data.choices[0].text.trim();
  return generatedText;
}

// // Example usage
// generateText("Hello, ChatGPT!").then((generatedText) => {
//   console.log(generatedText);
// });
