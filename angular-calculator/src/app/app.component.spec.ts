import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bcch-angular-exercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bcch-angular-exercise');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to the Calculator'
    );
  });

  describe('plus operator function', () => {
    it('should add two numbers together', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      const result = instance.plus(1, 4);
      expect(result).toEqual(5);
    });
  });

  describe('minus operator function', () => {
    it('should subtract two numbers', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      const result = instance.minus(4, 1);
      expect(result).toEqual(3);
    });
  });

  describe('divide operator function', () => {
    it('should divide two numbers', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      const result = instance.divide(4, 2);
      expect(result).toEqual(2);
    });
  });

  describe('times operator function', () => {
    it('should multiply two numbers', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      const result = instance.times(4, 2);
      expect(result).toEqual(8);
    });
  });

  describe('setNumber', () => {
    it('should set num1 when num1 is undefined', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      console.log('num1', instance.num1);
      instance.setNumber('2');
      console.log('num1 after define', instance.num1);
      expect(instance.num1).toEqual('2');
    });

    it('should set num2 when num1 is defined and operator is defined', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      instance.num1 = '3';
      instance.operator = '+';
      console.log('num1', instance.num1);
      instance.setNumber('7');
      console.log('num1 after define', instance.num1);
      expect(instance.num1).toEqual('3');
      expect(instance.num2).toEqual('7');
    });
  });
});
