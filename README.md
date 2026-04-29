# Random Password Generator - implementing React hooks

This project is the implementation of core React hooks like useState, useEffect, useCallback and useRef.
It is a functional password generator

## Features
- Generate random passwords instantly  
- Adjustable password length (8–30)  
- Toggle numbers and special characters  
- One-click copy to clipboard  
- Toast notification on copy  

## Concepts Used
- useState → manage UI state (length, options, password)  
- useEffect → auto-generate password on changes  
- useCallback → memoize functions for performance  
- useRef → access input field for copy/select

## Tech Stack
- React  
- Tailwind CSS  
- React Toastify  

## How to Run
```bash
npm install
npm run dev