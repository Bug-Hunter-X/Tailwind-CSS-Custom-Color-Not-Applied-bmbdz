```javascript
// ... your Tailwind CSS configuration
module.exports = {
  // ... other configurations
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Make sure to include all relevant files
  theme: {
    extend: {
      colors: {
        'custom-color': '#abcdef',
      },
    },
  },
  plugins: [],
};
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div class="bg-custom-color p-4">
    This div should have a custom background color.
  </div>
</body>
</html>
```