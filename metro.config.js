const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Define the options you're passing to withNativeWind
const input = "./global.css"; // Path to your global CSS file
const inlineRem = true; // Or whatever value you need
const disableTypeScriptGeneration = false; // Set to true or false based on your preference
const Option = {}; // Define this object as necessary

module.exports = withNativeWind(config, {
  input, 
  inlineRem, 
  disableTypeScriptGeneration,
  tailwindConfig: './tailwind.config.js', // Correct path to your tailwind config
  ...Option
});
