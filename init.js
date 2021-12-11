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


const stations = Object.keys(adjac_lis)

