function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("src", ev.target.id);
    dragClass = ev.target;
}

const dropzones = document.querySelectorAll(".place");

dropzones.forEach(el => {
    el.addEventListener("drop", function( event ) {
        if(dragClass.className.substr(0, 6) == el.className.substr(0, 6)){
            event.preventDefault();
            const src = document.getElementById(event.dataTransfer.getData("src"));
            const srcParent = src.parentNode;
            const tgt = el.firstElementChild;
            el.replaceChild(src, tgt);
            srcParent.appendChild(tgt);
            el.classList.remove('country-active');
            }
    }, false);
})

dropzones.forEach(el => {
    el.addEventListener("dragenter", function( event ) {
        if(dragClass.className.substr(0, 6) == el.className.substr(0, 6)){
            /*if(event.currentTarget.firstElementChild.lastElementChild.className == "country-name"){
                event.target.parentNode.classList.add('country-active');
            }*/
            el.classList.add('country-active');
        }
    }, false);
})

dropzones.forEach(el => {
    el.addEventListener("dragleave", function( event ) {
        if(dragClass.className.substr(0, 6) == el.className.substr(0, 6)){
            el.classList.remove('country-active');
        }
    }, false);
})

//TODO: TOUCHMOVE
const slider = document.querySelector(".slider");
const listItem = document.querySelector(".list-item");
slider.style.marginLeft = `-${listItem.offsetWidth * 2}px`;
slider.style.width = `${listItem.offsetWidth * 0.9}px`;
document.querySelector(`[href="#groupCont"]`).classList.add('active');
const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            let id = entry.target.getAttribute('id');
            window.addEventListener("resize", e => {
            if(id == "groupCont") slider.style.marginLeft = `-${listItem.offsetWidth * 2}px`;
            else if(id == "thirdplacesCont") slider.style.marginLeft = "0";
            else if(id == "koCont") slider.style.marginLeft = `${listItem.offsetWidth * 2}px`;
            slider.style.width = `${listItem.offsetWidth * 0.9}px`;
            });
            document.querySelector('.active').classList.remove('active');
            if(id == "groupCont") slider.style.marginLeft = `-${listItem.offsetWidth * 2}px`;
            else if(id == "thirdplacesCont") slider.style.marginLeft = "0";
            else if(id == "koCont") slider.style.marginLeft = `${listItem.offsetWidth * 2}px`;
            document.querySelector(`[href="#${id}"]`).classList.add('active');
        }
    });
}
const options = {
    threshold: 0.45
}
const observer = new IntersectionObserver(changeNav, options);
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
    observer.observe(section);
});


const focusOn = function(el){
    let clas = el.className.slice(8);
    if(clas == "groupContNavItem" || clas == "groupContNavItem active") slider.style.marginLeft = `-${listItem.offsetWidth * 2}px`;
    else if(clas == "thirdplacesContNavItem" || clas == "thirdplacesContNavItem active") slider.style.marginLeft = "0";
    else if(clas == "koContNavItem" || clas == "koContNavItem active") slider.style.marginLeft = `${listItem.offsetWidth * 2}px`;
}
const focusOut = function(){
    let clas = document.querySelector('.active').className.slice(8);
    if(clas == "groupContNavItem active") slider.style.marginLeft = `-${listItem.offsetWidth * 2}px`;
    else if(clas == "thirdplacesContNavItem active") slider.style.marginLeft = "0";
    else if(clas == "koContNavItem active") slider.style.marginLeft = `${listItem.offsetWidth * 2}px`;
}



const links = document.querySelectorAll('.navItem');
links.forEach(el => {
    el.addEventListener("mouseover", function(){
        focusOn(el);
    })
    el.addEventListener("focus", function(){
        focusOn(el);
    })
    el.addEventListener("mouseout", function(){
        focusOut();
    })
    el.addEventListener("focusout", function(){
        focusOut();
    })
})



