import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-BbbuE1sJ.js";const s=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");let c,d=null;n.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(f.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(d=t,n.disabled=!1)}};m(s,b);n.addEventListener("click",()=>{d&&(n.disabled=!0,s.disabled=!0,c=setInterval(()=>{const e=new Date().getTime(),t=d-e;if(t<=0){clearInterval(c),i(0,0,0,0),s.disabled=!1;return}const{days:o,hours:r,minutes:u,seconds:l}=E(t);i(o,r,u,l)},1e3))});function E(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%864e5%36e5/6e4),seconds:Math.floor(e%864e5%36e5%6e4/1e3)}}function i(e,t,o,r){h.textContent=a(e),y.textContent=a(t),p.textContent=a(o),S.textContent=a(r)}function a(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
