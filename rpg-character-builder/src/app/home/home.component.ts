import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="grid-container">

      <div class="grid-item">
        <img src="/assets/goblin.png" alt="Goblin with a mace" class="grid-image">
      </div>

      <div class="grid-middle">
        <h2>Welcome to RPG Character Builder</h2>
        <p>Looking to plan your character for the next DnD campaign? Or perhaps gain inspiration for an upcoming novel? Well look no further, as you've found RPG Character Builder!</p>
        <p>Dive into endless possibilities with our immersive character builder! Explore thousands of unique combinations, tweak every detail, or craft a hero entirely from scratch. When your masterpiece is complete, save your character and bring them into your next adventure.</p>
        <p>Want to build a towering orc blood warrior? We can do that!</p>
        <p>How about a stealthy elf ranger? A bit generic, but we got you covered!</p>
        <p>Maybe a pigeon-toed goblin imp that wields a mannequin arm like a club? Firstly, get some help. Secondly, we can do that too!</p>
        <p>No matter how lofty your imagination is, you can realize it here at RPG Character Builder!
      </div>

      <div class="grid-item">
        <img src="/assets/mage_female.png" alt="Ranger standing heroically" class="grid-image">
      </div>

    </div>
  `,
  styles: `
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 20px;
      padding: 0px 20px;
      min-height: 80vh;
      align-items: center;
    }

    .grid-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .grid-image {
      max-width: 100%;
      height: auto;
    }

    .grid-middle {
      text-align: center;
      padding: 0% 20%;
    }
  `
})
export class HomeComponent {

}
