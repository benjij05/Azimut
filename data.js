const catalogue = {
    // --- 1. FONTAINEBLEAU & SUD ---
    
    "25-bosses": {
        titre: "Circuit des 25 Bosses",
        lieu: "Fontainebleau - Trois Pignons (77)",
        description: "Le parcours d'entraînement alpin le plus célèbre d'Île-de-France. Succession de montées et descentes dans les rochers. Physique !",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Massif_des_Trois_Pignons.jpg/800px-Massif_des_Trois_Pignons.jpg",
        duree: "6h30",
        distance: "16 km",
        denivele: "830m D+",
        difficulte: "difficile",
        // Parking de la Croix Saint-Jérôme
        gps: { lat: 48.3881, lon: 2.5155 }, 
        materiel: ["3L d'eau (indispensable)", "Chaussures avec bon grip", "Trousse de secours"]
    },

    "25-bosses-short": {
        titre: "Circuit des Bosses (Boucle courte)",
        lieu: "Fontainebleau - Trois Pignons (77)",
        description: "Une version allégée qui permet de profiter du paysage et des rochers sans faire le tour complet.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sables_du_Cul_du_Chien.jpg/800px-Sables_du_Cul_du_Chien.jpg",
        duree: "3h00",
        distance: "9 km",
        denivele: "400m D+",
        difficulte: "moyen",
        gps: { lat: 48.3881, lon: 2.5155 },
        materiel: ["1.5L d'eau", "En-cas", "Téléphone chargé"]
    },

    "gorges-apremont": {
        titre: "Gorges d'Apremont",
        lieu: "Barbizon (77)",
        description: "Magnifique balade au départ du célèbre village des peintres. Chaos rocheux, cavernes et points de vue.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Gorges_d%27Apremont_-_Barbizon.jpg/800px-Gorges_d%27Apremont_-_Barbizon.jpg",
        duree: "2h00",
        distance: "5 km",
        denivele: "100m D+",
        difficulte: "facile",
        gps: { lat: 48.4352, lon: 2.6287 },
        materiel: ["Appareil photo", "Chaussures souples"]
    },

    "rocher-canon": {
        titre: "Rocher Canon & Mare aux Evées",
        lieu: "Forêt de Fontainebleau (77)",
        description: "Un secteur très esthétique, idéal en automne. Passage par la Mare aux Evées, un étang artificiel surprenant.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mare_aux_Evees_01.jpg/800px-Mare_aux_Evees_01.jpg",
        duree: "4h00",
        distance: "12 km",
        denivele: "150m D+",
        difficulte: "moyen",
        gps: { lat: 48.4630, lon: 2.6661 },
        materiel: ["Jumelles (oiseaux)", "Pique-nique"]
    },

    // --- 2. VALLEE DE CHEVREUSE & OUEST ---

    "viaduc-fauvettes": {
        titre: "Viaduc des Fauvettes",
        lieu: "Bures-sur-Yvette (91)",
        description: "Promenade spectaculaire passant sous (et sur) un ancien viaduc ferroviaire. Ambiance très verte.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Viaduc_des_Fauvettes.jpg/800px-Viaduc_des_Fauvettes.jpg",
        duree: "2h45",
        distance: "10 km",
        denivele: "250m D+",
        difficulte: "facile",
        gps: { lat: 48.6809, lon: 2.1474 },
        materiel: ["Vêtements de pluie (boueux en hiver)"]
    },

    "roche-guyon": {
        titre: "Crêtes de la Roche-Guyon",
        lieu: "Val d'Oise (95)",
        description: "Sentier panoramique sur les falaises de craie dominant la Seine, au-dessus d'un des plus beaux villages de France.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/La_Roche-Guyon_vue_du_donjon.jpg/800px-La_Roche-Guyon_vue_du_donjon.jpg",
        duree: "3h30",
        distance: "11 km",
        denivele: "300m D+",
        difficulte: "moyen",
        gps: { lat: 49.0815, lon: 1.6292 },
        materiel: ["Bâtons (ça grimpe)", "Chapeau (peu d'ombre sur les crêtes)"]
    }
};