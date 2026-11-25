<div align="center">

# RecordFlow | Multi-Step Records Form

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_Project-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://stepwise-records-form-2-mjs.vercel.app/)

### Enter information one step at a time, then keep your records saved.

A small React form exercise that collects a name, job, and age through a guided three-step flow and displays saved entries.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=20232A)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

## ✨ Features

- Three-step data entry: name, job, and age.
- Required-field checks before moving to the next step.
- Automatic focus on the active step's input.
- Enter key support to continue the form.
- Save completed records to a list.
- Delete an existing record.
- Persist saved rows in browser localStorage.
- Purple gradient page background with a centered form card.

## 🛠️ Built with

- React 19, JavaScript, Vite
- Tailwind CSS 4
- Browser localStorage

## ⚙️ Run locally

~~~bash
git clone https://github.com/modewika1-star/t16-todolist.git
cd t16-todolist
npm install
npm run dev
~~~

Production build:

~~~bash
npm run build
npm run preview
~~~

## 💾 Data persistence

Saved records are stored in the browser using the localStorage key `rows`. Data remains available in the same browser until its site storage is cleared. There is no cloud synchronization in the inspected app code.

---

**Repository:** [modewika1-star/t16-todolist](https://github.com/modewika1-star/t16-todolist)
