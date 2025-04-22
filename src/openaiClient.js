const axios = require("axios");
const vscode = require("vscode");
const { getApiKey } = require("./keyManager");

async function getChatResponse(prompt, context) {
  const apiKey = await getApiKey(context);

  if (!apiKey) {
    vscode.window.showErrorMessage("❌ API key not set. Use 'Set OpenAI API Key' command.");
    return "API key not set.";
  }

  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: \`Bearer \${apiKey}\`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.choices[0].message.content.trim();
}

module.exports = { getChatResponse };
