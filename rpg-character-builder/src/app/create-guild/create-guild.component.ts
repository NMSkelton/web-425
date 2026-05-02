import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="guild-form-container">
      <form
        [formGroup]="guildForm"
        class="guild-form"
        (ngSubmit)="createGuild(); guildForm.reset();"
      >
          <h1>Create Your Guild!</h1>
          <label>Guild Name</label>
          <input type="text" formControlName="name" />

          <label>Guild Description:</label>
          <textarea rows="6" formControlName="description"></textarea>

          <label>Guild type: </label>
          <select formControlName="type">
            @for (option of type; track option) {
              <option [value]="option">{{ option }}</option>
            }
          </select>

          <label>
          <input type="checkbox" formControlName="acceptTerms" />
          Accept our Terms of Service. Nonnegotiable.
          </label>

          <div class="radio-group">
            <label>How would you like to be notified?</label>
            @for (notificationPreference of notificationPreferences; track notificationPreference) {
              <label class="radio-option">
                <input
                  type="radio"
                  [value]="notificationPreference"
                  formControlName="notificationPreference"
                />
                {{ notificationPreference }}
              </label>
            }
          </div>

          <input
            type="submit"
            [disabled]="!guildForm.valid"
            value="Create Guild"
          />

      </form>

      <div class="guilds">
        <h1>Created Guilds</h1>

        <div class="guild-container">
          @for (guild of createdGuilds; track guild) {
            <div class="guild-card">
              <h2>{{ guild.name }}</h2>

              <p>{{ guild.description }}</p>

              <p class="guild-type"> A {{ guild.type }} guild</p>

            </div>
        }
        </div>

      </div>
    </div>
    <img src="/assets/guild.png" alt="a group of characters sitting at a table" class="guild-image">
  `,
  styles: `

  h1 {
    font-family: "Metamorphous", sans-serif;
    color: #ffc750
  }

  .guild-form-container {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    flex-direction: column;
    gap: 30px;
    font-family: Arial, sans-serif;
    font-family: "Faculty Glyphic", sans-serif;
  }

  .guild-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #1e1e1e;
    border: 3px solid #afafaf;
    border-radius: 20px;
  }

  label {
    display: block;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  input[type="text"],
  textarea,
  select {
    width: 70%;
    padding: 3px;
    margin-bottom: 10px;
    border-radius: 6px;
    background-color: #2a2a2a;
    color: white;
    border: 1px solid #555;
    font-family: "Faculty Glyphic", sans-serif;
  }

  .guild-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-direction: column;
    gap: 15px;
    flex-wrap: wrap;
  }

  .guild-card {
    border: 2px solid #afafaf;
    background-color: #1e1e1e;
    border-radius: 20px;
    padding: 10px;
  }

  .radio-group {
    display: inline-flex;
    padding: 15px 0px;
  }

  .radio-option {
    gap: 8px;
    padding: 0px 0px 0px 60px;
  }

  input[type="submit"] {
    margin-top: auto;
    padding: 8px;
    cursor: pointer;
    width: 170px;
    font-family: "Faculty Glyphic", sans-serif;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  input[type="submit"]:disabled {
    background-color: #666;
    cursor: not-allowed;
    transform: none;
  }

  .guild-card h2 {
    color: #ffc750;
    margin: 0 0 10px 0;
  }

  .guild-type {
    text-transform: lowercase;
    font-weight: bold;
  }

  `
  ,

})
export class CreateGuildComponent {
  name: string = "";
  type: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  notificationPreferences: string[] = ['Email', 'SMS', 'In-App']

  createdGuilds: any[] = [];

  guildForm: FormGroup = this.fb.group({
    name:[null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: [false, Validators.requiredTrue],
    notificationPreference: [null, Validators.compose([Validators.required])],
  })

  constructor(private fb: FormBuilder) {

  }

  createGuild() {

    const newGuild = {
      name: this.guildForm.value.name,
      description: this.guildForm.value.description,
      type: this.guildForm.value.type,
      acceptTerms: this.guildForm.value.acceptTerms,
      notificationPreference: this.guildForm.value.notificationPreference
    };

    this.createdGuilds.push(newGuild);

    console.log('Complete form value:', newGuild);

    alert("Guild created successfully!")
  }
}
