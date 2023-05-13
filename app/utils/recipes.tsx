export interface Recipe {
  id: number;
  name: string;
  category: "veg" | "non-veg";
  likes: number;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Ratatouille",
    category: "veg",
    likes: 16,
  },
  {
    id: 2,
    name: "Caprese Salad",
    category: "veg",
    likes: 24,
  },
  {
    id: 3,
    name: "Baked Stuffed Tomatoes",
    category: "veg",
    likes: 6,
  },
  {
    id: 4,
    name: "Sweet Potato Black Bean Enchiladas",
    category: "veg",
    likes: 54,
  },
  {
    id: 5,
    name: "Mushroom Risotto",
    category: "veg",
    likes: 82,
  },
  {
    id: 6,
    name: "Vegetable Pad Thai",
    category: "veg",
    likes: 31,
  },
  {
    id: 7,
    name: "Vegan Lentil Shepherd's Pie",
    category: "veg",
    likes: 19,
  },
  {
    id: 8,
    name: "Creamy Carrot Soup",
    category: "veg",
    likes: 10,
  },
  {
    id: 9,
    name: "Classic Beef Burgers",
    category: "non-veg",
    likes: 12,
  },
  {
    id: 10,
    name: "BBQ Pulled Pork Sandwiches",
    category: "non-veg",
    likes: 14,
  },
  {
    id: 11,
    name: "Spicy Korean Fried Chicken",
    category: "non-veg",
    likes: 82,
  },
  {
    id: 12,
    name: "Beef and Broccoli Stir Fry",
    category: "non-veg",
    likes: 74,
  },
  {
    id: 13,
    name: "Grilled Steak with Chimichurri Sauce",
    category: "non-veg",
    likes: 54,
  },
  {
    id: 14,
    name: "Baked Chicken Parmesan",
    category: "non-veg",
    likes: 45,
  },
  {
    id: 15,
    name: "Pan-Seared Scallops with Garlic Butter",
    category: "non-veg",
    likes: 12,
  },
  {
    id: 16,
    name: "Shrimp Scampi Linguine",
    category: "non-veg",
    likes: 9,
  },
];
