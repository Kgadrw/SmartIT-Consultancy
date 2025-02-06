module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans your component files for class names
  ],
  presets: [require("nativewind/preset")], // Preset to work with NativeWind
  theme: {
    extend: {}, // You can extend the theme with custom values here
  },
  plugins: [], // Add any Tailwind plugins here if needed
};
