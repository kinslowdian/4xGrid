
var trace = function(str){ console.log(str); };

var displayList;
var nav;

function page_init()
{
	trace("page_init();");

	displayList_init();
}

function displayList_init()
{
	displayList = {};
	displayList.body		= document.querySelector("body");
	displayList.page 		= document.querySelector(".page-wrapper");
	displayList.navIcon 	= document.querySelector(".nav-icon");
	displayList.closeIcon 	= document.querySelector(".close-icon");
	displayList.navList 	= document.querySelector(".nav-list");

	nav_init();
}

function nav_init()
{
	nav = {};
	nav.opened = false;

	displayList.navIcon.addEventListener("click", nav_event, false);
	displayList.closeIcon.addEventListener("click", nav_event, false);
}

function nav_event(event)
{
	event.preventDefault();

	if(nav.opened)
	{
		nav.opened = false;
		displayList.navList.classList.add("nav-list-hide");
		displayList.page.classList.remove("page-wrapper-nav-fx");

		displayList.navList.addEventListener("webkitTransitionEnd", nav_clean, false);
		displayList.navList.addEventListener("transitionend", nav_clean, false);
	}

	else
	{
		nav.opened = true;
		displayList.page.classList.add("page-wrapper-nav-fx");
		displayList.body.classList.add("nav-lock");
		displayList.navList.classList.remove("nav-list-hide");
	}
}

function nav_clean(event)
{
	displayList.navList.removeEventListener("webkitTransitionEnd", nav_clean, false);
	displayList.navList.removeEventListener("transitionend", nav_clean, false);

	displayList.body.classList.remove("nav-lock");
}




