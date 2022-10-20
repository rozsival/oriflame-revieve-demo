# 👀 Oriflame – Revieve Demo

Demo implementation of Novage+ powered by Revieve emebed script.

## 💾 Installation

```bash
nvm use
yarn install
```

## 👨‍💻 Development

```bash
yarn dev
```

## ❗️ Important

- Revieve script is loaded asynchronously on the client in `useEffect` hook
- After load, the script binds global `Revieve` property to the `window` object
- TS declarations are created manually as Revieve does not provide them (needs better spec)
- Advisor should open `onClick` triggered by any link with a specific `href` (on any page)
