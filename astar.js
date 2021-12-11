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
        const open_lst = new Set([start])
        const closed_lst = new Set([])

        const poo = {}
        poo[start] = 0

        const par = {}
        par[start] = start

        while (open_lst.size >0) {
            var n = 'None'

            open_lst.forEach(v => {
                console.log(v);
               if (n == 'None' || (poo[v]+ this.h(v))<(poo[n]+this.h(n))) {
                   n=v
               } 
    

            });
            if (n =='None') {
                console.log('no path 1');
                return 'None'
                
            }
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
            this.get_neighbors(n).forEach(node => {
                const m = node[0]
                const weight = node[1]
                if (!open_lst.has(m) && !closed_lst.has(m)) {
                    open_lst.add(m)
                    par[m] = n
                    poo[m] = poo[n] + weight
                } else {
                    if (poo[m]>poo[n]+weight) {
                        poo[m]= poo[n]+weight
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
    'Heroiv Dnipra': [['Minska', 0.8]],
    'Minska': [['Heroiv Dnipra', 0.8],['Obolon', 0.4]],
    'Obolon': [['Minska', 0.4],['Petrivka', 1.5]],
    'Petrivka': [['Obolon', 1.5], ['Tarasa Shevchenka', 1.6]],
    'Tarasa Shevchenka': [['Petrivka', 1.6], ['Kontraktova Ploschcha', 1]],
    'Kontraktova Ploschcha': [['Tarasa Shevchenka', 1], ['Poshtova Ploschcha', 0.9]],
    'Poshtova Ploschcha': [['Kontraktova Ploschcha', 0.9], ['Maidan Nezalezhnosti', 1.3]],
    'Maidan Nezalezhnosti': [['Poshtova Ploschcha', 1.3], ['Khreshchatyk', 0.2]],
    'Ploshcha Lva Tolstoho': [['Khreshchatyk', 1], ['Palats Sportu', 0.1], ['Teatralna', 0.8], ['Olimpiiska', 0.7]],
    'Olimpiiska': [['Ploshcha Lva Tolstoho', 0.7], ['Palats Ukrayina', 1.2]],
    'Palats Ukrayina': [['Olimpiiska', 1.2], ['Lybidska', 0.8]],
    'Lybidska': [['Palats Ukrayina', 0.8], ['Demiivska', 1.2]],
    'Demiivska': [['Lybidska', 1.2], ['Holosiivska', 0.9]],
    'Holosiivska': [['Demiivska', 0.9], ['Vasylkivska', 1.4]],
    'Vasylkivska': [['Holosiivska', 1.4], ['Vystavkovyi Tsentr', 1.5]],
    'Vystavkovyi Tsentr': [['Vasylkivska', 1.5], ['Ipodrom', 0.9]],
    'Ipodrom': [['Vystavkovyi Tsentr', 0.9], ['Teremky', 1.4]],
    'Teremky': [['Ipodrom', 1.4]],
    'Zoloti Vorota': [['Lukianivska', 3.3], ['Teatralna', 0]],
    'Palats Sportu': [['Ploshcha Lva Tolstoho', 0.1], ['Klovska', 0.9]],
    'Arsenalna': [['Dnipro', 0.9], ['Khreshchatyk', 1.65]],
    'Khreshchatyk': [['Maidan Nezalezhnosti', 0.2], ['Ploshcha Lva Tolstoho', 1], ['Teatralna', 0.7], ['Arsenalna', 1.65]],
    'Teatralna': [['Khreshchatyk', 0.7], ['Zoloti Vorota', 0], ['Ploshcha Lva Tolstoho', 0.8], ['Universytet', 0.8]]

}

graph = new Graph(adjac_lis)
a = graph.get_neighbors('A')
console.log(a);
graph.a_star_algorithm('Obolon','Zoloti Vorota')

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


