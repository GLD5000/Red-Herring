import { userObjects } from './modules/view/userobjects.js';
import { variantMaker } from './modules/controllers/variantmaker.js';
import { gradientMaker } from './modules/controllers/gradientmaker.js';
import { paletteData } from './modules/controllers/palettedata.js';
import { paletteUi} from './modules/controllers/paletteui.js';
import {colourObject} from './modules/utilities/colourobject.js';
//console.log(paletteData);
paletteUi._init();
/* const testColour = {name:'test colour', tint: Math.random().toFixed(2), warmth: Math.random().toFixed(2), lightness: Math.random().toFixed(2)};
const colourArray = [];//[`t: ${testColour.tint} w: ${testColour.warmth} l: ${testColour.lightness} r: ${testColour.red} b: ${testColour.blue} g: ${testColour.green}`];
//colourArray.push('_convertTwltoSrgb');
colourObject._convertTwltoSrgb(testColour);
colourArray.push(`t: ${testColour.tint} w: ${testColour.warmth} l: ${testColour.lightness} r: ${testColour.red} b: ${testColour.blue} g: ${testColour.green}`);
//colourArray.push('_convertSrgbtoTwl');
colourObject._convertSrgbtoTwl(testColour);
colourArray.push(`t: ${testColour.tint} w: ${testColour.warmth} l: ${testColour.lightness} r: ${testColour.red} b: ${testColour.blue} g: ${testColour.green}`);
//colourArray.push('_convertTwltoSrgb');
colourObject._convertTwltoSrgb(testColour);
colourArray.push(`t: ${testColour.tint} w: ${testColour.warmth} l: ${testColour.lightness} r: ${testColour.red} b: ${testColour.blue} g: ${testColour.green}`);
//colourArray.push('_convertSrgbtoTwl');
colourObject._convertSrgbtoTwl(testColour);
colourArray.push(`t: ${testColour.tint} w: ${testColour.warmth} l: ${testColour.lightness} r: ${testColour.red} b: ${testColour.blue} g: ${testColour.green}`);
console.log(colourArray.join('\n'));
 */
