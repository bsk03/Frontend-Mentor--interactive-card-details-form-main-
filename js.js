// card
const cardNum = document.querySelector('.cardNum');
const cardName = document.querySelector('.name');
const cardM = document.querySelector('.cardM');
const cardY = document.querySelector('.cardY');
const cardSecCode = document.querySelector('.secCode');
// form values
const formName = document.querySelector('.formName');
const formNums = document.querySelector('.cNums');
const formExpMonth = document.querySelector('.cMonth');
const formExpYear = document.querySelector('.cYear');
const formSecCode = document.querySelector('.cCvc');
// errors
const nameError = document.querySelector('.nameError');
const cardNumError = document.querySelector('.cardNumError');
const expError = document.querySelector('.expError');
const secError = document.querySelector('.cvcError');
// button
const confirm = document.querySelector('.confirm');
const continuee = document.querySelector('.continue');

const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const form = document.querySelector('.rightSide');
const switchForm = document.querySelector('.completed')




const spaces = (e) => {
	const key = e.key;
	if(key !== "Backspace"){
		if (formNums.value.length > 0) {
			if (formNums.value.length === 4) {
				formNums.value += '\u00A0';
			} else if (formNums.value.length === 9) {
				formNums.value += '\u00A0';
			} else if (formNums.value.length === 14) {
				formNums.value += '\u00A0';
			}
		}
	}
	
};

console.log(form);
    const completed = () => {
        form.classList.add('hide');
        switchForm.classList.remove('hide');
    }

const checkCvg = () => {
	if (formSecCode.value.match(letters)) {
		secError.textContent = 'Letters are not allowed';
		formSecCode.style.border = '1px solid red';
	} else if (formSecCode.value.match(special)) {
		secError.textContent = 'Special chars are not allowed';
		formSecCode.style.border = '1px solid red';
	} else if (formSecCode.value.length !== 3) {
		secError.textContent = 'Bad security code';
		formSecCode.style.border = '1px solid red';
	} else {
        cardSecCode.textContent = formSecCode.value;
		secError.textContent = '\u00A0';
		formSecCode.style.border = '1px solid var(--lGrayViol)';
        completed();
	}
};
const checkExpYear = () => {
	if (formExpYear.value.match(letters)) {
		expError.textContent = 'Letters are not allowed';
		formExpYear.style.border = '1px solid red';
	} else if (formExpYear.value.match(special)) {
		expError.textContent = 'Special cahrs are not allowed';
		formExpYear.style.border = '1px solid red';
	} else if (formExpYear.value.length !== 2) {
		expError.textContent = 'Here have to be two numbers';
		formExpYear.style.border = '1px solid red';
	} else if (formExpYear.value.length === 0) {
		expError.textContent = `It can't be blank!`;
		formExpYear.style.border = '1px solid red';
	} else if (formExpYear.value.length > 2) {
		expError.textContent = 'To much chars';
		formExpYear.style.border = '1px solid red';
	} else {
		cardY.textContent = formExpYear.value;

		expError.textContent = '\u00A0';
		formExpYear.style.border = '1px solid var(--lGrayViol)';
		checkCvg();
	}
};
const checkExpMonth = () => {
	if (formExpMonth.value.match(letters)) {
		expError.textContent = 'Letters are not allowed';
		formExpMonth.style.border = '1px solid red';
	} else if (formExpMonth.value.match(special)) {
		expError.textContent = 'Special cahrs are not allowed';
		formExpMonth.style.border = '1px solid red';
	} else if (formExpMonth.value > 12) {
		expError.textContent = 'Wrong format (0-12)';
		formExpMonth.style.border = '1px solid red';
	} else if (formExpMonth.value.length > 2) {
		expError.textContent = 'To much chars';
		formExpMonth.style.border = '1px solid red';
	} else if (formExpMonth.value.length === 0) {
		expError.textContent = `It can't be blank!`;
		formExpMonth.style.border = '1px solid red';
	} else {
		if ((formExpMonth.value.length == 1)) {
			cardM.textContent = `0${formExpMonth.value}`;
		} else {
			cardM.textContent = formExpMonth.value;
		}
		expError.textContent = '\u00A0';
		formExpMonth.style.border = '1px solid var(--lGrayViol)';
		checkExpYear();
	}
};

const checkNumber = () => {
	if (formNums.value.length === 0) {
		cardNumError.textContent = `It can't be blank!`;
		formNums.style.border = '1px solid red';
	} else if (formNums.value.match(letters) || formNums.value.match(special)) {
		cardNumError.textContent = 'Letters and special chars are not allowed';
		formNums.style.border = '1px solid red';
	} else if (formNums.value.length !== 19 || 0) {
		cardNumError.textContent = 'Wrong format';
		formNums.style.border = '1px solid red';
	} else {
		cardNum.textContent = formNums.value;
		cardNumError.textContent = '\u00A0';
		formNums.style.border = '1px solid var(--lGrayViol)';
		checkExpMonth();
	}
};

const checkName = () => {
	if (formName.value.match(numbers) || formName.value.match(special)) {
		nameError.textContent = `Special chars are not allowed `;
		formName.style.border = '1px solid red';
	} else if (formName.value.length === 0) {
		nameError.textContent = `It can't be blank!`;
		formName.style.border = '1px solid red';
	} else {
		cardName.textContent = formName.value;
		nameError.textContent = '\u00A0';
		formName.style.border = '1px solid var(--lGrayViol)';
		checkNumber();
	}
};

const renew = () => {
	cardName.textContent = 'Jane APPLESEED';
	cardNum.textContent = '0000 0000 0000 0000';
	cardY.textContent = '00';
	cardM.textContent = '00';
	cardSecCode.value = '000';

	formName.value = '';
	formNums.value =''
	formExpMonth.value ='';
	formExpYear.value='';
	formSecCode.value='';
	form.classList.remove('hide');
    switchForm.classList.add('hide');
}
continuee.addEventListener('click',renew)
formNums.addEventListener('keyup', spaces);
confirm.addEventListener('click', checkName);
