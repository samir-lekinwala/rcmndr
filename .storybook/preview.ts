import type { Preview } from '@storybook/react'
// import the generated tailwind css file so that
// we can use tailwind classes in our stories
import '../public/main.css'
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
