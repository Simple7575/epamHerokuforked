//import DissapearingElements from "../pageobjects/dissapearing.elements.page";
import { Page } from "../pageobjects/dissapearing.elements.page.js"

describe("dissapearing elements tests", () => {
  //const dissapearingElementsPage = new DissapearingElements();
  beforeEach(() => {
    //dissapearingElementsPage.open();
    Page.open();
});
  
  it("should check that element dissapear on refresh", async () => {});
});
