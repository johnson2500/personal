'use strict';
	
	function hero(){
		this.arr = ["Innovation distinguishes between a leader and a follower. - Steve Jobs","Do what you feel in your heart to be right - for you'll be criticized anyway.- Eleanor Roosevelt","Happiness is not a goal; it is a by-product."];
		this.hero = document.getElementById('hero-content');
		this.arrIndex = 0;
		this.changeHero = function(){
			this.hero.innerHTML = this.arr[this.getIndex()];
		}
		this.getIndex = function(){
			if(this.arrIndex < (this.arr.length)){
				return this.arrIndex++;
			} else{
				this.arrIndex = 0;
				return this.arrIndex;
			}
		}
	}
	
	var index = new hero();
	index.changeHero();
	setInterval('index.changeHero()',6000)

