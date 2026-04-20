export interface Character {
  id: number;
  name: string;
  class: string;
  gender: string;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
      <div class="grid-container">
        <div class="grid-item">
          <form 
            class="character-form"
            #characterForm="ngForm"
            (ngSubmit)="createCharacter()" 
          >
          <h1>Create Your Character!</h1>

            <input
              type="text"
              name="name"
              [(ngModel)]="character.name"
              placeholder="Enter Character Name"
              required
              #name="ngModel"
            />

            <select
              name="class"
              [(ngModel)]="character.class"
              required
            >
              <option value="" disabled selected>Select Class</option>
              <option value="Warrior">Warrior</option>
              <option value="Mage">Mage</option>
              <option value="Rogue">Rogue</option>
            </select>

            <select
              name="gender"
              [(ngModel)]="character.gender"
              required
            >
              <option value="" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <button type="submit" [disabled]="characterForm.invalid">
              Create Character
            </button>
          </form>
        </div>
        <div class="character-list">
          <h1>Your Characters</h1>

          @for (character of characters; track character.id) {
            <ul class="player-item">
              <div class="card" [ngClass]="character.class">

                <h2>{{ character.name }}</h2>

                <p> 
                  <span class="label">Class: </span>
                  <span class="value">{{ character.class }}</span>
                </p>

                <p>
                  <span class="label">Gender: </span>
                  <span class="value">{{ character.gender }}</span>
                </p>

              </div>
            </ul>
          }
        </div>
        <div class="grid-item">
          <img src="/assets/warrior.png" alt="Warrior standing with sword and shield" class="grid-image">
        </div>
      </div>
  `,
  styles: [
    `
      h1 {
        font-family: "Metamorphous", sans-serif;
        color: #ffc750
      }

      .grid-container {
        display: grid;
        grid-template-columns: 2fr 1.5fr 2fr;
        gap: 20px;
        padding: 100px 20px 20px;
        min-height: 80vh;
        align-items: start;
      }

      .grid-item {
        display: flex;
        justify-content: center;
        align-items: center;
     }

      .character-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
        border-radius: 20px;
        background-color: #1e1e1e;
        border: 3px solid #afafaf;
      }

      .character-form input,
      .character-form select {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #555;
        font-family: "Faculty Glyphic", sans-serif;
        background-color: #2a2a2a;
        color: white;
        outline: none;
      }

      .character-form input:focus,
      .character-form select:focus {
        border-color: #ffc750;
      }

      .character-form button {
        padding: 10px;
        border-radius: 10px;
        border: none;
        font-family: "Faculty Glyphic", sans-serif;
        background-color: #ffc750;
        color: #1e1e1e;
        font-weight: bold;
        transition: 0.2s ease;
      }

      .character-form button:disabled {
        background-color: #666;
        cursor: not-allowed;
        transform: none;
      }

      .character-list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .grid-image {
        max-width: 100%;
        height: auto;
      }

      .card {
        padding: 10px;
        border-radius: 20px;
        border: 3px solid #afafaf;
        position: relative;
        z-index: 0;
      }

      .card > * {
        position: relative;
        z-index: 1;
      }
      
      .card::before {
        content: "";
        position: absolute;
        inset: 0;
        background-repeat: repeat;
        background-size: 100px 100px;
        opacity: 20%;
        z-index: 0;
      }

      .label {
        color: #afafaf;
      }

      .value {
        color: #ffffff;
        font-size: 1.2em;
      }

      .Mage {
        background-color:	#276e836c;
      }

      .Mage::before {
        background-image: url('/assets/mage_icon.png');
      }

      .Rogue {
        background-color:	#53306396;
      }

      .Rogue::before {
        background-image: url('/assets/rogue_icon.png');
      }

      .Warrior {
        background-color:	#8629298c;
      }

      .Warrior::before {
        background-image: url('/assets/warrior_icon.png');
      }
    `,
  ],
})

export class CreateCharacterComponent {
  characters: Character[] = [];
  character = {
    name: '',
    class: '',
    gender: ''
  };

  createCharacter() {

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: this.character.name,
      class: this.character.class,
      gender: this.character.gender
    };

    this.characters.push(newCharacter);
    
    this.resetForm();
  }

  resetForm() {
    this.character = {
      name: '',
      class: '',
      gender: '',
    }
  }
}