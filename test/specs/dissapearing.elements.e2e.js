//import DissapearingElements from "../pageobjects/dissapearing.elements.page";
const { Page } = require('../pageobjects/dissapearing.elements.page');

describe('dissapearing elements tests', () => {
  //const dissapearingElementsPage = new DissapearingElements();
  beforeEach(() => {
    //dissapearingElementsPage.open();
    Page.open();
  });

  it('should check that element dissapear on refresh', async () => {});
});
