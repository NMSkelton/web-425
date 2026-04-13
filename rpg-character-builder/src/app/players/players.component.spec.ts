import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create PlayersComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Should correctly display a list of characters', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  const playerItems = compiled.querySelectorAll('.player-item');

  expect(playerItems.length).toEqual(component.players.length);
  });
});
