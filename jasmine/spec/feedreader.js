$(function() {
	/*
	 * "RSS Feeds" test suite
	 */
    describe('RSS Feeds', function() {

		 /*to check if allFeeds variable has been defined and not empty*/
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
        });

		/*to check if each feed has a URL defined and not empty*/
		it('should have URLs defined and not empty', function() {
			for (let i = 0; i < allFeeds.length; i++) {
			expect(allFeeds[i].url).toBeDefined();
			expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

		/*to check if each feed has a name and not empty*/
        it('should have names and not empty', function() {
			for (let i = 0; i < allFeeds.length; i++) {
			expect(allFeeds[i].name).toBeDefined();
			expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });
	
    /*
	 * "The menu" test suite
	 */
    describe('The menu', function() {

		/*to check if the menu is hidden by default*/
        it('should be hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
        });

		/*To check if the menu is shown by a click and hid by the next click*/
		function clickMenu(){ //action of click on the menu button
		$('.icon-list').click();
		}

        it('should be shown on click and hid when clicked again', function() {
			clickMenu(); //first click
            expect($('body').hasClass('menu-hidden')).toBe(false); //the menu is shown
			clickMenu(); //second click
            expect($('body').hasClass('menu-hidden')).toBe(true); //the menu is hid again
        });
	});

    /* 
	 * "Initial Entries" test suite
	 */
	describe('Initial Entries', function() {

		/*loadFeed function is called and loading is done*/
		beforeEach(function(done) {
			loadFeed(0, function(){
			done();
			});
		});

		/*to check if at least one .entry element is within the .feed container*/
		it('should be shown in .feed container', function() {
			expect($('.feed .entry-link .entry').length).not.toBe(0);
		});
	});

    /*
	 * "New Feed Selection" test suite
	 */
	describe('New Feed Selection', function() {
		
		let oldFeedContent;
		let newFeedContent;
		
		/*to check if a new feed is loaded and the content is changed*/
		beforeEach(function(done) {
			loadFeed(0, function(){ //old feed done loading
				oldFeedContent = $('.entry h2');
				loadFeed(1, function() { //new feed done loading
					newFeedContent = $('.entry h2');
					done();
				});
			});
		});
		
		it('should be loaded and its contents should be changed', function() {
			expect(oldFeedContent === newFeedContent).toBe(false);
		});
	});
}());