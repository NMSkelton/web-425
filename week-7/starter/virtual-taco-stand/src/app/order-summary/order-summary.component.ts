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
   <p class="item">Item {{ i + 1 }}:</p>
    <ul>
    <li class="line-item">

          <strong>{{ taco.quantity }}x {{ taco.name }}</strong>

          <p>Price per taco: {{ taco.price | currency:'USD':'symbol':'1.2-2' }}</p>

          <p>Subtotal: {{ (taco.price * (taco.quantity ?? 1)) | currency:'USD':'symbol':'1.2-2' }}</p>

          @if (taco.noOnions || taco.noCilantro) {

              @if (taco.noOnions) { No onions }
                <br />
                <br />
              @if (taco.noCilantro) { No cilantro }
                <br />
                <br />


          }
</li>
    </ul>

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
      border: 2px solid #9e9e9e;
      border-radius: 5px;
      background-color: #e9e9e9;
    }
    .line-item h3 {
      margin-top: 0;
    }
    .line-item p {
      margin: 5px 0;
    }

    ul {
      list-style-type: none;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `
})
export class OrderSummaryComponent {
  @Input() order!: Order;

  getTotal() {
    return this.order.tacos.reduce((acc, taco) => acc + (taco.price * (taco.quantity ?? 1)), 0);
  }
}
