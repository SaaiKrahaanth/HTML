# Form a Story Project

This project allows users to input data through a form to create a personalized story.

### Steps:
1. **Create a `<form>`** inside the `<body>` of `index.html` with `action="story.html"` and `method="GET"`.
2. **Add a submit button** with the value "Form My Story!".
3. **Add `<label>` and `<input>` elements** for users to provide answers:
   - For animals, adjectives, and verbs (e.g., "Animal", "Adjective", "Verb").
4. **Include different types of inputs** like:
   - Text (`<input type="text">`)
   - Number (`<input type="number">`)
   - Radio buttons for "Yes or No"
   - Dropdown (`<select>`) for speed options.
   - A `<datalist>` for motivational quotes.
   - A `<textarea>` for a meaningful message.
5. **Use the `<label>` and `<input>` association** to guide users on what data to provide.
6. **Validate input fields** by making them required with the `required` attribute.
7. **Add optional extras** like pre-selected values, placeholder text, and additional validations.

### Example Input Types:
- **Text Inputs**: For names of animals, adjectives, and verbs.
- **Radio Buttons**: For binary choices (e.g., "Yes" or "No").
- **Dropdown**: For selecting a speed option.
- **Datalist**: For a custom motivational quote.
- **Textarea**: For a longer user input (meaningful message).

This form creates an interactive, personalized story based on user input.
