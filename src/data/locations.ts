export interface Location {
  id: string;
  name: string;
  slug: string;
  region: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  neighborhoods?: string[];
  distance?: string;
  mapUrl?: string;
}

export const locations: Location[] = [
  // Montreal Boroughs
  {
    id: "montreal-centre-ville",
    name: "Centre-Ville Montreal",
    slug: "montreal/centre-ville/birthday-hosting",
    region: "Montreal",
    title: "Kids Birthday Party Venue Centre-Ville Montreal | Private Party Space | Centre Funtastique",
    metaDescription: "Best kids birthday party venue in Centre-Ville Montreal. Private party space with themed decorations, party host, and activities. Book your child's birthday party today! Serving downtown Montreal families.",
    h1: "Kids Birthday Party Venue in Centre-Ville Montreal",
    intro: "Planning a children's birthday party in downtown Montreal? Centre Funtastique is the premier kids birthday party venue near Centre-Ville, offering private party space with themed decorations, professional party hosting, and fun activities. Perfect for children ages 2-12 in downtown Montreal.",
    neighborhoods: ["Downtown", "Old Montreal", "Quartier des Spectacles"],
    distance: "15 minutes from Centre-Ville",
    mapUrl: "https://www.google.com/maps/dir/Centre-Ville+Montreal/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "montreal-plateau-mont-royal",
    name: "Plateau-Mont-Royal",
    slug: "montreal/plateau-mont-royal/birthday-hosting",
    region: "Montreal",
    title: "Kids Birthday Party Venue Plateau-Mont-Royal Montreal | Children's Party Space | Centre Funtastique",
    metaDescription: "Top kids birthday party venue in Plateau-Mont-Royal, Montreal. Private children's party space with themed birthday decorations, activities & party host. Book now! Serving Mile End, Laurier.",
    h1: "Children's Birthday Party Venue in Plateau-Mont-Royal, Montreal",
    intro: "Plateau-Mont-Royal families love Centre Funtastique for memorable kids birthday parties! Our private children's birthday party venue is just 10 minutes away, offering themed party packages, professional hosting, and fun activities for kids ages 2-12. The perfect birthday celebration space for Plateau families.",
    neighborhoods: ["Mile End", "Laurier", "Mont-Royal"],
    distance: "10 minutes from Plateau-Mont-Royal",
    mapUrl: "https://www.google.com/maps/dir/Plateau-Mont-Royal/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "montreal-rosemont",
    name: "Rosemont-La Petite-Patrie",
    slug: "montreal/rosemont/birthday-hosting",
    region: "Montreal",
    title: "Kids Birthday Party Venue Rosemont Montreal | Children's Party Space Little Italy | Centre Funtastique",
    metaDescription: "Best kids birthday party venue in Rosemont-La Petite-Patrie. Private children's party space, themed birthday parties, dedicated host. Book today! Serving Rosemont, Little Italy families.",
    h1: "Children's Birthday Party Venue in Rosemont-La Petite-Patrie",
    intro: "Rosemont-La Petite-Patrie families choose Centre Funtastique for unforgettable kids birthday parties! Located just 5 minutes from Rosemont, our private children's birthday party venue offers themed decorations, party hosting, and activities. The premier birthday party space for Rosemont and Little Italy children.",
    neighborhoods: ["Little Italy", "Rosemont", "La Petite-Patrie"],
    distance: "5 minutes from Rosemont",
    mapUrl: "https://www.google.com/maps/dir/Rosemont,+Montreal/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "montreal-villeray",
    name: "Villeray-Saint-Michel",
    slug: "montreal/villeray/birthday-hosting",
    region: "Montreal",
    title: "Kids Birthday Party Venue Villeray Montreal | Children's Party Space Saint-Michel | Centre Funtastique",
    metaDescription: "Premier kids birthday party venue in Villeray-Saint-Michel. Private children's party space with themed birthday parties, activities & party host. Book your child's birthday! Serving Parc-Extension.",
    h1: "Children's Birthday Party Venue in Villeray-Saint-Michel",
    intro: "Villeray-Saint-Michel families trust Centre Funtastique for exceptional kids birthday parties! Just 8 minutes away, our private children's birthday party venue provides themed decorations, professional party hosting, and fun activities for kids ages 2-12. Perfect for Villeray and Saint-Michel children's birthday celebrations.",
    neighborhoods: ["Villeray", "Saint-Michel", "Parc-Extension"],
    distance: "8 minutes from Villeray",
    mapUrl: "https://www.google.com/maps/dir/Villeray,+Montreal/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "montreal-ahuntsic",
    name: "Ahuntsic-Cartierville",
    slug: "montreal/ahuntsic/birthday-hosting",
    region: "Montreal",
    title: "Kids Birthday Party Venue Ahuntsic Montreal | Children's Party Space Cartierville | Centre Funtastique",
    metaDescription: "Trusted kids birthday party venue in Ahuntsic-Cartierville. Private children's party space with themed birthday packages & party host. Book your child's party! Serving Ahuntsic, Bordeaux.",
    h1: "Children's Birthday Party Venue in Ahuntsic-Cartierville",
    intro: "Ahuntsic-Cartierville families choose Centre Funtastique for outstanding kids birthday parties! Located 12 minutes from Ahuntsic, our private children's birthday party venue features themed decorations, engaging activities, and professional party hosting for kids ages 2-12.",
    neighborhoods: ["Ahuntsic", "Cartierville", "Bordeaux"],
    distance: "12 minutes from Ahuntsic",
    mapUrl: "https://www.google.com/maps/dir/Ahuntsic,+Montreal/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "montreal-cote-des-neiges",
    name: "Côte-des-Neiges",
    slug: "montreal/cote-des-neiges/birthday-hosting",
    region: "Montreal",
    title: "Kids Birthday Party Venue Côte-des-Neiges Montreal | Children's Party Space NDG | Centre Funtastique",
    metaDescription: "Top kids birthday party venue near Côte-des-Neiges & NDG. Private children's party space with themed birthday parties, activities & host. Book your child's celebration! Serving Snowdon.",
    h1: "Children's Birthday Party Venue Near Côte-des-Neiges & NDG",
    intro: "Côte-des-Neiges and NDG families trust Centre Funtastique for exceptional kids birthday parties! Our private children's birthday party venue is 18 minutes away, featuring themed party packages, professional hosting, and engaging activities for kids ages 2-12.",
    neighborhoods: ["NDG", "Côte-des-Neiges", "Snowdon"],
    distance: "18 minutes from Côte-des-Neiges",
    mapUrl: "https://www.google.com/maps/dir/Côte-des-Neiges,+Montreal/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "montreal-verdun",
    name: "Verdun",
    slug: "montreal/verdun/birthday-hosting",
    region: "Montreal",
    title: "Kids Birthday Party Venue Verdun Montreal | Children's Party Space LaSalle | Centre Funtastique",
    metaDescription: "Trusted kids birthday party venue in Verdun & LaSalle. Private children's party space with themed birthday decorations, activities & party host. Book today! Serving L'Île-des-Sœurs.",
    h1: "Children's Birthday Party Venue in Verdun & LaSalle",
    intro: "Verdun and LaSalle families choose Centre Funtastique for stress-free kids birthday parties! Our private children's birthday party venue is 20 minutes from Verdun, offering themed party packages, professional hosting, and activities for kids ages 2-12.",
    neighborhoods: ["Verdun", "LaSalle", "L'Île-des-Sœurs"],
    distance: "20 minutes from Verdun",
    mapUrl: "https://www.google.com/maps/dir/Verdun,+Montreal/3551+Rue+Bélair,+Montréal"
  },

  // Laval Neighborhoods
  {
    id: "laval-chomedey",
    name: "Chomedey, Laval",
    slug: "laval/chomedey/birthday-hosting",
    region: "Laval",
    title: "Kids Birthday Party Venue Chomedey Laval | Children's Party Space | Centre Funtastique",
    metaDescription: "Best kids birthday party venue in Chomedey, Laval. Private children's party space with themed birthday parties, activities & party host. Book your child's celebration today!",
    h1: "Children's Birthday Party Venue in Chomedey, Laval",
    intro: "Chomedey families trust Centre Funtastique for exceptional kids birthday parties! Just 15 minutes from Chomedey, Laval, our private children's birthday party venue offers themed decorations, professional party hosting, and fun activities for kids ages 2-12.",
    neighborhoods: ["Chomedey Central", "Le Carrefour"],
    distance: "15 minutes from Chomedey",
    mapUrl: "https://www.google.com/maps/dir/Chomedey,+Laval/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "laval-sainte-dorothee",
    name: "Sainte-Dorothée, Laval",
    slug: "laval/sainte-dorothee/birthday-hosting",
    region: "Laval",
    title: "Kids Birthday Party Venue Sainte-Dorothée Laval | Children's Party Space | Centre Funtastique",
    metaDescription: "Top kids birthday party venue in Sainte-Dorothée, Laval. Private children's party space with themed birthday parties, activities & dedicated party host. Book your child's party!",
    h1: "Children's Birthday Party Venue in Sainte-Dorothée, Laval",
    intro: "Sainte-Dorothée families choose Centre Funtastique for memorable kids birthday parties! Our private children's birthday party venue offers themed party packages, professional hosting, and activities for Laval children ages 2-12.",
    neighborhoods: ["Sainte-Dorothée", "Îles Laval"],
    distance: "20 minutes from Sainte-Dorothée",
    mapUrl: "https://www.google.com/maps/dir/Sainte-Dorothée,+Laval/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "laval-des-rapides",
    name: "Laval-des-Rapides",
    slug: "laval/laval-des-rapides/birthday-hosting",
    region: "Laval",
    title: "Kids Birthday Party Venue Laval-des-Rapides | Children's Party Space | Centre Funtastique",
    metaDescription: "Premier kids birthday party venue in Laval-des-Rapides. Private children's party space with themed birthday parties, activities & party host. Book your child's birthday celebration!",
    h1: "Children's Birthday Party Venue in Laval-des-Rapides",
    intro: "Laval-des-Rapides families love Centre Funtastique for stress-free kids birthday parties! Located near Laval-des-Rapides, our private children's birthday party venue provides themed decorations and professional party hosting.",
    neighborhoods: ["Laval-des-Rapides", "Pont-Viau"],
    distance: "12 minutes from Laval-des-Rapides",
    mapUrl: "https://www.google.com/maps/dir/Laval-des-Rapides,+Laval/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "laval-vimont",
    name: "Vimont, Laval",
    slug: "laval/vimont/birthday-hosting",
    region: "Laval",
    title: "Kids Birthday Party Venue Vimont Laval | Children's Party Space | Centre Funtastique",
    metaDescription: "Trusted kids birthday party venue in Vimont, Laval. Private children's party space with themed birthday decorations, activities & dedicated party host. Book your child's party now!",
    h1: "Children's Birthday Party Venue in Vimont, Laval",
    intro: "Vimont families choose Centre Funtastique for unforgettable kids birthday parties! Our private children's birthday party venue offers themed party packages and professional hosting for Laval children.",
    neighborhoods: ["Vimont", "Auteuil"],
    distance: "18 minutes from Vimont",
    mapUrl: "https://www.google.com/maps/dir/Vimont,+Laval/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "laval-fabreville",
    name: "Fabreville, Laval",
    slug: "laval/fabreville/birthday-hosting",
    region: "Laval",
    title: "Kids Birthday Party Venue Fabreville Laval | Children's Party Space | Centre Funtastique",
    metaDescription: "Best kids birthday party venue in Fabreville, Laval. Private children's party space with themed birthday parties, activities & party host. Book your child's birthday celebration today!",
    h1: "Children's Birthday Party Venue in Fabreville, Laval",
    intro: "Fabreville families trust Centre Funtastique for exceptional kids birthday parties! Our private children's birthday party venue features themed decorations, activities, and professional party hosting for Laval children.",
    neighborhoods: ["Fabreville", "Sainte-Rose"],
    distance: "22 minutes from Fabreville",
    mapUrl: "https://www.google.com/maps/dir/Fabreville,+Laval/3551+Rue+Bélair,+Montréal"
  },
  // Longueuil Neighborhoods  
  {
    id: "longueuil-vieux",
    name: "Vieux-Longueuil",
    slug: "longueuil/vieux-longueuil/birthday-hosting",
    region: "Longueuil",
    title: "Kids Birthday Party Venue Vieux-Longueuil | Children's Party Space | Centre Funtastique",
    metaDescription: "Best kids birthday party venue in Vieux-Longueuil (Old Longueuil). Private children's party space with themed birthday parties, activities & party host. Book your child's celebration!",
    h1: "Children's Birthday Party Venue in Vieux-Longueuil (Old Longueuil)",
    intro: "Vieux-Longueuil families choose Centre Funtastique for exceptional kids birthday parties! Our private children's birthday party venue offers themed decorations, professional party hosting, and fun activities for South Shore children.",
    neighborhoods: ["Old Longueuil", "Centre-Ville Longueuil"],
    distance: "25 minutes from Vieux-Longueuil",
    mapUrl: "https://www.google.com/maps/dir/Vieux-Longueuil/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "longueuil-saint-hubert",
    name: "Saint-Hubert, Longueuil",
    slug: "longueuil/saint-hubert/birthday-hosting",
    region: "Longueuil",
    title: "Kids Birthday Party Venue Saint-Hubert Longueuil | Children's Party Space | Centre Funtastique",
    metaDescription: "Top kids birthday party venue in Saint-Hubert, Longueuil. Private children's party space with themed birthday parties, activities & dedicated party host. Book your child's party today!",
    h1: "Children's Birthday Party Venue in Saint-Hubert, Longueuil",
    intro: "Saint-Hubert families trust Centre Funtastique for unforgettable kids birthday parties! Our private children's birthday party venue features themed decorations, activities, and professional party hosting for Longueuil children.",
    neighborhoods: ["Saint-Hubert", "Vieux-Saint-Hubert"],
    distance: "28 minutes from Saint-Hubert",
    mapUrl: "https://www.google.com/maps/dir/Saint-Hubert,+Longueuil/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "longueuil-greenfield-park",
    name: "Greenfield Park, Longueuil",
    slug: "longueuil/greenfield-park/birthday-hosting",
    region: "Longueuil",
    title: "Kids Birthday Party Venue Greenfield Park Longueuil | Children's Party Space | Centre Funtastique",
    metaDescription: "Premier kids birthday party venue in Greenfield Park, Longueuil. Private children's party space with themed birthday parties, activities & party host. Book your child's birthday!",
    h1: "Children's Birthday Party Venue in Greenfield Park, Longueuil",
    intro: "Greenfield Park families love Centre Funtastique for memorable kids birthday parties! Our private children's birthday party venue offers themed party packages and professional hosting for South Shore children.",
    neighborhoods: ["Greenfield Park", "LeMoyne"],
    distance: "27 minutes from Greenfield Park",
    mapUrl: "https://www.google.com/maps/dir/Greenfield+Park,+Longueuil/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "longueuil-saint-lambert",
    name: "Saint-Lambert",
    slug: "longueuil/saint-lambert/birthday-hosting",
    region: "Longueuil",
    title: "Kids Birthday Party Venue Saint-Lambert | Children's Party Space South Shore | Centre Funtastique",
    metaDescription: "Best kids birthday party venue in Saint-Lambert, South Shore. Private children's party space with themed birthday parties, activities & party host. Book your child's celebration today!",
    h1: "Children's Birthday Party Venue in Saint-Lambert",
    intro: "Saint-Lambert families choose Centre Funtastique for exceptional kids birthday parties! Our private children's birthday party venue is conveniently located near Saint-Lambert, offering themed decorations and professional party hosting.",
    neighborhoods: ["Saint-Lambert", "Préville"],
    distance: "26 minutes from Saint-Lambert",
    mapUrl: "https://www.google.com/maps/dir/Saint-Lambert,+QC/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "brossard",
    name: "Brossard",
    slug: "brossard/birthday-hosting",
    region: "South Shore",
    title: "Kids Birthday Party Venue Brossard QC | Children's Party Space Dix30 | Centre Funtastique",
    metaDescription: "Premier kids birthday party venue near Brossard & Dix30. Private children's party space with themed birthday packages, party host & activities. Book your child's celebration! Serving Brossard, Saint-Lambert.",
    h1: "Children's Birthday Party Venue Near Brossard & Dix30",
    intro: "Brossard and Dix30 area families choose Centre Funtastique for exceptional kids birthday parties! Our private children's birthday party venue features themed decorations, hands-on activities, and professional party hosting. A convenient birthday party destination for Brossard children with easy South Shore access.",
    neighborhoods: ["Brossard", "Dix30", "Saint-Lambert"],
    distance: "30 minutes from Brossard",
    mapUrl: "https://www.google.com/maps/dir/Brossard,+QC/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "saint-leonard",
    name: "Saint-Léonard",
    slug: "montreal/saint-leonard/birthday-hosting",
    region: "Montreal",
    title: "Kids Birthday Party Venue Saint-Léonard Montreal | Children's Party Space Anjou | Centre Funtastique",
    metaDescription: "Premier kids birthday party venue in Saint-Léonard & Anjou. Private children's party space with themed birthday parties, activities & host. Book your child's party! Serving Montreal-North.",
    h1: "Children's Birthday Party Venue in Saint-Léonard & Anjou",
    intro: "Saint-Léonard families love Centre Funtastique for memorable kids birthday parties! Just 7 minutes away, our private children's birthday party venue offers themed decorations, party hosting, and fun activities for kids ages 2-12. The closest birthday party venue for Saint-Léonard and Anjou children.",
    neighborhoods: ["Saint-Léonard", "Anjou", "Montreal-North"],
    distance: "7 minutes from Saint-Léonard",
    mapUrl: "https://www.google.com/maps/dir/Saint-Léonard,+Montreal/3551+Rue+Bélair,+Montréal"
  },
  {
    id: "riviere-des-prairies",
    name: "Rivière-des-Prairies",
    slug: "montreal/riviere-des-prairies/birthday-hosting",
    region: "Montreal",
    title: "Kids Birthday Party Venue Rivière-des-Prairies RDP | Children's Party Space Pointe-aux-Trembles | Centre Funtastique",
    metaDescription: "Best kids birthday party venue in RDP & Pointe-aux-Trembles. Private children's party space with themed birthday parties, activities & host. Book now! Serving Montreal-Est families.",
    h1: "Children's Birthday Party Venue in Rivière-des-Prairies (RDP)",
    intro: "Rivière-des-Prairies and Pointe-aux-Trembles families choose Centre Funtastique for unforgettable kids birthday parties! Located just 10 minutes from RDP, our private children's birthday party venue offers themed party packages, professional hosting, and activities for kids ages 2-12.",
    neighborhoods: ["RDP", "Pointe-aux-Trembles", "Montreal-Est"],
    distance: "10 minutes from RDP",
    mapUrl: "https://www.google.com/maps/dir/Rivière-des-Prairies,+Montreal/3551+Rue+Bélair,+Montréal"
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(loc => loc.slug === slug);
};

export const getLocationsByRegion = (region: string): Location[] => {
  return locations.filter(loc => loc.region === region);
};

export const getAllRegions = (): string[] => {
  return Array.from(new Set(locations.map(loc => loc.region)));
};

