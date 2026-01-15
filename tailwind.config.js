// tailwind.config.js
export default {
  theme: {
    extend: {
      screens: {
        // Default Tailwind breakpoints:
        sm: '640px',
        md: '768px',   // iPad Mini portrait
        lg: '1024px',  // iPad Pro landscape
        xl: '1280px',
        '2xl': '1536px',

        // Custom breakpoints for more control:
        ipadMini: '820px',   // covers iPad Mini landscape (~820px)
        ipadPro: '1024px',   // covers iPad Pro portrait/landscape
      },
    },
  },
}
