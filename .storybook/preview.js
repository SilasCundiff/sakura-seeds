import { ThemeProvider } from 'styled-components';

import { SakuraSeedHueOptions, SakuraSeedLightnessOptions } from '../src/themes/SakuraSeedColorThemes'
import { SakuraSeedFontThemes } from '../src/themes/SakuraSeedFontThemes'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
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
  fonts: {
    name: 'Fonts',
    description: 'Selection of fonts from the Theme',
    defaultValue: 'default',
    toolbar: {
      icon: 'listunordered',
      items: ['default', 'Poppins', 'Roboto'],
    },
  },
};


const themeBuilder = (primaryHue, primaryLightness, secondaryHue, secondaryLightness) => {
    const theme = {
      colors: {
        primaryColor: `hsl(${primaryHue}, ${primaryLightness})`,
        secondaryColor: `hsl(${secondaryHue}, ${secondaryLightness})`,
      },
    }
  return theme;
}

const getHueValue = (value) => SakuraSeedHueOptions[value]
const getLightnessValue = (value) => SakuraSeedLightnessOptions[value]
// const getColors = (primaryHue, primaryLightness, secondaryHue, secondaryLightness) => {
  
// }


const getFontsTheme = (value) => SakuraSeedFontThemes[value]

// const getColorsTheme = (themeName) => {
//   return SakuraSeedColorThemes[themeName]
// }
// const getFontsTheme = (themeName) => {
//   return SakuraSeedFontThemes[themeName]
// }
// const getColorsTheme = (themeName) => {
//   return SakuraSeedColorThemes[themeName]
// }
// const getFontsTheme = (themeName) => {
//   return SakuraSeedFontThemes[themeName]
// }

const withThemeProvider=(Story,context)=>{
  const primaryHue = getHueValue(context.globals.primaryHue);
  const primaryLightness = getLightnessValue(context.globals.primaryLightness);
  const secondaryHue = getHueValue(context.globals.secondaryHue);
  const secondaryLightness = getLightnessValue(context.globals.secondaryLightness);
  const theme = themeBuilder(primaryHue, primaryLightness, secondaryHue, secondaryLightness);
  console.log(`theme`, theme);
  
  const themeFonts = getFontsTheme(context.globals.fonts);
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={themeFonts}>
        <Story {...context} />
      </ThemeProvider>
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];