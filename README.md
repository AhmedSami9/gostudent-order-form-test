# GoStudent Order Form Test

This project is a React + TypeScript order form inspired by the GoStudent checkout experience.

The landing section was added to improve user conversion and provide context before filling the registration form.

## Features

* Dynamic pricing based on selected package
* Form validation
* Touched-field validation behavior
* Country switcher
* RTL support
* Translation system
* Payment method selection
* Responsive design
* WordPress plugin wrapper using shortcode

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* CSS Grid / Flexbox
* WordPress Plugin Shortcode

## Project Structure

```txt
gostudent-order-test
├── app
│   └── React source code
│
├── wordpress-plugin
│   └── gostudent-order-form
│       ├── gostudent-order-form.php
│       └── assets
│           ├── app.js
│           └── style.css
│
└── README.md
```

## Run React App Locally

```bash
cd app
npm install
npm run dev
```

Open:

```txt
http://localhost:5173
```

## Build For WordPress

```bash
cd app
npm run build
```

The build files will be generated inside:

```txt
wordpress-plugin/gostudent-order-form/assets
```

## WordPress Installation

Copy this folder:

```txt
wordpress-plugin/gostudent-order-form
```

Paste it inside:

```txt
wp-content/plugins/
```

Then:

1. Open WordPress Dashboard
2. Go to Plugins
3. Activate **GoStudent Order Form**
4. Create a new page
5. Add this shortcode:

```txt
[gostudent_order_form]
```

6. Publish the page

## Architecture

The UI is built as a standalone React widget.

The WordPress plugin registers the compiled JavaScript and CSS files and exposes the application through a shortcode.

This approach makes the widget reusable across different WordPress themes and pages.

## Notes

* Pricing logic is separated from UI logic
* Validation rules are isolated in a utility file
* Translation is handled using a simple dictionary-based approach
* Layout uses CSS Grid and Flexbox
* Smaller UI pieces use reusable Tailwind-based components
