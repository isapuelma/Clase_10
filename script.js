const portfolio = document.querySelector("#chabe");

async function datos(raw) {
    try {
        let consulta = await fetch(raw);
        let trabajos = await consulta.json();
        let trabajos = resultado.data;
        console.log(trabajos);
        trabajos.forEach((trabajo) => {
            portfolio.innerHTML += `
                            <div class="col">
                                <div class="card shadow-sm">
                                <img src="${trabajo.photo}" class="card-img-top">
                                <div class="card-body">
                                <p class="card-text">${trabajo.title}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">${trabajo.category}</button>
                                </div>
                                <small class="text-body-secondary">Reciente </small>
             </div>
             </div>
            </div>
            </div>`;
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
        console.error("Detalles:", error);
    }
}


datos("https://api.myjson.online/v1/records/39c562d7-8786-43c6-9fcd-d2bb67c34497");







