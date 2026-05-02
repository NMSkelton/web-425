import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CreateGuildComponent } from "./create-guild.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent',() => {
  let component: CreateGuildComponent
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule]
    })
    .compileComponents

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be invalid when empty', () => {
    expect(component.guildForm.valid).toBeFalsy();
  });

  it('Form should be valid when filled correctly', () => {
    component.guildForm.controls['name'].setValue('The');
    component.guildForm.controls['type'].setValue('Casual');
    component.guildForm.controls['description'].setValue('This guild kicks butt and kill dragons. And they are all out of dragons. And butt.');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.guildForm.controls['notificationPreference'].setValue('SMS');

    expect(component.guildForm.valid).toBeTruthy();
  });

    it('Should call createGuild on form submit with valid data', () => {
    spyOn(component, 'createGuild');

    component.guildForm.controls['name'].setValue('The');
    component.guildForm.controls['type'].setValue('Casual');
    component.guildForm.controls['description'].setValue('This guild kicks butt and kill dragons. And they are all out of dragons. And butt.');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.guildForm.controls['notificationPreference'].setValue('SMS');

    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.createGuild).toHaveBeenCalled();
  });

})
