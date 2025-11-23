"use strict";

const fs = require("fs");
const path = require("path");

// Détecte le dossier principal des pages
const pagesDir = fs.existsSync(path.join(__dirname, "app"))
  ? path.join(__dirname, "app")
  : fs.existsSync(path.join(__dirname, "pages"))
  ? path.join(__dirname, "pages")
  : null;

if (!pagesDir) {
  console.error("❌ Aucun dossier app/ ni pages/ trouvé !");
  process.exit(1);
}

// Fonction pour lister toutes les pages JS/TS/TSX
function listPages(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listPages(fullPath));
    } else if (entry.isFile() && [".js", ".ts", ".tsx"].some(ext => entry.name.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  return files;
}

const allPages = listPages(pagesDir);

// Sauvegarde dans pages-list.json
fs.writeFileSync("pages-list.json", JSON.stringify(allPages, null, 2), "utf-8");
console.log(`✅ Pages détectées : ${allPages.length}`);
console.log("📄 Liste complète enregistrée dans pages-list.json");
