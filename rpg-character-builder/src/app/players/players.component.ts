import { Component } from '@angular/core';

export interface PlayersItem {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&family=Metamorphous&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
      </head>

      <ul class="players-container">
        @for (item of players; track item) {
          <li class="player-item">
            <h1>{{ item.name }}</h1>
            <div class="card"
              [ngClass]="{
                'mage': item.class.includes('Mage'),
                'rogue': item.class.includes('Rogue'),
                'warrior': item.class.includes('Warrior'),
              }">
              <p>
                <span class="label">Gender   </span>
                <span class="value">{{ item.gender }}</span>
              </p>
              <p>
                <span class="label">Class Specialization:   </span>
                <span class="value">{{ item.class }}</span>
              </p>
              <p>
                <span class="label">Faction:   </span>
                <span class="value">{{ item.faction }}</span>
              </p>
              <p>
                <span class="label">Starting Zone:   </span>
                <span class="value">{{ item.startingLocation }}</span>
              </p>
              <p>
                <span class="label">Fun Fact:   </span>
                <span class="value">{{ item.funFact }}</span>
              </p>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [ `

      h1 {
        font-family: "Metamorphous", sans-serif;
        color: #ffc750
      }

      .players-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }

      .player-item {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
      }

      .card {
        padding: 20px;
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

      .mage {
        background-color:	#276e836c;

      }

      .mage::before {
        background-image: url('/assets/mage_icon.png');
      }

      .rogue {
        background-color:	#53306396;
      }

      .rogue::before {
        background-image: url('/assets/rogue_icon.png');
      }

      .warrior {
        background-color:	#8629298c;
      }

      .warrior::before {
        background-image: url('/assets/warrior_icon.png');
      }
    `
  ]
})
export class PlayersComponent {
  players: PlayersItem[];

  constructor() {
    this.players = [
      {
        name: 'Aeriador',
        gender: 'Male',
        class: 'Rogue',
        faction: 'Kaldorei',
        startingLocation: 'Shadowglen',
        funFact: 'This was the one that started it all.',
      },
      {
        name: 'Aer',
        gender: 'Male',
        class: 'Warrior',
        faction: 'Draenei',
        startingLocation: 'Ammen Vale',
        funFact: 'Draenei are exiled “broken ones” who fled their homeworld after being hunted by the Burning Legion.',
      },
      {
        name: 'Twoski',
        gender: 'Female',
        class: 'Mage',
        faction: 'Gnome',
        startingLocation: 'New Tinkertown',
        funFact: 'Gnomes are descended from robotic mechanognomes via the Curse of Flesh. ',
      },
      {
        name: 'Aerer',
        gender: 'Male',
        class: 'Warrior',
        faction: 'Draenei',
        startingLocation: 'Ammen Vale',
        funFact: 'The only character that is not entirely focused on damage, because Retribution Paladins are losers.',
      },
      {
        name: 'Rawdog',
        gender: 'Female',
        class: 'Mage',
        faction: 'Kaldorei',
        startingLocation: 'Shadowglen',
        funFact: 'The Kaldorei were the first to study the Well of Eternity, gaining immortality from its magic.',
      },
      {
        name: 'Napnap',
        gender: 'Female',
        class: 'Rogue',
        faction: 'Haranir',
        startingLocation: 'Harandar',
        funFact: 'The Haranir are an elusive people that tend to the roots of the World Trees.',
      },
      {
        name: 'Deadleg',
        gender: 'Male',
        class: 'Mage',
        faction: 'Forsaken Undead',
        startingLocation: 'Deathknell',
        funFact: 'Forsaken broke free from the Lich King’s control and now seek their own identity.',
      },
      {
        name: 'Dansby',
        gender: 'Male',
        class: 'Warrior',
        faction: 'Alliance',
        startingLocation: 'Coldridge Valley',
        funFact: 'Dwarves were shaped from stone by the titans.',
      },
      {
        name: 'Impotent',
        gender: 'Male',
        class: 'Warrior',
        faction: 'Alliance',
        startingLocation: 'Northshire Valley',
        funFact: 'Death Knights are undead warriors raised by the Lich King, wielding frost and necromantic power.',
      },
      {
        name: 'Snipsnap',
        gender: 'Female',
        class: 'Rogue',
        faction: 'Void Elf',
        startingLocation: 'Telogrus Rift',
        funFact: 'Demon Hunters sacrifice their sight to gain spectral vision and demonic powers to fight the Legion.',
      }
    ];
  }
}
