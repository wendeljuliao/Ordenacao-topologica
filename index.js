class Grafo {
    constructor(){
        this.listaAdjacencia = {}
    }

    addVertice(vertice){
        if(!this.listaAdjacencia[vertice]){
            this.listaAdjacencia[vertice] = [];
        }
    }

    addAresta(v1, v2){
        this.listaAdjacencia[v1].push(v2);
    }
}

const grafo = (
    () => {
        const g = new Grafo();

        [
            "CAMISA",
            "COLAR",
            "BLAZER",
            "CINTO",
            "CUECA/CALCINHA",
            "CALCA",
            "SAPATOS",
            "MEIAS",
            "WATCH",
          ].forEach((v) => g.addVertice(v));
          g.addAresta("CAMISA", "COLAR");
          g.addAresta("COLAR", "BLAZER");
          g.addAresta("CAMISA", "CINTO");
          g.addAresta("CINTO", "BLAZER");
          g.addAresta("CUECA/CALCINHA", "CALCA");
          g.addAresta("CALCA", "CINTO");
          g.addAresta("CALCA", "SAPATOS");
          g.addAresta("CUECA/CALCINHA", "SAPATOS");
          g.addAresta("MEIAS", "SAPATOS");
        return g;
    }
)();

const dfs = (v, n, visitado, topNums) => {
    visitado[v] = true;
    const vizinhos = grafo.listaAdjacencia[v];

    for(const vizinho of vizinhos) {
        if(!visitado[vizinho]){
            n = dfs(vizinho, n, visitado, topNums);
        }
    }
    topNums[v] = n;
    return n - 1;
}

const topSort = (grafo) => {
    const vertices = Object.keys(grafo.listaAdjacencia);
    const visitado = {};
    const topNums = {};
    let n = vertices.length - 1; 

    for(const v of vertices) {
        if(!visitado[v]) {
            n = dfs(v, n, visitado, topNums, grafo);
        }
    }
    return topNums;
}

console.log(topSort(grafo));
