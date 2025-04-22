# 🤖 ChatGPTCode Assistant - VS Code Extension

This VS Code extension integrates ChatGPT directly into your editor, enabling AI-assisted code **review**, **correction**, and **generation**. Plus, it comes with a secure **API Key Manager** so you can safely use your OpenAI key.

---

## ✨ Features

- 💬 Interact with ChatGPT via command palette
- 🧠 Review selected code for bugs or improvements
- 🛠 Generate or refactor code with AI suggestions
- 🔐 Securely manage your OpenAI API key
- 📋 Copy responses directly to clipboard

---

## 🚀 Getting Started

### 1. Clone or Download

```bash
git clone https://github.com/ESOGenics/CodeEditorChatGPT.git
cd chatgpt-vscode-extension
```

Or [download the ZIP](https://github.com/ESOGenics/CodeEditorChatGPT/archive/refs/heads/main.zip) and unzip it.

### 2. Open in VS Code

```bash
code .
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Launch the Extension

- Press `F5` to open a new VS Code development window
- Try commands via `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)

---

## 🧠 Available Commands

| Command | Description |
|--------|-------------|
| `ChatGPT: Open Chat` | Ask ChatGPT anything |
| `ChatGPT: Review Code` | Right-click selected code to review |
| `ChatGPT: Set OpenAI API Key` | Securely store your key |
| `ChatGPT: Delete OpenAI API Key` | Remove stored key |

---

## 🔑 How API Key Works

We use VS Code's secure `SecretStorage` to manage your key safely.

1. Run `ChatGPT: Set OpenAI API Key`
2. Paste your [OpenAI API key](https://platform.openai.com/account/api-keys)
3. Key is stored securely on your system – **never shared**

---

## 📦 Packaging and Publishing

Want to publish it yourself?

```bash
npm install -g @vscode/vsce
vsce package
vsce publish
```

See the [official VS Code publishing guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) for details.

---

## 📸 Screenshots

> (Optional: Add screenshots of the extension UI here!)

---

## 🛡 License

MIT License © 2025 Robert Sexton

---

## 🙌 Contributing

PRs and suggestions welcome! Let’s build something awesome.
