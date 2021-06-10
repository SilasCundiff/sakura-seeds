import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader'
import { SakuraSeedHueOptions, SakuraSeedLightnessOptions } from '../src/themes/SakuraSeedColorThemes'
import { SakuraSeedPrimaryFontFace } from '../src/themes/SakuraSeedFontThemes'


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
    name: 'fonts',
    description: 'Selection of fonts from the Theme',
    defaultValue: 'Pacifico',
    toolbar: {
      icon: 'listunordered',
      items: [  'Poppins', 'Pacifico', 'Exo'],
    },
  },
};


const themeBuilder = (primaryHue, primaryLightness, secondaryHue, secondaryLightness, primaryFont) => {
    const theme = {
      colors: {
        primaryColor: `hsl(${primaryHue}, ${primaryLightness})`,
        secondaryColor: `hsl(${secondaryHue}, ${secondaryLightness})`,
      },
      fonts: {
        primaryFont: {
          font: `${primaryFont}`,
          fontWeight: 500,
        }
      }
    }
  return theme;
}

const getHueValue = (value) => SakuraSeedHueOptions[value]
const getLightnessValue = (value) => SakuraSeedLightnessOptions[value]
const getFonts = (value) => SakuraSeedPrimaryFontFace[value]


const withThemeProvider=(Story, context) => {

  WebFont.load({
    google: {
      families: [context.globals.fonts]
    }
  });


  const primaryHue = getHueValue(context.globals.primaryHue);
  const primaryLightness = getLightnessValue(context.globals.primaryLightness);
  const secondaryHue = getHueValue(context.globals.secondaryHue);
  const secondaryLightness = getLightnessValue(context.globals.secondaryLightness);
  const primaryFont = getFonts(context.globals.fonts);
  console.log(`primaryFont`, primaryFont)
  const theme = themeBuilder(primaryHue, primaryLightness, secondaryHue, secondaryLightness, primaryFont);
  console.log(`theme`, theme);
  
  return (
    <ThemeProvider theme={theme}>
        <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];