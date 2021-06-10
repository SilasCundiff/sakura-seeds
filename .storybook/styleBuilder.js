import WebFont from 'webfontloader'
import { SakuraSeedHueOptions, SakuraSeedLightnessOptions } from '../src/themes/SakuraSeedColorThemes'
import { SakuraSeedPrimaryFontFace, SakuraSeedPrimaryFontWeights } from '../src/themes/SakuraSeedFontThemes'


const getHueValue = (value) => SakuraSeedHueOptions[value]
const getLightnessValue = (value) => SakuraSeedLightnessOptions[value]
const getFont = (value) => SakuraSeedPrimaryFontFace[value]
const getFontWeight = (value) => SakuraSeedPrimaryFontWeights[value]

// Builds a selection of styles to send to the theme builder
export const styleBuilder = (context) => {
  // Loads font Dynamically to reduce number of http requests on first page load
  fontLoader(context)

  // Retrieves the value from the select/state (user input) for colors, hues, fonts, and font weights
  const newStyles = {
    primaryHue: getHueValue(context.globals.primaryHue),
    primaryLightness: getLightnessValue(context.globals.primaryLightness),
    secondaryHue: getHueValue(context.globals.secondaryHue),
    secondaryLightness: getLightnessValue(context.globals.secondaryLightness),
    primaryFont: getFont(context.globals.primaryFont),
    primaryFontWeight: getFontWeight(context.globals.primaryFontWeight),
    secondaryFont: getFont(context.globals.secondaryFont),
    secondaryFontWeight: getFontWeight(context.globals.secondaryFontWeight),
  }
  return newStyles;
}

const fontLoader = (context) => {
  WebFont.load({
    google: {
      families: [
        context.globals.primaryFont, 
     `${context.globals.primaryFont}:100,300,500,700,900`, 
        context.globals.secondaryFont, 
     `${context.globals.secondaryFont}:100,300,500,700,900`
      ]
    }
  });
}