import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let router: Router;
  let routerEventsSubject: Subject<RouterEvent>;

  beforeEach(async () => {
    routerEventsSubject = new Subject<RouterEvent>();
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.events = routerEventsSubject.asObservable();

    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /some-page when goToPage is called', () => {
    component.goToPage();
    expect(router.navigate).toHaveBeenCalledWith(['/some-page']);
  });

  it('should navigate to /some-page when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(router.navigate).toHaveBeenCalledWith(['/some-page']);
  });

  it('should log "NavigationEnd event" on NavigationEnd event', () => {
    spyOn(console, 'log');
    routerEventsSubject.next(new NavigationEnd(1, '/some-page', '/some-page'));
    expect(console.log).toHaveBeenCalledWith('NavigationEnd event');
  });

  it('should unsubscribe from router events on destroy', () => {
    spyOn(component.subscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });
});