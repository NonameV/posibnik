$(document).ready(function() {
  $("a").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});


/*hhhhhhhh*/

const sidebarLinks = $('.sidebar a')
console.log(sidebarLinks)

const textLinks = document.querySelectorAll('.main-content h3')
console.log(textLinks)



let a = $('.main-content h3')/*.offset().top*/
let b = Array.from(a);

console.log(a[0].offsetTop)
console.log(window.pageYOffset)
console.log(a[1].offsetTop)
console.log(a[a.length - 1])
function activeSidebarItemChanger(){
	
	for(let i = 0; i < sidebarLinks.length; i++){
		if(i != sidebarLinks.length-1 && i != 0){
			if((a[i].offsetTop-10) < window.pageYOffset && window.pageYOffset < a[i+1].offsetTop){
				sidebarLinks[i].classList.add('active')
				sidebarLinks[i-1].classList.remove('active')
				sidebarLinks[i+1].classList.remove('active')
			}
		}else if(i == sidebarLinks.length-1 && (a[i].offsetTop-20) < window.pageYOffset){
			sidebarLinks[i].classList.add('active')
			sidebarLinks[i-1].classList.remove('active')
		}else if(i == 0 && (a[i].offsetTop-20) < window.pageYOffset && window.pageYOffset < a[i+1].offsetTop ){
			debugger
			sidebarLinks[i].classList.add('active')
			sidebarLinks[i+1].classList.remove('active')
		}
	}
}

document.addEventListener('scroll', activeSidebarItemChanger)