module.exports = {
    css:"./style.css",
    features:{
        "class-name-competition":
        true,
        "apply-completion": true,
        "screen-completion": true,
        "linting": true,
    },
    theme: {
        extend: {
            colors: {
              primary: '#309975',
            },
            screens: {
                'xs':'435px',
                // => @media (min-width: 435px) { ... }

                'sm': '640px',
                // => @media (min-width: 640px) { ... }
          
                'md': '768px',
                // => @media (min-width: 768px) { ... }
          
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
          
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
              }
        }
    }
}