# Employee Reimbursement Submission App

This is a full-stack web application built for a technical screening assignment. It allows university employees to submit reimbursement receipts by filling out a form with purchase details and uploading a receipt file. The form data is submitted to a .NET backend API, where it's validated and stored in a SQLite database.

---

## Features

- Enter purchase date
- Enter amount with validation (must be > 0)
- Enter description of the purchase
- Upload a receipt file (PDF, PNG, JPG only)
- Validates file type and limits size to max 5MB
- Success message is displayed after submission
- Form and file input are cleared after successful submission
- Receipt data is stored in SQLite database
- Uploaded files are saved to `wwwroot/uploads` on the backend

---

## Tech Stack

| Layer      | Tech Used                         |
|------------|-----------------------------------|
| Frontend   | Angular 17 (Standalone Components, Reactive Forms) |
| Backend    | .NET 8 Web API with ASP.NET Core  |
| Database   | SQLite + Entity Framework Core    |
| Styling    | Plain CSS (custom card layout)    |

### Why I chose this stack

- Angular and .NET are modern, enterprise-grade frameworks
- The stack provides clean separation between frontend and backend
- It's aligned with the technologies mentioned in the task description
- I'm comfortable and productive with both Angular and .NET

---

## How to Run This App

### Backend (.NET)

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend

2. Run the backend:
   ```bash
   dotnet run

3. The API runs at: `http://localhost:5175`
Make sure you have .NET 8 SDK installed.

### Frontend (Angular)

1. Navigate to frontend directory
   ```bash
   cd frontend

2. Install dependencies (if not already):
   ```bash
   npm install

3. Run the app:
   ```bash
   ng serve
4. Open your browser: `http://localhost:4200`

## Time Tracking

- **Estimated Time:** 4 hours  
- **Actual Time Spent:** 8 hours

I spent extra time refining the UI, handling edge cases, validating files, resetting the form state properly, and resolving technical issues like CORS and HTTPS delays.

## Business Rules & Assumptions
- All fields are required (purchase date, amount, description, file)
- Amount must be greater than 0
- Only file types allowed: .pdf, .jpg, .jpeg, .png
- Maximum file size: 5MB
- File names are saved using GUIDs to avoid conflicts
- Files are stored in wwwroot/uploads
- Purchase date should not be in the future (assumed, not enforced)

## Coding Practices & Highlights
- Used Angular Reactive Forms for strong validation and control
- Handled file input reset after submission (often overlooked)
- Displayed success message inline (not just alert())
- Validated file size and type before submission
- Used DTO in backend to cleanly receive multipart form data
- Automatically creates the uploads folder if it doesn't exist
- CORS enabled to allow frontend-backend communication
- Clean UI layout with clear title and structured form

## Comments
## Assumptions Made
- One receipt per submission
- Files can be stored locally in the backend server
- Database is pre-created using EF Core migrations

## Problems Encountered & Solved
- File input did not reset after submission — fixed with manual DOM reset
- Success alert was intrusive — replaced with an inline success message for better UX
- Backend was slow due to HTTPS → disabled UseHttpsRedirection in dev
- Angular → .NET requests blocked → fixed with CORS in Program.cs
- File upload initially allowed any type — added frontend validation and accept attribute to restrict to .pdf, .jpg, .jpeg, .png
- Uploaded PDF looked corrupted — clarified that it’s expected binary content and confirmed it displays correctly in PDF viewers

## Highlights in the Code
- Separation of concerns with DTOs and EF entities
- Clean, professional styling using custom CSS
- Clear structure in both frontend and backend folders
- User-friendly interactions (filename display, inline messages)