const vscode = require("vscode");
const { getChatResponse } = require("./src/openaiClient");
const { setApiKey, deleteApiKey } = require("./src/keyManager");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("chatgpt.openChat", async () => {
      const input = await vscode.window.showInputBox({ prompt: "Ask ChatGPT" });
      if (!input) return;

      const response = await getChatResponse(input, context);
      vscode.window.showInformationMessage(response);
    }),

    vscode.commands.registerCommand("chatgpt.reviewCode", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selectedCode = editor.document.getText(editor.selection);
      if (!selectedCode) return;

      const prompt = \`Review and suggest improvements for this code:\n\n\${selectedCode}\`;
      const response = await getChatResponse(prompt, context);

      vscode.window.showInformationMessage("ChatGPT response copied to clipboard.");
      vscode.env.clipboard.writeText(response);
    }),

    vscode.commands.registerCommand("chatgpt.setApiKey", () => setApiKey(context)),
    vscode.commands.registerCommand("chatgpt.deleteApiKey", () => deleteApiKey(context))
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
