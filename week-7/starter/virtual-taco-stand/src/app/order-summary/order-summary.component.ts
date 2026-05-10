import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../order/order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [ CommonModule ],
  template: `
  <h1>Order Summary</h1>
  @if (order.tacos.length > 0) {
    @for (taco of order.tacos; track taco; let i = $index) {
      <div class="line-item">
        <h3>Item {{ i + 1 }}: {{ taco.name }}</h3>
        <p>Quantity: {{ taco.quantity }}</p>
        <p>Unit Price: {{ taco.price | currency:'USD':'symbol':'1.2-2' }}</p>
        <p>Subtotal: {{ (taco.price * (taco.quantity ?? 1)) | currency:'USD':'symbol':'1.2-2' }}</p>
        @if (taco.noOnions || taco.noCilantro) {
          <p>Customizations:
            @if (taco.noOnions) { No onions }
            @if (taco.noCilantro) { No cilantro }
          </p>
        }
        <button (click)="removeTaco.emit(taco)">Remove Taco</button>
      </div>
    }
    <p><strong>Total:</strong> {{ getTotal() | currency:'USD':'symbol':'1.2-2' }}</p>
  } @else {
    <p>No tacos added to the order yet.</p>
  }
  `,
  styles: `
    .line-item {
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .line-item h3 {
      margin-top: 0;
    }
    .line-item p {
      margin: 5px 0;
    }
    button {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 3px;
    }
    button:hover {
      background-color: #d32f2f;
    }
  `
})
export class OrderSummaryComponent {
  @Input() order!: Order;
  @Output() removeTaco = new EventEmitter<any>();

  getTotal() {
    return this.order.tacos.reduce((acc, taco) => acc + (taco.price * (taco.quantity ?? 1)), 0);
  }
}
