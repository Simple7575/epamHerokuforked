// class DissapearingElementsPage {
//     constructor() {
//       this.url = 'https://the-internet.herokuapp.com/disappearing_elements';
//     }
  
//     open() {
//       browser.url(this.url);
//     }
                                                      
//     // Add other methods for interacting with the page
//   }
  
//   export default new DissapearingElementsPage();
export class Page {
	constructor() {
		this.title = 'My Page';
        this.url = 'https://the-internet.herokuapp.com/disappearing_elements';
	}

	open() {
		browser.url(this.url);
	}
}