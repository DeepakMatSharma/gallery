function openNav(){document.getElementById("mySidenav").style.width="10em"}function closeNav(){document.getElementById("mySidenav").style.width="0"}AOS.init({duration:700});var coll=document.getElementsByClassName("collapsible");for(i=0;i<coll.length;i++)coll[i].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));function filterSelection(e){var t,l;for(t=document.getElementsByClassName("column"),"all"==e&&(e=""),l=0;l<t.length;l++)w3RemoveClass(t[l],"show"),t[l].className.indexOf(e)>-1&&w3AddClass(t[l],"show")}function w3AddClass(e,t){var l,n,s;for(n=e.className.split(" "),s=t.split(" "),l=0;l<s.length;l++)-1==n.indexOf(s[l])&&(e.className+=" "+s[l])}function w3RemoveClass(e,t){var l,n,s;for(n=e.className.split(" "),s=t.split(" "),l=0;l<s.length;l++)for(;n.indexOf(s[l])>-1;)n.splice(n.indexOf(s[l]),1);e.className=n.join(" ")}filterSelection("all");for(var btnContainer=document.getElementById("myBtnContainer"),btns=btnContainer.getElementsByClassName("btn"),i=0;i<btns.length;i++)btns[i].addEventListener("click",(function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}));