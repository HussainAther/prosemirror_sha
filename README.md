

# ProseMirror Autocomplete Editor

This is a rich-text editor built with ProseMirror that provides autocomplete functionality for hashtags (`#`), mentions (`@`), and related ideas (`<>`). This project demonstrates a custom implementation of an autocomplete feature using ProseMirror in a React application, ideal for enhancing text editing with intelligent suggestions.

## Features

- **Autocomplete Suggestions**: Automatically suggests hashtags, mentions, and related terms as you type.
- **Keyboard Navigation**: Navigate through suggestions using arrow keys and select with Enter or Tab.
- **Customizable**: Easily extend the list of suggestions with your own data sources.
- **Responsive and Accessible**: Built with accessibility in mind, supporting keyboard navigation and screen readers.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/HussainAther/prosemirror_sha.git
cd prosemirror_sha
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Running Tests

The project includes tests to verify the functionality of the editor:

```bash
npm test
```

Make sure all tests pass successfully before making any changes or submitting pull requests.

## Usage

- **Typing Triggers**: Start typing with `#`, `@`, or `<>` to activate autocomplete suggestions.
- **Selecting Suggestions**: Use the up and down arrow keys to navigate suggestions. Press Enter or Tab to select a suggestion.
- **Customization**: Modify the autocomplete plugin to add new triggers or data sources as needed.

## Project Structure

- **`src/components`**: Contains all React components, including the editor (`ProseMirrorEditor.js`), autocomplete suggestions (`AutocompleteSuggestions.js`), and supporting components.
- **`src/plugins`**: Includes the ProseMirror plugin (`autocomplete.js`) that manages the autocomplete functionality.
- **`public`**: Static assets and the main `index.html`.
- **`README.md`**: Project documentation (you're reading it!).

## Customization and Extensions

You can easily customize the editor and autocomplete functionality by modifying the plugin configuration in `src/plugins/autocomplete.js`. Add new triggers, update the list of suggestions, or tweak the filtering logic to match your requirements.

## Deployment

To deploy the project, build the application with:

```bash
npm run build
```

This will generate a `build` directory with the production-ready application. Deploy this directory to your preferred hosting platform (e.g., Vercel, Netlify, GitHub Pages).

## Known Issues and Limitations

- **Large Datasets**: Performance may degrade with very large datasets for suggestions. Consider implementing lazy loading or pagination for extensive lists.
- **Multiple Triggers**: Ensure the editor handles multiple triggers correctly in the same line or paragraph.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch for your feature or bug fix, and submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- **ProseMirror**: A toolkit for building rich-text editors on the web.
- **React**: A JavaScript library for building user interfaces.

