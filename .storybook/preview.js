import { ThemeProvider } from 'styled-components';

import { types } from './globalTypes'
import { styleBuilder } from './styleBuilder'
import { themeBuilder } from './themeBuilder';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = types;





const withThemeProvider=(Story, context) => {
  
  const styles = styleBuilder(context);
  const theme = themeBuilder({...styles});
  
  return (
    <ThemeProvider theme={theme}>
        <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];