# Tailwind CSS Custom Color Issue

This repository demonstrates a common issue encountered when using custom colors in Tailwind CSS.  The problem involves a custom color not being applied correctly to HTML elements, despite being correctly defined in the Tailwind configuration file.

The `bug.js` file shows the incorrect Tailwind configuration and the `bug.html` file shows the HTML where the color should be applied.

The solution is demonstrated in `bugSolution.js` and involves ensuring that the `content` array correctly includes all the relevant files where Tailwind CSS classes are being used, resolving any typos in color names, and verifying that the Tailwind CSS file is correctly linked.