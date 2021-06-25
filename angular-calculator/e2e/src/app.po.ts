import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getPlusButton() {
    return element(by.id('13'));
  }

  getMinusButton() {
    return element(by.id('12'));
  }

  getDivideButton() {
    return element(by.id('10'));
  }

  getTimesButton() {
    return element(by.id('11'));
  }

  getCalculatorDisplay() {
    return element(by.css('.display'));
  }

  getNumberButton1() {
    return element(by.id('4'));
  }

  getNumberButton2() {
    return element(by.id('2'));
  }

  getEqualsButton() {
    return element(by.id('15'));
  }
}
