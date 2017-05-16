import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should fail', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.debugElement.query(By.css('button')).nativeElement.click();
  }));
});
