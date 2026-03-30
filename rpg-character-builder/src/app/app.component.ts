import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="layout">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&family=Metamorphous&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
      </head>

      <header class="banner">
        <img
          src="/assets/rpg_banner.png"
          alt="Banner image for RPG Character Builder"
          class="banner-img"
        >
      </header>

      <nav class="navbar">

        <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">Builder</a>
          <a href="#">Characters</a>
          <a href="#">About</a>
        </div>
      </nav>

      <main class="content">
        <router-outlet></router-outlet>
      </main>

      <footer class="footer">
        <div class="footer-links">
          <a href="#">Home</a>
          <a href="#">Builder</a>
          <a href="#">Characters</a>
          <a href="#">About</a>
        </div>

        <p class="copyright">
          © 2026 RPG Builder
        </p>
      </footer>

    </div>
  `,
  styles: [`
  `]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
