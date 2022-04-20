// tabs
let tablinks = document.querySelectorAll('.tabs .li_tab');
let tabcontent = document.querySelectorAll('.tabs .tab-item');

tablinks[0].classList.add('active');
tabcontent[0].classList.add('open');

tablinks.forEach((e, id) => {    
    e.addEventListener('click', () => {
        // 
        for (i of tablinks){
            if (i.classList.contains('active')){
                i.classList.remove('active');
            }
        }
        if (!e.classList.contains('active')){
            e.classList.add('active');
        }
        // 
        for (i of tabcontent){
            if (i.classList.contains('open')){
                i.classList.remove('open');
            }
        }
        if (tabcontent[id]){
            tabcontent[id].classList.add('open');
        }
        //  
    })
    
})
// end tabs


//footer mobile 
function screenChanges() {
    
    var mobileBtn = document.querySelectorAll('.footer-title-mobile');
    var footerLinks = document.querySelectorAll('.footer-links');
    var footerOpen = [];
    mobileBtn.forEach(function(e, i){
        footerOpen.push(true);
        e.addEventListener('click', function (params) {
            if (footerOpen[i]){
                footerLinks[i].style.display = 'block';
                footerOpen[i] = false;

            }
            else {
                footerLinks[i].style.display = 'none';
                footerOpen[i] = true;

            }
            
        })
    })
    

}

screenChanges();


// end footer mobile