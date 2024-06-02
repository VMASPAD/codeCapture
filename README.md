# CodeCapture

CodeCapture is a web application designed to help developers quickly and easily capture and share code snippets in a visually appealing format. This project allows users to customize the appearance of their code snippets, including language syntax highlighting, theme, background, and padding, and then export the snippet as an image in various formats (PNG, JPG, WEBP).

## Features

- **Language Selection**: Users can select from a variety of programming languages to ensure accurate syntax highlighting. The selection updates the code editor in real-time.
- **Theme Customization**: Offers a selection of themes to change the appearance of the code editor, allowing users to match their preferences or presentation needs.
- **Background Customization**: Users can choose different backgrounds for their code snippet, enhancing the visual appeal of the exported image.
- **Padding Adjustment**: Provides options to adjust the padding around the code snippet, allowing for better control over the final layout.
- **Export Options**: The application supports exporting the code snippet as an image in PNG, JPG, or WEBP formats, making it easy to share across different platforms.

## Components

### Home

The main page where users interact with the application. It includes selectors for language, theme, background, and padding, and a dropdown menu for export options.

```tsx
function Home() {
  // Component code
}
Home Component
```
CodeEditor
A component that renders the code editor, allowing users to input and edit their code snippet. It also handles the dynamic resizing of the editor.
```tsx
function CodeEditor({languaje,theme,icon,background,currentPadding} : CodeEditorProps) {
  // Component code
}
```
CodeEditor Component

Footer
A simple footer component that displays a message.
```tsx
function Footer() {
  // Component code
}
```
Footer Component

Export Functions
The application includes three functions to handle the export of the code snippet in different formats: exportPng, exportJpg, and exportWebp. Each function prepares the code editor for export, captures it as a canvas, and then converts it to the desired image format.
```tsx
const exportPng = async () => {
  // Function code
}

const exportJpg = async () => {
  // Function code
}

const exportWebp = async () => {
  // Function code
}
```
Export Functions in Home Component

Configuration
The project uses Tailwind CSS for styling, with a custom configuration to define themes, colors, and responsive behavior.
```tsx
const config = {
  // Tailwind configuration
}
```
Tailwind Configuration

Getting Started
To run the project locally:

Clone the repository.
Install dependencies with npm install.
Start the development server with npm run dev.
Visit http://localhost:3000 to view the application.

Contribution
Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.
