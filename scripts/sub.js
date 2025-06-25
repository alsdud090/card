function copyToClipboard() {
	var text = document.getElementById("textToCopy").innerText;
	var textArea = document.createElement("textarea");
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
	var textElement = document.getElementById("textToCopy");
	textElement.classList.add("clicked");
	textElement.setAttribute("aria-label", "복사 완료!");
	setTimeout(() => {
		textElement.classList.remove("clicked");
		textElement.setAttribute("aria-label", "디스코드 아이디 복사하기");
	}, 2000);
}
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
	images[i].setAttribute("loading", "lazy");
}
function copyToClipboard() {
	var text = document.getElementById("textToCopy").innerText;
	var textArea = document.createElement("textarea");
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
	var textElement = document.getElementById("textToCopy");
	textElement.classList.add("clicked");
	textElement.setAttribute("aria-label", "복사 완료!");
	setTimeout(() => {
		textElement.classList.remove("clicked");
		textElement.setAttribute("aria-label", "디스코드 아이디 복사하기");
	}, 2000);
}
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
	images[i].setAttribute("loading", "lazy");
}
