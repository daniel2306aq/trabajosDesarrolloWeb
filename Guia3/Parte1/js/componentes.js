
    async function cargarComponente(id,url) {
        const path = "componentes/"+id+"/"+url
        const resp = await fetch(path);
        const html = await resp.text();
        document.getElementById(id).innerHTML = html;
    }
