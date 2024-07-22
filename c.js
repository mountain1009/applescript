{
   animation: {
        'vibrate-1': 'vibrate-1 0.3s linear infinite both'
      },
      keyframes: {
        'vibrate-1': {
          '0%, to': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(var(--tw-translate-x-1), var(--tw-translate-y-1))' },
          '40%': { transform: 'translate(var(--tw-translate-x-2), var(--tw-translate-y-2))' },
          '60%': { transform: 'translate(var(--tw-translate-x-3), var(--tw-translate-y-3))' },
          '80%': { transform: 'translate(var(--tw-translate-x-4), var(--tw-translate-y-4))' }
        }
}
