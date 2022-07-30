const swapingImageInPotensi = {
	init(){
		this.index = 1;
		this.maxImage = 17;
		this.elementParent = document.querySelector(".potensi-image div");
		this.elementBtnLeft = document.querySelector('.potensi-image button.left')
		this.elementBtnRight = document.querySelector('.potensi-image button.right')
		this.elementParent.innerHTML = `<img src="assest/potensi/(${this.index}).jpg" class="w-full h-full">`;
	},

	eventOnClick(){
		this.elementBtnLeft.addEventListener('click',()=>{
			this.index -= 1;
			this.conditionImageUndefined();
			this.elementParent.innerHTML = `<img src="assest/potensi/(${this.index}).jpg" class="object-cover w-full h-full">`;
		})
		this.elementBtnRight.addEventListener('click',()=>{
			this.index += 1;
			this.conditionImageUndefined();
			this.elementParent.innerHTML = `<img src="assest/potensi/(${this.index}).jpg" class="object-cover w-full h-full">`;
		})
	},
	conditionImageUndefined(){
		if(this.index == 0){
			this.index = this.maxImage;
		}else if(this.index == this.maxImage+1){
			this.index = 1;
		}
	}
	,render(){
		this.init();
		this.eventOnClick();
	}
}

swapingImageInPotensi.render();

const showPopupActivity = {
	init(){
		this.searchAllBtnAktivity();
		this.hiddenPopup();
	},
	searchAllBtnAktivity(){
		const allBtn = document.getElementsByClassName("btn-activity");
		for (var i = 0; i < allBtn.length; i++) {
			console.log(allBtn[i])
			allBtn[i].addEventListener('click',(e)=>{
				const template = `
					<img src="assest/aktivitas/${e.target.innerText}.png" data-src="assest/instagram.png" class="w-full h-full m-auto">`;
				const popup = document.querySelector('#popup-activity');
				popup.querySelector('div').innerHTML = template;
				popup.classList.toggle('hidden');
			})
		}
	},
	hiddenPopup(){
		document.querySelector('#popup-activity').addEventListener('click',()=>{
			document.querySelector("#popup-activity").classList.add("hidden")
		})
	}
}

showPopupActivity.init();
