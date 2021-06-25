import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to the Calculator');
  });

  describe('onclick of plus button', () => {
    it('plus button exists with inner text "+"', () => {
      page.navigateTo();
      expect(page.getPlusButton().getText()).toEqual('+');
    });

    it('should display plus symbol in calculator window', async () => {
      page.navigateTo();
      page.getNumberButton1().click();
      page.getPlusButton().click();
      expect(page.getCalculatorDisplay().getText()).toContain('+');
    });
  });

  describe('plus function executes successfully', () => {
    it('should add two numbers together using "+" operator then display result on "="', () => {
      page.navigateTo();
      page.getNumberButton1().click();
      page.getPlusButton().click();
      page.getNumberButton2().click();
      page.getEqualsButton().click();
      expect(page.getCalculatorDisplay().getText()).toEqual('6');
    });
  });

  describe('minus function executes successfully', () => {
    it('should subtract two numbers using "-" operator then display result on "="', () => {
      page.navigateTo();
      page.getNumberButton1().click();
      page.getMinusButton().click();
      page.getNumberButton2().click();
      page.getEqualsButton().click();
      expect(page.getCalculatorDisplay().getText()).toEqual('2');
    });
  });

  describe('divide function executes successfully', () => {
    it('should divide two numbers using operator then display result on "="', () => {
      page.navigateTo();
      page.getNumberButton1().click();
      page.getDivideButton().click();
      page.getNumberButton2().click();
      page.getEqualsButton().click();
      expect(page.getCalculatorDisplay().getText()).toEqual('2');
    });
  });

  describe('times function executes successfully', () => {
    it('should multiply two numbers using operator then display result on "="', () => {
      page.navigateTo();
      page.getNumberButton1().click();
      page.getTimesButton().click();
      page.getNumberButton2().click();
      page.getEqualsButton().click();
      expect(page.getCalculatorDisplay().getText()).toEqual('8');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
