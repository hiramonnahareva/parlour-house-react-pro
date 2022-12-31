module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#f63e7b",
        
          "secondary": "#f63e7b",
                  
          "accent": "#ffecf2",
                  
          "neutral": "#ffffff",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#3ABFF8",
                  
          "success": "#36D399",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
