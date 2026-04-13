import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {

    beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [
      { path: 'players', component: PlayersComponent }
    ];

    await TestBed.configureTestingModule({
      imports: [

        RouterTestingModule.withRoutes(routes),
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    }).compileComponents();
  });

  it('Should have correct route for PlayersComponent', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'players');

    expect(route).toBeDefined();

    if (route) {
      expect(route.component).toBe(PlayersComponent);
    }
  });
});
