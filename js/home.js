// active link nav
let div=document.querySelectorAll('div')
let nav_link=document.querySelectorAll('nav a')
window.onscroll=()=>{
    div.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset + height){
            nav_link.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}

// scroll nav style 



