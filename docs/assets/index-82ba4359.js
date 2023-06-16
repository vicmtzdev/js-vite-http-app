(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=async()=>(await(await fetch("https://strangerthings-quotes.vercel.app/api/quotes")).json())[0],a=async o=>{o.innerHTML="Loading...";const r=document.createElement("blockquote"),s=document.createElement("h3"),n=document.createElement("button");n.innerText="Next Quote";const e=t=>{r.innerHTML=t.quote,s.innerHTML=t.author,o.replaceChildren(r,s,n)};await i().then(e),n.addEventListener("click",async()=>{o.replaceChildren(r,s),e(await i())})};document.querySelector("#app").innerHTML=`
  <div>
    
    <img src="./src/assets/st.png" class="logocustom vanilla"/>
    <div class="card">

    </div>

  </div>
`;const u=document.querySelector(".card");a(u);
