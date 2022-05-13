<h1>⚡️ Fuels UI - Example Applicatiton</h1>

<h2>📝&nbsp; Table of Content</h2>

- [🙋🏻&nbsp; Getting Started](#-getting-started)
- [🛠&nbsp; Tools used](#-tools-used)
- [🗃&nbsp; Systems Based Architecture](#-systems-based-architecture)
- [🛤&nbsp; Routes](#-routes)
- [📜&nbsp; License](#-license)

---

## 🙋🏻&nbsp; Getting Started

First, run the development server:

```bash
pnpm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying any `pages/` folder inside the `src/systems/`.
The page auto-updates as you edit the file.

## 🛠&nbsp; Tools used

| Name                                             | Description        |
| ------------------------------------------------ | ------------------ |
| **[@fuels-ui/css](../../design-system/css)**     | CSS-in-JS library  |
| **[@fuels-ui/react](../../design-system/react)** | Components library |
| **[React](https://reactjs.org/)**                | UI library         |
| **[React Router v6](https://reactrouter.com/)**  | Router library     |
| **[ViteJS](https://vitejs.dev/)**                | Bundler            |
| **[Jotai](https://jotai.org/)**                  | State management   |

## 🗃&nbsp; Systems Based Architecture

→ Like [DDD (Domain Driven Design)](https://en.wikipedia.org/wiki/Domain-driven_design), Systems Based Architecture trys to solve the scale problem we have in frontend applications.

→ Each system inside this architecture represents like a real "sub-system" of our entire application, being able to live almost alone and having your own definitions.

→ If you have some components, hook or whatever is you can put in the `Core` system. Inside it lives all global related stuff.

→ Some example of the main strucuture of a system can be:

```
📦 systems/Tokens
┃
┣ 📂 components           // components
┣ 📂 pages                // pages
┣ 📂 hooks                // hooks
┣ 📂 helpers              // helper functions
┣ 📂 services             // api related functions
┣ 📄 index.tsx            // out-point, export all things inside the system
┣ 📄 routes.tsx           // define and export all routes using React Router
```

## 🛤&nbsp; Routes

All routes exported from each system is imported on [`routes.tsx`](./src/routes.tsx)

## 📜&nbsp; License

The primary license for this repo is `Apache 2.0`, see [`LICENSE`](./LICENSE).
