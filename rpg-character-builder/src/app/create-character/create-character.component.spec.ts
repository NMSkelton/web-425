import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

it('should create', () => {
  expect(component).toBeTruthy();
});

it('Should generate a random character ID between 1 and 1000 with no decimal places', () => {
  component.character = {
    name: "Maximus",
    class: "Rogue",
    gender: "Female"
  };

  component.createCharacter();

  const created = component.characters[0];

  expect(created.id).toBeGreaterThan(0);
  expect(created.id).toBeLessThanOrEqual(1000);
  expect(Number.isInteger(created.id)).toBe(true);
});

it('Should add a character with correct customization', () => {
  component.character.name = "Maximus";
  component.character.class = "Rogue";
  component.character.gender = "Female";

  component.createCharacter();

  const created = component.characters[0];

  expect(created.name).toBe("Maximus");
  expect(created.class).toBe("Rogue");
  expect(created.gender).toBe("Female");
});

it('Should reset all form fields to their default values after resetForm is called', () => {
  component.character.name = "Dumbo";
  component.character.class = "Warrior";
  component.character.gender = "Male";

  component.resetForm();

  expect(component.character.name).toBe("");
  expect(component.character.class).toBe("");
  expect(component.character.gender).toBe("");
});
});