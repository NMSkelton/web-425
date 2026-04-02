import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img
          src="/assets/VirtualTacoStand.png"
          alt="website banner for virtual taco stand"
          class="banner-img"
        >
      </header>

      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/daily-specials">Daily Specials</a></li>
            <li><a href="/feedback">Feedback</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> |
          <a href="/menu">Menu</a> |
          <a href="/order">Order</a> |
          <a href="/daily-specials">Daily Specials</a> |
          <a href="/feedback">Feedback</a>
        </nav>
        <p>&copy; 2024 Virtual Taco Stand</p>
      </footer>
    </div>
  `,
  styles: [`
  `]
})
export class AppComponent {
}
