(function() {
	var n = window.navigator.userAgent;

	if (
		n.indexOf("MSIE") >= 0 ||
		n.indexOf("Internet Explorer") >= 0 ||
		n.indexOf("Trident/7.0; rv:11.0") >= 0
	) {
		document.body.insertAdjacentHTML("afterbegin", " <section class=\"relative bg-black z-50\"> <div class=\"flex items-center justify-between px-40 py-20\"> <div class=\" max-w-2xl text-white\"> <strong>Your web browser (Internet Explorer) is out of date.<\/strong> It is not updated anymore. Update your browser for free and get more security, speed and the best experience on this site. The download is safe from the vendor's official website. <\/div> <div class=\"flex\"> <div class=\"flex items-center px-24 py-10\"> <div class=\"flex-shrink-0 pr-24\"> <img class=\"w-64\" src=\"https:\/\/nexo.io\/media\/site\/f123e4c483-1631610918\/chrome.png\"> <\/div> <div> <div class=\"text-18 font-bold text-white\"> Chrome <\/div> <div class=\"mb-2 text-14 text-gray-300 whitespace-no-wrap\"> Google <\/div> <div class=\"text-16 font-bold text-mint-500\"> <a class=\"underline\" href=\"https:\/\/www.google.com\/chrome\/\" target=\"_blank\" rel=\"noopener noreferrer\"> Download <\/a> <\/div> <\/div> <\/div> <div class=\"w-0 border-r-1 border-gray-700 border-solid\"><\/div> <div class=\"flex items-center px-24 py-10\"> <div class=\"flex-shrink-0 pr-24\"> <img class=\"w-64\" src=\"https:\/\/nexo.io\/media\/site\/b7c437a176-1631610930\/firefox.png\"> <\/div> <div> <div class=\"text-18 font-bold text-white\"> Firefox <\/div> <div class=\"mb-2 text-14 text-gray-300 whitespace-no-wrap\"> Mozilla Foundation <\/div> <div class=\"text-16 font-bold text-mint-500\"> <a class=\"underline\" href=\"https:\/\/www.mozilla.org\/en-US\/firefox\/new\/\" target=\"_blank\" rel=\"noopener noreferrer\"> Download <\/a> <\/div> <\/div> <\/div> <div class=\"w-0 border-r-1 border-gray-700 border-solid\"><\/div> <div class=\"flex items-center px-24 py-10\"> <div class=\"flex-shrink-0 pr-24\"> <img class=\"w-64\" src=\"https:\/\/nexo.io\/media\/site\/726ee1ea7d-1631610917\/brave.png\"> <\/div> <div> <div class=\"text-18 font-bold text-white\"> Brave <\/div> <div class=\"mb-2 text-14 text-gray-300 whitespace-no-wrap\"> Brave Software <\/div> <div class=\"text-16 font-bold text-mint-500\"> <a class=\"underline\" href=\"https:\/\/brave.com\/\" target=\"_blank\" rel=\"noopener noreferrer\"> Download <\/a> <\/div> <\/div> <\/div> <\/div> <\/div> <\/section>");
	}
})();
