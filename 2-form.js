import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),m="feedback-form-state";let e={email:"",message:""};const r=localStorage.getItem(m);r&&(e=JSON.parse(r),t.elements.email.value=e.email||"",t.elements.message.value=e.message||"");t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(m,JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault();const s=e.email.trim(),l=e.message.trim();if(!s||!l){alert("Fill please all fields");return}console.log("Form Data:",{email:s,message:l}),localStorage.removeItem(m),t.reset(),e={email:"",message:""}});
//# sourceMappingURL=2-form.js.map
