!function(){function e(e){const t=window.location.href;document.querySelector("#app").textContent=e?t.includes("#")?t.replace(/#.*/,e):t+e:window.location.href}document.querySelectorAll("a").forEach((e=>{e.href="/spa-deploy-09.2022"+e.pathname})),document.body.addEventListener("click",(t=>{if(t.target.matches("a")){if(t.preventDefault(),!window.history)throw new Error("Your browser doesn't support History API");history.pushState({},"",t.target.href),e()}})),e()}();