class Graph {
    constructor(adjacencyList){
        this.adjacencyList=adjacencyList;
    }

    get_graph(){
        return this.adjacencyList
    }

    get_neighbors(v){
        return this.adjacencyList[v]
    }

    h(n){
        const H = {
            'A': 1,
            'B': 1,
            'C': 1,
            'D': 1
        }
        return H[n]
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
                while (par[n]!= n) {
                    reconst_path.push(n)
                    n=par[n]
                }
                reconst_path.push(start)
                reconst_path.reverse()
                console.log('path found', reconst_path);
                return reconst_path
            
            } 
            //for all the neighbors of the current node do
            this.get_neighbors(n).forEach(node => {
                const m = node[0]
                const weight = node[1]
                if (!open_lst.has(m) && !closed_lst.has(m)) {
                    open_lst.add(m)
                    par[m] = n
                    dist[m] = dist[n] + weight
                } else {
                    if (dist[m]>dist[n]+weight) {
                        dist[m]= dist[n]+weight
                        par[m]=n
                        if (closed_lst.has(m)) {
                            closed_lst.delete(m)
                            open_lst.add(m)
                            
                        }
                        
                    }
                    
                }
                
            });
            open_lst.delete(n)
            closed_lst.add(n)
            
        }
        console.log('no path2');
        return 'None'

        
    }

}

const adjac_lis = {
    'A': [['B', 1], ['C', 3], ['D', 9]],
    'B': [['D', 10],['A', 1]],
    'C': [['D', 4],['A', 3]]
}

graph = new Graph(adjac_lis)
a = graph.get_neighbors('A')
console.log(a);
graph.a_star_algorithm('A','D')

// event listeners

const arr = $( "#arrive" ).val();
const dep = $( "#departure" ).val();

$("#search").on("click",()=> {
    const arr = $( "#arrive" ).val();
    const dep = $( "#departure" ).val();
    graph.a_star_algorithm(dep,arr)
}
)


$("#arrive").on("change",()=> console.log(arr));
$("#departure").on("change",()=> console.log(dep));
console.log(dep)


