const vscode = require("vscode");

const KEY_NAME = "chatgpt-openai-api-key";

async function setApiKey(context) {
  const key = await vscode.window.showInputBox({
    prompt: "Enter your OpenAI API key",
    ignoreFocusOut: true,
    password: true,
  });

  if (key) {
    await context.secrets.store(KEY_NAME, key);
    vscode.window.showInformationMessage("✅ API key saved.");
  }
}

async function getApiKey(context) {
  return await context.secrets.get(KEY_NAME);
}

async function deleteApiKey(context) {
  await context.secrets.delete(KEY_NAME);
  vscode.window.showInformationMessage("🗑️ API key deleted.");
}

module.exports = { setApiKey, getApiKey, deleteApiKey };
