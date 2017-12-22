import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from '@angular/platform-browser';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('should have a router outlet', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });

  it('should have a link to todos page', () => {
    fixture.detectChanges();

    const des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const result = des.find(de => {
      return de.properties['href'] === '/todos';
    });

    expect(result).toBeDefined();
  });
});
