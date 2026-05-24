import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SpecialRequest {
  customerName: string;
  requestText: string;
  spice: 'mild' | 'medium' | 'hot';
}

@Component({
  selector: 'app-special-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="special-request-container">
      <form class="special-request-form" #reqForm="ngForm" (ngSubmit)="submitRequest(); reqForm.reset();">
        <h1>Special Request</h1>

        <label for="customerName">Your Name</label>
        <input id="customerName" name="customerName" [(ngModel)]="customerName" />

        <label for="requestText">Special Request</label>
        <textarea id="requestText" name="requestText" rows="4" [(ngModel)]="requestText"></textarea>

        <label>Spice Level</label>
        <div class="spice-options">
          <label><input type="radio" name="spice" [(ngModel)]="spice" value="mild" /> Mild</label>
          <label><input type="radio" name="spice" [(ngModel)]="spice" value="medium" /> Medium</label>
          <label><input type="radio" name="spice" [(ngModel)]="spice" value="hot" /> Hot</label>
        </div>

        <input type="submit" value="Submit Request" [disabled]="!customerName || !requestText" />
      </form>

      <section class="requests-list">
        <h2>Special Requests</h2>
        @if (requests.length === 0) {
          <p class="no-requests">No special requests yet.</p>
        } @else {
          <div class="cards">
            @for (r of requests; track r) {
              <div class="request-card">
                <h3>{{ r.customerName }}</h3>
                <p class="spice">Preferred spice: {{ r.spice }}</p>
                <p class="request-text">{{ r.requestText }}</p>
              </div>
            }
          </div>
        }
      </section>
    </div>
  `,
  styles: `
    .special-request-container {
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .special-request-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      border: 1px solid #ddd;
      padding: 16px;
      border-radius: 6px;
      background: #fff;
    }

    input, textarea {
      padding: 8px;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
    }

    input[type="submit"] {
      width: 160px;
      align-self: flex-end;
      padding: 8px 12px;
    }

    .cards {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .request-card {
      border: 1px solid #ccc;
      padding: 12px;
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      background: #fff;
    }

    .spice {
      font-weight: 600;
      margin: 6px 0;
    }
  `
})
export class SpecialRequestComponent {
  customerName: string = '';
  requestText: string = '';
  spice: 'mild' | 'medium' | 'hot' = 'mild';

  requests: SpecialRequest[] = [];

  submitRequest() {
    const newReq: SpecialRequest = {
      customerName: this.customerName,
      requestText: this.requestText,
      spice: this.spice
    };

    this.requests.push(newReq);
    // reset fields
    this.customerName = '';
    this.requestText = '';
    this.spice = 'mild';
  }
}
