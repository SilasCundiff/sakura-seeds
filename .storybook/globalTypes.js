import { fontList } from './fontList'

export const types = {
    primaryHue: {
      name: 'primaryHue',
      description: 'A selection of hues from Sakura Seeds',
      defaultValue: 'gray',
      toolbar: {
        icon: 'circlehollow',
        items: ['gray','red','orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'],
      },
    },
    primaryLightness: {
      name: 'primaryLightness',
      description: 'A selection of lightness values to apply to the colors',
      defaultValue: '500',
      toolbar: {
        icon: 'circle',
        items: ['50','100', '200','300','400','500','600','700','800','900',],
      },
    },
    secondaryHue: {
      name: 'secondaryHue',
      description: 'A selection of hues from Sakura Seeds',
      defaultValue: 'gray',
      toolbar: {
        icon: 'circlehollow',
        items: ['gray','red','orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'],
      },
    },
    secondaryLightness: {
      name: 'secondaryLightness',
      description: 'A selection of lightness values to apply to the colors',
      defaultValue: '50',
      toolbar: {
        icon: 'circle',
        items: ['50','100', '200','300','400','500','600','700','800','900',],
      },
    },
    primaryFont: {
      name: 'primaryFont',
      description: 'Selection of fonts from the Theme',
      defaultValue: 'Pacifico',
      toolbar: {
        icon: 'google',
        items: [...fontList],
      },
    },
    primaryFontWeight: {
      name: 'primaryFontWeight',
      description: 'Select a primary font weight',
      defaultValue: 'regular',
      toolbar: {
        icon: 'listunordered',
        items: ["thin", "light", "regular", "bold", "black"],
      },
    },
    secondaryFont: {
      name: 'secondaryFont',
      description: 'Select a secondary font',
      defaultValue: 'Pacifico',
      toolbar: {
        icon: 'google',
        items: [...fontList],
      },
    },
    secondaryFontWeight: {
      name: 'secondaryFontWeight',
      description: 'Select a secondary font weight',
      defaultValue: 'regular',
      toolbar: {
        icon: 'listunordered',
        items: ["thin", "light", "regular", "bold", "black"],
      },
    },
  };