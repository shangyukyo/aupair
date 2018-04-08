/*
	Dopetrope 2.0 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

window._skel_config = {
	preset: 'standard',
	prefix: 'css/style',
	resetCSS: true,
	breakpoints: {
		'desktop': {
			grid: {
				gutters: 50
			}
		}
	}
};

window._skel_panels_config = {
	preset: 'standard'
};

jQuery(function() {
	$('#nav > ul').dropotron({ 
		offsetY: -17,
		offsetX: -1,
		mode: 'fade',
		noOpenerFade: true,
		detach: false
	});
});


// jQuery(document).ready(function () {

//     var p =0, t= 0;
//   $(window).scroll(function(e){  

//           p = $(this).scrollTop();  
            
//           if(t<=p){
//               $('section#header').css("line-height", "60px")              
//           }else{
//              $('section#header').css("line-height", "100px")
//           }  
           
//           setTimeout(function(){t = p;},0);         
//   });       

// });