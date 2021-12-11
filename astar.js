class Graph {
    constructor(adjacencyList,heuristic){
        this.adjacencyList=adjacencyList;
        this.heuristic=heuristic;
    }

    get_graph(){
        return this.adjacencyList
    }

    get_neighbors(v){
        return this.adjacencyList[v]
    }

    h(n){
        
        return this.heuristic[n]
    }


    a_star_algorithm(start, stop){
        // create an openlist containaing the starting node
        // it will contain the nodes that have been generated but have not been yet visited 
        const open_lst = new Set([start])
        // list which contain the visited nodes
        const closed_lst = new Set([])
        //dist has present distances from start to all other nodes
        //the default value is +infinity
        const dist = {}
        dist[start] = 0
        //par contains an adjac mapping of all nodes
        const par = {}
        par[start] = start

        while (open_lst.size >0) {
            var n = 'None'
            //it will find a node with the lowest value of f()
            // we compute f() with the sum of g() and h(), for each node in the open_list
            open_lst.forEach(v => {
               if (n == 'None' || (dist[v]+ this.h(v))<(dist[n]+this.h(n))) {
                   // (dist[v]+ this.h(v))<(dist[n]+this.h(n) <=> f(v)<f(n)
                   n=v
               } 
            });

            if (n =='None') {
                console.log('no path 1');
                return 'None'
                
            }
            //if the current node is stop so finish !!
            if (n == stop) {

                const reconst_path = []
                const reconst_dist = []
                while (par[n]!= n) {
                    reconst_dist.push(dist[n])
                    reconst_path.push(n)
                    n=par[n]
                }

                reconst_path.push(start)
                reconst_path.reverse()
                console.log('path found', reconst_path);
                console.log('dist found: '+ stop, dist[stop]);
                return [reconst_path, dist[stop]]
            
            } 
            //for all the neighbors of the current node do
            this.get_neighbors(n).forEach(node => {
                const m = node[0]
                const weight = node[1]
                //if the neighbor node is not present add it to the open_list and add its 
                if (!open_lst.has(m) && !closed_lst.has(m)) {
                    // put its dist in the dist list
                    open_lst.add(m)
                    par[m] = n
                    dist[m] = dist[n] + weight
                } 
                //otherwise, check if it's faster to visit n, then m
                
                else {
                    if (dist[m]>dist[n]+weight) {
                        //update par data and poo data
                        dist[m]= dist[n]+weight
                        par[m]=n
                        //and if the node was in the closed_lst, move it to open_lst
                        if (closed_lst.has(m)) {
                            closed_lst.delete(m)
                            open_lst.add(m)
                            
                        }
                        
                    }
                    
                }
                
            });
            //remove n from the open_lst, and add it to closed_lst because all of his neighbors were inspected
            open_lst.delete(n)
            closed_lst.add(n)
            
        }
        console.log('no path2');
        return 'None'

    }

    get_H(stop){
        Object.keys(this.heuristic).forEach(e => {
            var h1 = this.a_star_algorithm(e, stop)
            this.heuristic[e] =  Math.round(h1[1]*0.6)
            
        });
        
    }

}


const H0 = {
    'Heroiv Dnipra':0,
    'Minska':0,
    'Obolon':0,
    'Petrivka':0,
    'Tarasa Shevchenka':0,
    'Kontraktova Ploschcha':0,
    'Poshtova Ploschcha':0,
    'Maidan Nezalezhnosti':0,
    'Ploshcha Lva Tolstoho':0,
    'Olimpiiska':0,
    'Palats Ukrayina':0,
    'Lybidska':0,
    'Demiivska':0,
    'Holosiivska':0,
    'Vasylkivska':0,
    'Vystavkovyi Tsentr':0,
    'Ipodrom':0,
    'Teremky':0,
    'Zoloti Vorota':0,
    'Palats Sportu':0,
    'Arsenalna':0,
    'Khreshchatyk':0,
    'Teatralna':0,
    'Lisova':0,
    'Chernihivska':0,
    'Darnytsia':0,
    'Livoberezhna':0,
    'Hidropark':0,
    'Dnipro':0,
    'Universytet':0,
    'Vokzalna':0,
    'Politekhnichyi Instytut':0,
    'Shuliavska':0,
    'Beresteiska':0,
    'Nyvky':0,
    'Sviatoshyn':0,
    'Zhytomyrska':0,
    'Akademmistechko':0,
    'Lukianivska':0,
    'Dorohozhychi':0,
    'Syrets':0,
    'Klovska':0,
    'Pecherska':0,
    'Druzhby Narodiv':0,
    'Vydubychi':0,
    'Slavutych':0,
    'Osokorky':0,
    'Pozniaky':0,
    'Kharkivska':0,
    'Vyrlytsia':0,
    'Boryspilska':0,
    'Chervony Khutir':0
      
}
var H = H0
graph = new Graph(adjac_lis,H0)
a = graph.get_neighbors('A')
console.log(a);




//grid creation
const grid= new gridjs.Grid({
    columns: ['Search the shortest path !!'],
    data: [{}]
    
  }).render(document.getElementById("wrapper"))

// event listeners

const arr = $( "#arrive" ).val();
const dep = $( "#departure" ).val();


$("#search").on("click",()=> {
    const arr = $( "#arrive" ).val();
    const dep = $( "#departure" ).val();
    // compute the heuristic with dijktra  
    graph.get_H(dep)
    console.log(graph.heuristic)
    const dt = graph.a_star_algorithm(dep,arr)

    grid.updateConfig({
        // lets update the columns field only
        columns: ["departure",'Names','stop','Distance'],
        pagination: {
          limit: 10
        },
        search: true,
        resizable: true,
        sort: true,
        data:[[dep, dt[0].join("=> "), arr,Math.round(dt[1])]]
      }).forceRender();
}
)
$("#arrive").on("change",()=> console.log(arr));
$("#departure").on("change",()=> console.log(dep));






