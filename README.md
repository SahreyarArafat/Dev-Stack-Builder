# Dev Stack Builder
Live link : https://dav-stack-builder.netlify.app/
## Description
Dev Stack Builder is a responsive web application designed for developers to explore various technologies across frontend, backend, database, styling, language, and DevOps categories. Users can inspect detailed technology cards, compare them, and assemble their ideal custom technology stack with real-time feedback and alerts.

## Technologies Used
* **React.js (Vite)** - For building fast, component-driven user interfaces.
* **Raw CSS / CSS Modules** - Custom styling with CSS variables for dynamic branding and theme flexibility.
* **React-Toastify** - For showing smooth, responsive alert toasts on user actions.
* **JSON** - Local dataset storage for technology options.

## Key Features
1. **Interactive Technology Catalog:** Browse 12+ technologies organized neatly with badges, ratings, difficulty levels, and descriptions in a responsive grid layout.
2. **Custom Stack Sidebar:** Add desired technologies to your personal stack panel, track selected counts, and easily remove items individually or clear the whole stack at once.
3. **Interactive Toast Feedback:** Immediate visual notifications powered by `react-toastify` whenever items are added, duplicated, or removed.

---

## React Questions & Answers
i. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. Basically, it lets us write HTML, like code right inside our JavaScript. It makes building components super easy because we don’t have to use complicated code to create elements.

ii. What is the difference between props and state?
Props are like data passed down from a parent component to a child component. The child can read them only.

State is internal data belonging to the component itself. It can change over time when the user does something  and we update it according to our need.

iii. What does the useState hook do, and where did you use it in this project?
useState is a tool that lets us save and update data in our component. In this project, I used it to keep track of the technology list, the loading spinner state, and whatever items the user adds to their stack.

iv. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect lets us run code automatically after the component loads on the screen. I needed it to fetch my technologies.json file right when the app opens up, so it grabs the data without freezing or breaking the page load.

v. Why does every item in a .map() list need a unique key prop?
When we loop through a list using .map(), React needs a way to tell the items apart. Giving each item a unique key helps React figure out quickly if an item was added, moved, or deleted, so it doesn't get confused.

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different things on the screen based on a true/false condition (like using a ternary operator ? :). I used it in my sidebar to check if the stack has items: if selectedStack.length === 0, it shows the "Your stack is empty" message; otherwise, it shows the list of added technologies!
