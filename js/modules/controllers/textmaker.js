import {colourObject} from '../utilities/colourobject.js'
import { paletteUi } from './paletteui.js';

export const textMaker = {
    updateText(backgroundColour) {
    const textMode = paletteUi.getTextMode();//Auto or custom
    const textColour = (textMode === 'custom')? paletteUi.getTextColour(backgroundColour): null;
    const newTextColour = colourObject.getTextColourContrast(textColour, backgroundColour);
    paletteUi.setTextColour(newTextColour);
    },
};