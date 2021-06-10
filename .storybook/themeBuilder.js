
// Builds a theme object based on the selected styles. Pass to a theme provider.
export const themeBuilder = (styles) => {
    
    const { primaryHue, primaryLightness, secondaryHue, secondaryLightness, primaryFont, primaryFontWeight, secondaryFont, secondaryFontWeight } = styles;
    
    const theme = {
      colors: {
        primaryColor: `hsl(${primaryHue}, ${primaryLightness})`,
        secondaryColor: `hsl(${secondaryHue}, ${secondaryLightness})`,
      },
      fonts: {
        primaryFont: {
          font: `${primaryFont}`,
          fontWeight: `${primaryFontWeight}`,
        },
        secondaryFont: {
          font: `${secondaryFont}`,
          fontWeight: `${secondaryFontWeight}`,
        }
      }
    }
  return theme;
}