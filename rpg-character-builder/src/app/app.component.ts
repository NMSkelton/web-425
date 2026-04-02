import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
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
          <a routerLink="/">Home</a>
          <a routerLink="/players">Players</a>
          <a routerLink="/character-faction">Factions</a>
          <a routerLink="/create-character">Create a Character</a>
          <a routerLink="/create-guild">Create a Guild</a>
          <a routerLink="/signin">Sign In</a>
        </div>
      </nav>

      <main class="content">
        <router-outlet></router-outlet>
      </main>

      <footer class="footer">
        <div class="footer-links">
          <a routerLink="/">Home</a>
          <a routerLink="/players">Players</a>
          <a routerLink="/character-faction">Factions</a>
          <a routerLink="/create-character">Create a Character</a>
          <a routerLink="/create-guild">Create a Guild</a>
          <a routerLink="/signin">Sign In</a>
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
