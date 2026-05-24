import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialRequestComponent } from './special-request.component';

describe('SpecialRequestComponent', () => {
  let component: SpecialRequestComponent;
  let fixture: ComponentFixture<SpecialRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialRequestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a special request when submitted', () => {
    component.customerName = 'Alice';
    component.requestText = 'Extra guacamole, please';
    component.spice = 'hot';

    component.submitRequest();
    fixture.detectChanges();

    expect(component.requests.length).toBe(1);
    const req = component.requests[0];
    expect(req.customerName).toBe('Alice');
    expect(req.requestText).toBe('Extra guacamole, please');
    expect(req.spice).toBe('hot');

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.request-card')?.textContent).toContain('Alice');
  });

  it('should display message when there are no requests', () => {
    // Initially there should be no requests
    component.requests = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.no-requests')?.textContent).toContain('No special requests yet.');
  });
});
