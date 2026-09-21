import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
â¢°â¢†â €â €â €â €â €â €â €â €â €â €â €â €â €â €â €
â¢¸â ˆâ ³â¡„â €â €â €â €â €â €â €â£ â žâ¡‡â €â €â €
â ¸â¡€â €â ˆâ ²â šâ ‰â ‰â “â –â Šâ â¢°â ƒâ €â €â €
â¢°â ƒâ¢€â£¤â¡€â €â €â €â¢€â£¤â£„â €â¢¾â¡€â €â €â €
â¡œâ €â ˜â ¿â ‡â¡€â €â¢€â ˜â ¿â Ÿâ €â €â¡†â €â €â €
â¡‡â ˜â ‡â †â €â “â ›â šâ €â €â ˜â ‡â ƒâ¡‡â£€â¢€â¡€
â ™â ¦â£„â¡€â €â €â €â €â €â €â¢€â£ â ´â ƒâ ¹â¡¿â ƒ
â €â£ â ƒâ¢ â ”â ‚â ‰â¡†â €â €â  â ”â ’â šâ¢±â €â €
â €â¡â šâ €â €â¡ â Šâ €â €â €â €â¢ â¡¤â ´â ƒâ €â €
â¢˜â â €â €â €â â €â €â €â €â €â €â¡‡â €â €â €â €
`));
console.log(chalk.hex("#00c2ff")("Baileys ZorTrace â€” a Baileys-based WhatsApp Web library\n"));
console.log(chalk.gray("Stay updated with the latest Baileys ZorTrace news:"));
console.log(chalk.cyan("https://github.com/ZorTrace/baileys\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map