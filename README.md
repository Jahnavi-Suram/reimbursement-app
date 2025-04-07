# Employee Reimbursement Submission App

This is a full-stack web application built for a technical screening assignment. It allows university employees to submit reimbursement receipts by filling out a form with purchase details and uploading a receipt file. The form data is submitted to a .NET backend API, where it's validated and stored in a SQLite database.

---

## Features

- Enter purchase date
- Enter amount with validation (must be > 0)
- Enter description of the purchase
- Upload a receipt file (PDF, PNG, JPG only)
- Validates file type and limits size to max 5MB
- Success message is displayed
- Form and file input are cleared after successful submission
- Receipt data stored in SQLite database
- Uploaded files saved to `wwwroot/uploads` folder on backend

---

## Tech Stack

| Layer      | Tech Used                         |
|------------|-----------------------------------|
| Frontend   | Angular 17 (Standalone Components, Reactive Forms, HttpClient) |
| Backend    | .NET 8 Web API with ASP.NET Core  |
| Database   | SQLite + Entity Framework Core    |
| Styling    | Plain CSS (custom card layout)    |

I chose Angular and .NET because:
- They're modern and robust technologies used widely in enterprise apps
- I’m comfortable using them in real-world, structured projects
- They align well with the technologies mentioned in the task prompt

---

## How to Run This App

### Backend (.NET)

1. Navigate to `backend/`
2. Run the app:
   ```bash
   dotnet run
