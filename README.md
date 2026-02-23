# Expense Tracker

A modern, responsive web application for tracking personal expenses with full CRUD (Create, Read, Update, Delete) functionality built with jQuery and vanilla JavaScript.

## 📋 Features

- ✅ **Create Expenses**: Add new expense records with date, title, and amount
- ✅ **Read/Display**: View all expenses in a clean, organized table
- ✅ **Update Expenses**: Edit existing expenses and save changes
- ✅ **Delete Expenses**: Remove expenses from the tracker
- ✅ **Real-time Total**: Automatically calculate and display total expenses
- ✅ **Form Validation**: Comprehensive input validation with user-friendly error messages
- ✅ **Persistent Storage**: LocalStorage integration to save expenses across browser sessions
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Modern UI**: Smooth animations, hover effects, and professional styling

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and form elements
- **CSS3**: Modern styling with CSS variables, gradients, flexbox, and grid
- **JavaScript (ES6+)**: Core application logic
- **jQuery 3.6.0**: DOM manipulation and event handling
- **LocalStorage API**: Client-side data persistence

## 📁 Project Structure

```
CRUD_JQuery lab/
├── index.html          # Main HTML file with form and table
├── styles.css          # Modern responsive CSS styling
└── README.md           # Project documentation
```

## 🚀 Setup Instructions

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required

### Installation

1. **Clone or Download** the project files
2. **Navigate** to the project directory:
   ```bash
   cd "CRUD_JQuery lab"
   ```
3. **Open** `index.html` in your browser:
   - Double-click the file, or
   - Right-click → Open with → Browser

That's it! The app runs entirely in the browser with no dependencies to install.

## 📖 Usage Guide

### Adding an Expense

1. Select a **Date** from the date picker
2. Enter an **Title** (e.g., "Lunch", "Gas", "Movie ticket")
3. Enter the **Amount** (must be greater than $0.00)
4. Click **"Add Expense"**
5. The expense appears in the table and total updates automatically

### Editing an Expense

1. Locate the expense in the table
2. Click the **Edit** button (orange)
3. The form fields populate with the expense data
4. The submit button changes to **"Update Expense"**
5. Modify the values as needed
6. Click **"Update Expense"** to save changes
7. Form resets and button returns to "Add Expense"

### Deleting an Expense

1. Locate the expense in the table
2. Click the **Delete** button (red)
3. The expense is removed immediately
4. Total updates automatically

### Viewing Total

The **Total Expenses** section displays the sum of all expenses in real-time and updates after every add, edit, or delete operation.

## 💾 Data Persistence

All expenses are automatically saved to your browser's LocalStorage under the key `expenses_v1`. This means:

- ✅ Expenses persist across browser restarts
- ✅ Each browser profile has its own separate expense list
- ✅ Clearing browser cache will delete all stored expenses

## 🔒 Form Validation

The application includes comprehensive form validation that prevents:

- ❌ Submitting with an empty date
- ❌ Submitting with an empty title
- ❌ Entering invalid amount values (non-numeric)
- ❌ Entering negative or zero amounts

Each validation failure displays a specific error message to guide the user.

## 🎨 UI/UX Features

### Responsive Design

- **Desktop**: Full 3-column form layout + wide table
- **Tablet (768px)**: 2-column form layout
- **Mobile (<640px)**: Single-column stacked layout

### Interactive Elements

- Smooth button hover animations with lift effect
- Input focus states with glowing blue border
- Table row hover highlights for better interactivity
- Gradient backgrounds and modern shadows

### Color Scheme

- **Primary (Accent)**: Indigo (`#4f46e5`)
- **Danger (Delete)**: Red (`#ef4444`)
- **Warning (Edit)**: Amber (`#f59e0b`)
- **Background**: Soft gradient blue

## 🔧 Code Structure

### HTML (`index.html`)

- Form with inputs for date, title, and amount
- Dynamic data table with Edit/Delete action buttons
- Total expenses display section
- jQuery CDN and custom script

### CSS (`styles.css`)

- CSS custom properties (variables) for consistent theming
- Flexbox and CSS Grid for layouts
- Smooth transitions and hover effects
- Mobile-first responsive design with breakpoints

### JavaScript (in `index.html`)

- **save()**: Persists expenses to LocalStorage
- **renderTable()**: Dynamically renders expense rows
- **calculateTotal()**: Sums and displays total expenses
- **resetForm()**: Clears form and resets edit state
- **Event Handlers**: Form submit, edit/delete button clicks
- **Form Validation**: Validates date, title, and amount inputs

## 🐛 Troubleshooting

**Expenses not saving?**

- Check if LocalStorage is enabled in your browser
- Try clearing the browser cache and reloading

**Form not validating?**

- Ensure all fields are filled before submitting
- Check browser console (F12) for any JavaScript errors

**Styling looks broken?**

- Make sure `styles.css` is in the same directory as `index.html`
- Clear browser cache and do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 📝 Example Workflow

1. Add "Grocery Shopping" on 2024-02-15 for $45.99
2. Add "Gas" on 2024-02-16 for $52.50
3. Total shows $98.49
4. Edit first expense to $50.00
5. Total updates to $102.50
6. Delete second expense
7. Total shows $50.00

## 🎓 Learning Resources

This project demonstrates:

- DOM manipulation with jQuery
- Event delegation for dynamic elements
- Browser's LocalStorage API
- Form validation and error handling
- Responsive CSS Grid and Flexbox layouts
- ES6+ JavaScript (arrow functions, template literals)

## 📄 License

Free to use and modify for personal and educational purposes.

## 👨‍💻 Author Notes

Sujan Adhikari

Built as a practical CRUD application for learning jQuery and client-side web development. Perfect for beginners learning front-end fundamentals!

---

**Last Updated**: February 23, 2026
