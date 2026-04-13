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
                'hunter': item.class.includes('Hunter'),
                'mage': item.class.includes('Mage'),
                'shaman': item.class.includes('Shaman'),
                'rogue': item.class.includes('Rogue'),
                'demon': item.class.includes('Demon'),
                'warrior': item.class.includes('Warrior'),
                'monk': item.class.includes('Monk'),
                'knight': item.class.includes('Knight'),
                'druid': item.class.includes('Druid'),
                'paladin': item.class.includes('Paladin'),
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
        border-radius: 10px;
      }

      .label {
        color: #302500;
      }

      .value {
        color: #000000;
        font-weight: bold;
        font-size: 1.2em;
      }

      .hunter {
        background-color: #AAD372;
      }

      .mage {
        background-color:	#3FC7EB;
      }

      .shaman {
        background-color: #0070DD;
      }

      .rogue {
        background-color:	#FFF468;
      }

      .demon {
        background-color: #A330C9;
      }

      .warrior {
        background-color:	#C69B6D;
      }

      .monk {
        background-color: #00FF98;
      }

      .knight {
        background-color:	#C41E3A;
      }

      .druid {
        background-color: #FF7C0A;
      }

      .paladin {
        background-color:	#F48CBA;
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
        class: 'Marksmanship Hunter',
        faction: 'Kaldorei',
        startingLocation: 'Shadowglen',
        funFact: 'This was the one that started it all.',
      },
      {
        name: 'Aer',
        gender: 'Male',
        class: 'Enhancement Shaman',
        faction: 'Draenei',
        startingLocation: 'Ammen Vale',
        funFact: 'Draenei are exiled “broken ones” who fled their homeworld after being hunted by the Burning Legion.',
      },
      {
        name: 'Twoski',
        gender: 'Female',
        class: 'Frost Mage',
        faction: 'Gnome',
        startingLocation: 'New Tinkertown',
        funFact: 'Gnomes are descended from robotic mechanognomes via the Curse of Flesh. ',
      },
      {
        name: 'Aerer',
        gender: 'Male',
        class: 'Protection Paladin',
        faction: 'Draenei',
        startingLocation: 'Ammen Vale',
        funFact: 'The only character that is not entirely focused on damage, because Retribution Paladins are losers.',
      },
      {
        name: 'Rawdog',
        gender: 'Female',
        class: 'Feral Druid',
        faction: 'Kaldorei',
        startingLocation: 'Shadowglen',
        funFact: 'The Kaldorei were the first to study the Well of Eternity, gaining immortality from its magic.',
      },
      {
        name: 'Napnap',
        gender: 'Female',
        class: 'Subtlety Rogue',
        faction: 'Haranir',
        startingLocation: 'Harandar',
        funFact: 'The Haranir are an elusive people that tend to the roots of the World Trees.',
      },
      {
        name: 'Deadleg',
        gender: 'Male',
        class: 'Windwalker Monk',
        faction: 'Forsaken Undead',
        startingLocation: 'Deathknell',
        funFact: 'Forsaken broke free from the Lich King’s control and now seek their own identity.',
      },
      {
        name: 'Dansby',
        gender: 'Male',
        class: 'Arms Warrior',
        faction: 'Alliance',
        startingLocation: 'Coldridge Valley',
        funFact: 'Dwarves were shaped from stone by the titans.',
      },
      {
        name: 'Impotent',
        gender: 'Male',
        class: 'Unholy Death Knight',
        faction: 'Alliance',
        startingLocation: 'Northshire Valley',
        funFact: 'Death Knights are undead warriors raised by the Lich King, wielding frost and necromantic power.',
      },
      {
        name: 'Snipsnap',
        gender: 'Female',
        class: 'Devourer Demon Hunter',
        faction: 'Void Elf',
        startingLocation: 'Telogrus Rift',
        funFact: 'Demon Hunters sacrifice their sight to gain spectral vision and demonic powers to fight the Legion.',
      }
    ];
  }
}
