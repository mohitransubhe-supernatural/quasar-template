// ...

// These are the conflicting classes between Quasar and Tailwind. They may change in the future.
// const conflictingClasses = [
//   // flex must be treated separately
//   "order-first",
//   "order-last",
//   "cursor-not-alowed",
//   "cursor-pointer",
//   "block",
//   "inline-block",
//   "text-justify",
//   "hidden",
//   "invisible",
//   "overflow-auto",
//   "overflow-hidden",
// ];
// The plugin takes an object where the keys are the selectors and the values are the properties (or list of properties) to remove or all properties with "*".
// const removeObj = {
//   ...Object.fromEntries(conflictingClasses.map((cc) => [`.${cc}`, "*"])), // Removes all properties from conflicting classes
//   body: ["font-family", "font-size"], // You can also remove things like fonts and colors.
//   ".row, .column, .flex": "flex-wrap", // Turns out rules defining multiple classes must be targetted as a whole.
// };

module.exports = {
  plugins: [
    // to edit target browsers: use "browserslist" field in package.json
    // require("tailwindcss"),
    require("autoprefixer"),
  ],
};