let thirdplacesCont = document.querySelector(".thirdplacesCont");
let scroll1 = document.querySelector("#submit1");
let scroll2 = document.querySelector("#submit2");
let scroll3 = document.querySelector("#submit3");
scroll1.addEventListener("click", function(){
    thirdplacesCont.scrollIntoView({behavior: "smooth"});
    thirdplacesFill();
    let groupCountries = document.querySelectorAll(".groupCont .country");
    groupCountries.forEach(el => {
        el.draggable = false;
        el.style.pointerEvents = "none";
    })
    scroll1.style.pointerEvents = "none";
    scroll1.disabled = true;
    scroll2.style.pointerEvents = "all";
    scroll2.disabled = false;
})
function thirdplacesFill(){
    let places = document.querySelectorAll(".place3>div");
    let placesThird = document.querySelectorAll(".placeThird");
    placesThird.forEach((el, i) => {
        el.appendChild(places[i].cloneNode(true));
        el.id += "copy"
    })
    let countriesThird = document.querySelectorAll(".placeThird>div");
    countriesThird.forEach(el => {
        el.className = "thirdG country";
        el.id += "copy"
    })
}

let koCont = document.querySelector(".koCont");
scroll2.addEventListener("click", function(){
    koCont.scrollIntoView({behavior: "smooth"});
    koFill();
    let thirdCountries = document.querySelectorAll(".thirdplacesCont .country");
    thirdCountries.forEach(el => {
        el.draggable = false;
        el.style.pointerEvents = "none";
    })
    scroll2.style.pointerEvents = "none";
    scroll2.disabled = true;
})
function koFill(){
    let sq1a = document.querySelector(".sq1a");
    let sq1b = document.querySelector(".sq1b");
    let sq2a = document.querySelector(".sq2a");
    let sq2b = document.querySelector(".sq2b");
    let sq3a = document.querySelector(".sq3a");
    let sq3b = document.querySelector(".sq3b");
    let sq4a = document.querySelector(".sq4a");
    let sq4b = document.querySelector(".sq4b");
    let sq5a = document.querySelector(".sq5a");
    let sq5b = document.querySelector(".sq5b");
    let sq6a = document.querySelector(".sq6a");
    let sq6b = document.querySelector(".sq6b");
    let sq7a = document.querySelector(".sq7a");
    let sq7b = document.querySelector(".sq7b");
    let sq8a = document.querySelector(".sq8a");
    let sq8b = document.querySelector(".sq8b");

    sq1a.append(document.querySelector("#placeB1>.country").cloneNode(true));
    sq1b.append(document.querySelector("#place3-1copy>.country").cloneNode(true));
    sq2a.append(document.querySelector("#placeA1>.country").cloneNode(true));
    sq2b.append(document.querySelector("#placeC2>.country").cloneNode(true));
    sq3a.append(document.querySelector("#placeF1>.country").cloneNode(true));
    sq3b.append(document.querySelector("#place3-3copy>.country").cloneNode(true));
    sq4a.append(document.querySelector("#placeD2>.country").cloneNode(true));
    sq4b.append(document.querySelector("#placeE2>.country").cloneNode(true));
    sq5a.append(document.querySelector("#placeE1>.country").cloneNode(true));
    sq5b.append(document.querySelector("#place3-4copy>.country").cloneNode(true));
    sq6a.append(document.querySelector("#placeD1>.country").cloneNode(true));
    sq6b.append(document.querySelector("#placeF2>.country").cloneNode(true));
    sq7a.append(document.querySelector("#placeC1>.country").cloneNode(true));
    sq7b.append(document.querySelector("#place3-2copy>.country").cloneNode(true));
    sq8a.append(document.querySelector("#placeA2>.country").cloneNode(true));
    sq8b.append(document.querySelector("#placeB2>.country").cloneNode(true));
    let koGame = document.querySelectorAll(".koGame div");
    koGame.forEach((el, i) => {
        el.id = "";
        el.draggable = false;
    })

    const sqRadio = koCont.querySelectorAll("input.sq"); //semiquater
    const qRadio = koCont.querySelectorAll("input.q");   //quater
    const sRadio = koCont.querySelectorAll("input.s");   //semifinal
    const fRadio = koCont.querySelectorAll("input.f");   //final

    let classRadio = "";
    sqRadio.forEach((el, i) => {
        el.nextElementSibling.firstChild.style.pointerEvents = "all";
        el.addEventListener("change", function(){
            classRadio = el.className.substr(0,5);
            qRadio.forEach((e, j) => {
                if(e.className.substr(0,5) == classRadio){
                    if(e.nextElementSibling.innerHTML == "")e.nextElementSibling.append(el.nextElementSibling.firstChild.cloneNode(true));
                    else{

                        let eNext = document.querySelectorAll(`.q .${e.className.substr(6,5)}`);
                        eNext.forEach(eNextEl => {
                            eNextEl.checked = false;
                        })
                        let sNextprot = document.querySelector(`.s .${e.className.substr(6,5)}`);
                        sNextprot.nextElementSibling.innerHTML = "";
                        let sNext = document.querySelectorAll(`.s .${sNextprot.className.substr(6,5)}`);
                        sNext.forEach(sNextEl => {
                            sNextEl.checked = false;
                        })
                        let fNextprot = document.querySelector(`.f .${sNextprot.className.substr(6,5)}`);
                        fNextprot.nextElementSibling.innerHTML = "";
                        let fNext = document.querySelectorAll(`.f .${fNextprot.className.substr(6,5)}`);
                        fNext.forEach(fNextEl => {
                            fNextEl.checked = false;
                        })
                        e.nextElementSibling.innerHTML = el.nextElementSibling.innerHTML;
                        scroll3.style.pointerEvents = "none";
                        scroll3.disabled = true;
                    }
                }
            })
        })
    })
    qRadio.forEach((el, i) => {
        el.addEventListener("change", function(){
            classRadio = el.className.substr(6,5);
            const brothers = document.querySelectorAll(`.${el.className.substr(6,5)}`);
            sRadio.forEach((e, j) => {
                if(brothers[0].nextElementSibling.innerHTML != "" && brothers[1].nextElementSibling.innerHTML != ""){
                    if(e.className.substr(0,5) == classRadio){
                        if(e.nextElementSibling.innerHTML == "")e.nextElementSibling.append(el.nextElementSibling.firstChild.cloneNode(true));
                        else{
                            let eNext2 = document.querySelectorAll(`.s .${e.className.substr(6,5)}`);
                            eNext2.forEach(eNextEl => {
                                eNextEl.checked = false;
                            })
                            let fNextprot2 = document.querySelector(`.f .${e.className.substr(6,5)}`);
                            fNextprot2.nextElementSibling.innerHTML = "";
                            let fNext2 = document.querySelectorAll(`.f .${fNextprot2.className.substr(6,5)}`);
                            fNext2.forEach(fNextEl => {
                                fNextEl.checked = false;
                            })
                            e.nextElementSibling.innerHTML = el.nextElementSibling.innerHTML;
                            scroll3.style.pointerEvents = "none";
                            scroll3.disabled = true;
                        }
                    }
                }
                else{
                    el.checked = false;
                }
            })
        })
    })

    sRadio.forEach((el, i) => {
        el.addEventListener("change", function(){
            classRadio = el.className.substr(6,5);
            const brothers = document.querySelectorAll(`.${el.className.substr(6,5)}`);
            fRadio.forEach((e, j) => {
                if(brothers[0].nextElementSibling.innerHTML != "" && brothers[1].nextElementSibling.innerHTML != ""){
                    if(e.className.substr(0,5) == classRadio){
                        if(e.nextElementSibling.innerHTML == "")e.nextElementSibling.append(el.nextElementSibling.firstChild.cloneNode(true));
                        else {
                            let eNext3 = document.querySelectorAll(`.f .${e.className.substr(6,5)}`);
                            eNext3.forEach(eNextEl => {
                                eNextEl.checked = false;
                            })
                            e.nextElementSibling.innerHTML = el.nextElementSibling.innerHTML;
                            scroll3.style.pointerEvents = "none";
                            scroll3.disabled = true;
                        }
                    }
                }
                else{
                    el.checked = false;
                }
            })
        })
    })
    fRadio.forEach((el, i) => {
        el.addEventListener("change", function(){
            if(fRadio[0].nextElementSibling.innerHTML == "" || fRadio[1].nextElementSibling.innerHTML == ""){
                el.checked = false;
            }
            if(fRadio[0].checked == true || fRadio[1].checked == true){
                scroll3.style.pointerEvents = "all";
                scroll3.disabled = false;
            }
        })
    })
}
scroll3.addEventListener("click", function(){
    let koInput = document.querySelectorAll(".koGame input");
    koInput.forEach(input => {
        input.disabled = true;
    })
    let koCountries = document.querySelectorAll(".koGame .country");
    koCountries.forEach(country => {
        country.style.pointerEvents = "none";
    })
    scroll3.style.pointerEvents = "none";
    scroll3.disabled = true;
})