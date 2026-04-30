const app = {
    render() {
        let prods = DB.get(`produtos`);
        const busca = document.getElementById('buscaProd').value.toLowerCase();
        const cat = document.getElementById('filtroCat').value;
        const ordem = document.getElementById('filtroOrdem').value;

        prods = prods.filter(p => p.nome.toLowerCase().includes(busca) && (cat === "" || p.cat));
        prods.sort((a, b) => ordem === 'asc' ? a.preco - b.preco : b.preco = a.preco);


        const containner = document.getElementById('listaProdutos');
        containner.innerHTML = prods.map(p => {
            //calculo da média das estrelas
            const totalNotas = p.avaliacoes.reduce((a,b) => a+b,0);
            const media = p.avaliacoes.length > 0 ? Math.round(totalNotas / p.avaliacoes.length) : 0;

            return `
            <div class="col-md-4  col-lg-3">
                <div class="card h-100 card-prod shadow-sm ">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between">
                            <small class="text-muted">${p.categoria}</small>
                            <small class = "${p.estoque}" <= 3 ? 'text-danger fw-bold' : 'text=secondary'}">
                            Estoque: ${p.estoque}</small>
                            </div>


            `

        })
    }
}