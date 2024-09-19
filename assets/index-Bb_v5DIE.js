(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();async function m(){let n="";n=(await(await fetch("https://omidxalili71.github.io/filimo-api/db.json")).json()).menu.map(e=>`<div class="menu__item">
              <a href="#" id="menu__link">
                <img src=${e.svgLink} alt=${e.alt}>
              ${e.name}</a>
            </div>`),document.querySelector(".menu__nav").insertAdjacentHTML("beforeend",n.join(""))}async function w(){let n=document.querySelector("#slider-container"),t=n.children;setInterval(()=>{let a=n.querySelector(".active"),s=a.nextElementSibling;s||(s=t[0]),s.classList.add("active"),a.classList.remove("active")},5e3);let e=await(await fetch("https://omidxalili71.github.io/filimo-api/db.json")).json(),i="";i=e.slider.map(a=>`<img id="slider-img" class="active" src=${a.src} alt=${a.alt} />`),document.querySelector("#slider-container").insertAdjacentHTML("afterbegin",i.join(""))}async function h(n){let t=n.map(e=>e.exclusiveCode),r=n.map(e=>{if(t.join("").includes("s"))return`<div id="film__title">
      <h5>${e.description.title}</h5>
      <h4>${e.description.coach}</h4>
    </div>
    <div id="tags">
      <span>${e.description.tags.tag1}</span>
      <span>${e.description.tags.tag2}</span>
    </div>
    <div id="film__description">
      <p>${e.description.summury}</p>
    </div>`;if(t.join("").includes("f"))return`<div id="film__title">
      <h5>${e.description.title}</h5>
      <h4>${e.description.coach}</h4>
    </div>
    <div id="tags">
      <span>${e.description.tags.tag1}</span>
      <span>${e.description.tags.tag2}</span>
    </div>
    <div id="film__description">
      <p>${e.description.summury}</p>
    </div>
    <div id="film__more__title">
  <div class="permium" id="permium">
    <span class="pc:block">
      <img src="./public/svg/ticket.svg" alt="" />
    </span>
    <a class="permium__title parastyle" href="#">
      خرید اشتراک و تماشا
    </a>
  </div>
  <p>
    ${e.filmDetail.esra} - ${e.filmDetail.duration} - ${e.filmDetail.born} - ${e.filmDetail.quality}
  </p>
</div>`});document.querySelector(".pop__down .description").innerHTML=r.join("")}async function _(n){n.map(t=>(document.querySelector("#film__title h5").innerText=t.description.title,document.querySelector("#film__title h4").innerText=t.description.coach,document.querySelector("#tags span:nth-of-type(1)").innerText=t.description.tags.tag1,document.querySelector("#tags span:nth-of-type(2)").innerText=t.description.tags.tag2,document.querySelector("#film__description p").innerText=t.description.summury))}async function v(n){let r=await(await fetch("https://omidxalili71.github.io/filimo-api/db.json")).json(),e=n.map(s=>s.exclusiveCode),a=r.cardSlider.filter(s=>s.exclusiveCode===e.join("")).map(s=>{if(e.join("").includes("s"))return`<div class="swiper-slide">
                      <div class="slide-div">
                        <img src=${s.src} alt=${s.alt}>
                      </div>
                      <div class="slide-title">
                        <p>فصل ${s.session} قسمت ${s.part}</p>
                      </div>
                        <div class="lock-div">
                            <img src="./public/images/pop-serial/download.png" alt="lock" >
                        </div>
                    </div>`});document.querySelector(".mySwiper .swiper-wrapper").innerHTML=a,new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{200:{slidesPerView:2,spaceBetween:20},700:{slidesPerView:3,spaceBetween:30},1e3:{slidesPerView:4,spaceBetween:40}}})}async function g(n){let r=n.map(e=>`<img src="${e.logoUrl}" alt="${e.cardAlt}">`);document.querySelector(".cover__logo").innerHTML=r}async function f(n){document.querySelector(".pop__link .active");let t=n.map(c=>`<div id="${c.exclusiveCode}" class="card" data-bg=${c.bgURL}>
                <img src=${c.cardSrc} alt=${c.cardAlt} />
                <div class="filimo__special">

                </div>
              </div>`);document.querySelector(".pop__top .cards").innerHTML=t.join("");let e=[...document.querySelectorAll(".card")];function i(){e[0].classList.add("active")}i();let a=document.querySelector(".cards .active"),s=document.querySelector(".popular__center .pop__down");function l(c){let d=c.attributes[2].nodeValue;s.style.backgroundImage=`url('${d}')`}l(a);function o(){let c=a.attributes[0].nodeValue;return n.filter(p=>p.exclusiveCode===c)}o(),h(o()),v(o()),g(o());function u(c){c.map(d=>{d.addEventListener("click",function(){a.classList.remove("active"),d.classList.add("active"),a=d;let p=a.attributes[2].nodeValue;s.style.backgroundImage=`url('${p}')`,_(o()),v(o()),g(o())})})}u(e)}const y=()=>{let n=!1,t,r;const e=document.querySelector(".cards"),i=l=>{n=!0,t=l.pageX-e.offsetLeft,r=e.scrollLeft},a=l=>{n=!1},s=l=>{if(l.preventDefault(),!n)return;const u=l.pageX-e.offsetLeft-t;e.scrollLeft=r-u};e.addEventListener("mousemove",s,!1),e.addEventListener("mousedown",i,!1),e.addEventListener("mouseup",a,!1),e.addEventListener("mouseleave",a,!1)};async function b(){let t=await(await fetch("https://omidxalili71.github.io/filimo-api/db.json")).json(),r=t.favList.filter(l=>l.categury==="serial"),e=document.querySelector("#pop-film"),i=document.querySelector("#pop-serial"),a=document.querySelector(".mySwiper .swiper-button-next"),s=document.querySelector(".mySwiper .swiper-button-prev");e.addEventListener("click",function(){i.classList.remove("active"),e.classList.add("active"),a.classList.add("hidden"),s.classList.add("hidden"),r=t.filter(l=>l.categury==="film"),f(r)}),i.addEventListener("click",function(){e.classList.remove("active"),i.classList.add("active"),a.classList.remove("hidden"),s.classList.remove("hidden"),r=t.filter(l=>l.categury==="serial"),f(r)}),f(r),y()}async function $(){let r=(await(await fetch("https://omidxalili71.github.io/filimo-api/db.json")).json()).freeContent.map(e=>`<div class="swiper-slide">
                <div class="freee">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 13.3333H3.33337C2.80294 13.3333 2.29423 13.1226 1.91916 12.7475C1.54409 12.3724 1.33337 11.8637 1.33337 11.3333V4.66663C1.33337 4.13619 1.54409 3.62749 1.91916 3.25241C2.29423 2.87734 2.80294 2.66663 3.33337 2.66663H12.6667C13.1971 2.66663 13.7058 2.87734 14.0809 3.25241C14.456 3.62749 14.6667 4.13619 14.6667 4.66663V11.3333C14.6667 11.8637 14.456 12.3724 14.0809 12.7475C13.7058 13.1226 13.1971 13.3333 12.6667 13.3333ZM2.86197 4.19522C2.73695 4.32025 2.66671 4.48981 2.66671 4.66663V11.3333C2.66671 11.5101 2.73695 11.6797 2.86197 11.8047C2.98699 11.9297 3.15656 12 3.33337 12H12.6667C12.8435 12 13.0131 11.9297 13.1381 11.8047C13.2631 11.6797 13.3334 11.5101 13.3334 11.3333V4.66663C13.3334 4.48981 13.2631 4.32025 13.1381 4.19522C13.0131 4.0702 12.8435 3.99996 12.6667 3.99996H3.33337C3.15656 3.99996 2.98699 4.0702 2.86197 4.19522ZM9.62005 8.66663L7.33338 10.1466C7.20743 10.23 7.0612 10.2776 6.91031 10.2843C6.75941 10.291 6.60954 10.2565 6.4767 10.1846C6.34387 10.1128 6.23307 10.0061 6.15616 9.87611C6.07925 9.74612 6.03911 9.59767 6.04004 9.44663V6.49996C6.03911 6.34892 6.07925 6.20047 6.15616 6.07048C6.23307 5.94049 6.34387 5.83384 6.4767 5.76195C6.60954 5.69005 6.75941 5.65561 6.91031 5.66231C7.0612 5.669 7.20743 5.71659 7.33338 5.79996L9.62005 7.26663C9.737 7.34218 9.83316 7.44582 9.89975 7.5681C9.96634 7.69038 10.0012 7.8274 10.0012 7.96663C10.0012 8.10586 9.96634 8.24288 9.89975 8.36516C9.83316 8.48744 9.737 8.59108 9.62005 8.66663Z" fill="#18A456"></path>
                    </svg>
                    <p>رایگان</p>
                  </div>
                <img src=${e.src} alt=${e.alt}>
                <div class="swiper-slide-title">
                    <h5>${e.title}</h5>
                </div>
            </div>`);document.querySelector(".fcSwiper .swiper-wrapper").insertAdjacentHTML("beforeend",r.join(""))}async function S(){let r=(await(await fetch("https://omidxalili71.github.io/filimo-api/db.json")).json()).onlineCinema.map(e=>`<div id="ticket__item">
                <div id="ticket__item__image">
                  <img src=${e.src} alt=${e.alt}>
                </div>
                <div id="ticket__item__desc">
                  <div id="online__film__title">
                    <h4>${e.title}</h4>
                    <div id="ekraan">
                      <img src="./public/images/svg/ekraan.png" alt="">
                      <h5>اکران آنلاین</h5>
                    </div>
                  </div>
                  <div id="coach">
                    <h5>کارگردان: ${e.coach}</h5>
                  </div>
                  <div id="tags">
                    <span>${e.tags.tag1}</span>
                    <span>${e.tags.tag2}</span>
                  </div>
                  <div id="buy__ticket">
                    <a href="#">خرید بلیت</a>
                  </div>
                </div>
              </div>`);document.querySelector(".ticket__box").insertAdjacentHTML("afterbegin",r.join(""))}async function L(){let r=(await(await fetch("https://omidxalili71.github.io/filimo-api/db.json")).json()).feedback.map(e=>`<div class="swiper-slide">
                    <div id="userName__box">
                      <div id="userName">
                        <img src="./public/images/faq/avatar.png" alt="adamak">
                        <h5>${e.userName}</h5>
                      </div>
                      <div id="userIcon">
                        <img src="./public/images/faq/virgul.png" alt="chat">
                      </div>
                    </div>
                    <div id="text__box">
                      <p>${e.description}</p>
                    </div>
                </div>`);document.querySelector(".ucSwiper .swiper-wrapper").insertAdjacentHTML("afterbegin",r.join(""))}async function C(){let r=(await(await fetch("https://omidxalili71.github.io/filimo-api/db.json")).json()).faq.map(e=>`<div class="accordion-single-item js-acc-item">
                  <h2 class="accordion-single-title js-acc-single-trigger">${e.question}</h2>
                  <div class="accordion-single-content">
                    <p>${e.answer}</p>
                  </div>
                </div>`);document.querySelector(".accordion-single").insertAdjacentHTML("afterbegin",r.join(""))}async function j(){let r=(await(await fetch("https://omidxalili71.github.io/filimo-api/db.json")).json()).footer.map(e=>{if(e.svgUrl!==""){if(e.subMenu.length===0)return`<div class="nav__item group">
                    <img src=${e.svgUrl} alt="">
                    <a href=${e.href}>${e.title}</a>
                  </div>`;if(e.subMenu.length>0)return`<div class="nav__item group">
                    <img src=${e.svgUrl} alt="">
                    <a href=${e.href}>${e.title}</a>
                    <div class="submenu">
                      ${e.subMenu.map(i=>`<div class="submenu__item">
                        <a href=${i.href}>${i.title}</a>
                      </div>`).join("")}
                  </div>`}else if(e.svgUrl===""){if(e.subMenu.length===0)return`<div class="nav__item group">
                    <a href=${e.href}>${e.title}</a>
                  </div>`;if(e.subMenu.length>0)return`<div class="nav__item group">
                    <img src=${e.svgUrl} alt="">
                    <a href=${e.href}>${e.title}</a>
                    <div class="submenu">
                      ${e.subMenu.map(i=>`<div class="submenu__item">
                        <a href=${i.href}>${i.title}</a>
                      </div>`).join("")}
                  </div>`}});document.querySelector(".footer__center nav").insertAdjacentHTML("afterbegin",r.join(""))}function x(){new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{200:{slidesPerView:2,spaceBetween:20},700:{slidesPerView:3,spaceBetween:30},1e3:{slidesPerView:4,spaceBetween:40}}})}function q(){new Swiper(".fcSwiper",{slidesPerView:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{400:{slidesPerView:3,spaceBetween:30},700:{slidesPerView:4,spaceBetween:30},950:{slidesPerView:5,spaceBetween:30},1200:{slidesPerView:6,spaceBetween:30}}})}function V(){new Swiper(".ucSwiper",{slidesPerView:3,spaceBetween:30,centeredSlides:!1,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{300:{slidesPerView:1,spaceBetween:20},650:{slidesPerView:2,spaceBetween:30},1e3:{slidesPerView:3,spaceBetween:40}}})}function k(){document.querySelectorAll(".js-acc-single-trigger").forEach(r=>r.addEventListener("click",t));function t(){const r=document.querySelectorAll(".js-acc-item"),e=this.parentNode;r.forEach(i=>{if(e==i){e.classList.toggle("is-open");return}})}}async function E(){await m(),await w(),await b(),await $(),await S(),await L(),await C(),await j(),x(),q(),V(),k()}E();
