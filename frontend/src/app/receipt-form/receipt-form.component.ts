import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-receipt-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.css']
})
export class ReceiptFormComponent {
  receiptForm: FormGroup;
  fileToUpload: File | null = null;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.receiptForm = this.fb.group({
      purchaseDate: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      description: ['', Validators.required],
      receiptFile: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];

    // Max file size check: 5MB
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB.');
      event.target.value = ''; // clear the file input
      this.fileToUpload = null;
      this.receiptForm.get('receiptFile')?.setValue(null);
      return;
    }

    this.fileToUpload = file;
    if (file) {
      this.receiptForm.get('receiptFile')?.setValue(file);
    }
  }

  onSubmit() {
    if (this.receiptForm.valid && this.fileToUpload) {
      const formData = new FormData();
      formData.append('purchaseDate', this.receiptForm.get('purchaseDate')?.value);
      formData.append('amount', this.receiptForm.get('amount')?.value);
      formData.append('description', this.receiptForm.get('description')?.value);
      formData.append('receiptFile', this.fileToUpload);

      this.http.post('http://localhost:5175/api/receipts', formData).subscribe({
        next: (response) => {
          console.log('Backend response:', response);
          this.successMessage = 'Receipt submitted successfully!';

          this.receiptForm.reset();
          this.fileToUpload = null;

          const fileInput = document.getElementById('receiptFile') as HTMLInputElement;
          if (fileInput) {
            fileInput.value = '';
          }

          setTimeout(() => {
            this.successMessage = '';
          }, 5000);
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          alert('There was an error submitting the receipt.');
        }
      });
    } else {
      alert('Please fill all fields and upload a file.');
    }
  }
}
