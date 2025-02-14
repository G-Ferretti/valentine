import {definePreset, palette} from '@primeng/themes';
import Material from '@primeng/themes/material';


export const defaultPink = palette('#ff85a1');
export const defaultWhite =  palette('#faedcd');

export const valentine = definePreset(Material, {
  semantic: {
    surface: defaultPink,
    colorScheme: {
      light: {
        content: {
          background: defaultWhite[500]
        },
      }
    }
  }
})
