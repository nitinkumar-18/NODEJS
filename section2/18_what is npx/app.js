#!/usr/bin/env node
// ek js file hai npx



//Use npm when:

// You need a library in project
// 👉 npm i express

// You will use it again and again

// It's a dependency

// Use npx when:

// You want to run a tool once
// 👉 npx create-vite

// CLI tools

// project generators

// testing packages

// scripts


// search karo try karo change karo customise karo  





// npm = install & manage
// npx = find & run

// npm = storage
// npx = execution

// npm = dependency system
// npx = command system
















// 🧠 npm vs npx (Deep Comparison Table)
// Feature	npm	npx
// Full form	Node Package Manager	Node Package eXecute
// Type	Package Manager	Package Runner
// Kaam	Packages install/manage	Packages run/execute
// Install karta hai	✅ Yes	❌ No (temporary)
// Execution	Indirect	Direct
// node_modules	Use karta hai	Use karta hai (check karta hai)
// Global install	Supported (-g)	Not needed
// package.json	Update karta hai	❌ Update nahi karta
// package-lock.json	Generate karta hai	❌
// Disk usage	High	Low
// Cache	Permanent	Temporary
// Cleanup	Manual	Auto
// Version control	Manual	Auto picks correct
// Pollution	High (global tools)	Low
// Speed (first time)	Fast	Slight slow (download)
// Speed (reuse)	Fast	Fast (cache)
// Security	More attack surface	Safer
// CI/CD usage	Install + run	Direct run
// CLI tools	❌ Not ideal	✅ Best
// Libraries	✅ Best	❌ Not used
// Project generators	❌	✅ Best
// Dev workflow	Dependency mgmt	Execution workflow
// 📦 Example Usage Table
// Task	npm	npx
// Install express	npm i express	❌
// Run vite	❌	npx vite
// Create React app	❌	npx create-react-app
// Use eslint	npm i eslint	npx eslint
// One-time tool	❌	✅
// Permanent lib	✅	❌
// Global tool	npm i -g nodemon	❌
// Temporary CLI	❌	npx nodemon
// 🧠 Mental Model Table
// Thought	Tool
// “Install karna hai”	npm
// “Run karna hai”	npx
// “Project dependency chahiye”	npm
// “Bas ek baar use”	npx
// “Library import karni hai”	npm
// “Command chalani hai”	npx
// 🔥 Pro Developer Rule Table
// Situation	Best Tool
// CLI tools	npx
// Generators	npx
// Libraries	npm
// Frameworks	npm
// Scaffolding	npx
// Global installs	Avoid
// CI/CD	npx
// Version conflicts	npx
// Clean system	npx
// 🧩 Internal Flow Table
// Step	npm	npx
// Registry hit	✅	✅
// Download	✅	✅
// Save	✅	❌
// Execute	❌	✅
// Cache	npm cache	temp cache
// Delete	❌	✅
// 🧠 One-line Summary Table
// Tool	Meaning
// npm	Install & Manage
// npx	Find & Run