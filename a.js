{
  keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(3px)' },
          '75%': { transform: 'translateX(-3px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
}
