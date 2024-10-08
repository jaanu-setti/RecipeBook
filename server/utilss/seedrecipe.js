const Recipe = require('../models/recipe')
const defaultrecipes = [
    {  
        name : "paneer Biryani",
        type : 'veg',
        image : '/images/paneerbiryani.jpeg',
        ingrediants : [
            "Basmati rice – 1.5 cups", "Water – 4-5 cups", "Bay leaf – 1",  "Cloves – 3",  "Cinnamon stick – 1 small piece",  "Green cardamom – 2",  "Salt – to taste",  "Paneer (cubed) – 200 grams", "Yogurt – 1/2 cup",  "Ginger-garlic paste – 1 tbsp",  "Red chili powder – 1 tsp","Turmeric powder – 1/2 tsp",
             "Garam masala – 1/2 tsp",  "Coriander powder – 1 tsp",  "Lemon juice – 1 tbsp",  "Oil – 2 tbsp",  "Ghee (clarified butter) – 1 tbsp", "Onion (thinly sliced) – 2 medium",  "Tomatoes (chopped) – 2 medium",  "Green chilies (slit) – 2", "Mint leaves – 1/4 cup",
             "Coriander leaves – 1/4 cup",  "Biryani masala – 1 tsp",  "Saffron – a pinch (soaked in 2 tbsp warm milk)","Fried onions – for garnish (optional)", "Fresh coriander leaves – for garnish"
        ],
        procedure : [
            "Wash and soak the basmati rice for 20-30 minutes.",
            "Boil 4-5 cups of water in a large pot. Add bay leaf, cloves, cinnamon, cardamom, and salt.",
            "Cook the rice until 70% done (grains should still have a bite). Drain and set aside.",
            "In a bowl, mix yogurt, ginger-garlic paste, red chili powder, turmeric, garam masala, coriander powder, lemon juice, and salt.",
            "Marinate the paneer cubes in the yogurt mixture for 15-20 minutes.",
            "Heat oil and ghee in a large pan, fry the sliced onions until golden brown. Remove half for garnish.",
            "Add green chilies and chopped tomatoes to the pan. Cook until tomatoes soften.",
            "Add mint leaves, coriander leaves, and biryani masala. Stir and cook for another minute.",
            "Add the marinated paneer to the pan and cook for 5-7 minutes on medium heat until paneer absorbs the spices.",
            "Layer half of the cooked rice over the paneer mixture in the same pan.",
            "Sprinkle fried onions, coriander leaves, and saffron milk on top.",
            "Add the remaining rice and repeat the garnishing with onions, coriander, and saffron milk.",
             "Seal the pan with a lid or foil and cook on low heat for 15-20 minutes (Dum cooking).",
            "Fluff the biryani gently with a fork and garnish with fresh coriander and fried onions before serving."
        ]
    },
    {
        name : 'mushroom biryani',
        type : 'veg',
        image : '/images/mushroombiryani.jpeg',
        ingrediants : [
            "500 grams mushrooms, cleaned and sliced",
            "2 cups basmati rice",
            "1 large onion, thinly sliced",
            "2 tomatoes, chopped",
            "4 tablespoons yogurt",
            "4-5 green chilies, slit",
            "1 tablespoon ginger-garlic paste",
            "1/2 cup fresh mint leaves, chopped",
            "1/2 cup fresh coriander leaves, chopped",
            "4-5 whole cloves",
            "4-5 green cardamom pods",
            "1-2 cinnamon sticks",
            "2-3 bay leaves",
            "1 teaspoon cumin seeds",
            "Salt to taste",
            "4 cups water",
            "2-3 tablespoons ghee or oil",
            "Saffron strands soaked in milk (optional)",
        ],
        procedure :[
            "In a large pot, heat ghee or oil over medium heat. Add sliced onions and sauté until golden brown.",
    "Add ginger-garlic paste and green chilies. Sauté for another 1-2 minutes until fragrant.",
    "Add chopped tomatoes and cook until they soften. Stir in the sliced mushrooms and cook for about 5-7 minutes until they release moisture and are cooked through.",
    "Add yogurt, mint leaves, and coriander leaves, and mix well. Season with salt and let it cook for another 2-3 minutes.",
    "In a separate pot, bring 4 cups of water to a boil. Add soaked basmati rice and cook until it's 70% done. Drain the rice and set aside.",
    "Layer the partially cooked rice over the mushroom mixture in the pot. If using, drizzle saffron milk over the rice.",
    "Cover the pot with a tight-fitting lid and cook on low heat for 25-30 minutes. This allows the flavors to meld and the rice to cook completely.",
    "Turn off the heat and let it sit for 10 minutes before serving. Gently fluff the biryani before serving.",
    "Serve hot with raita or salad.",
        ]
    },
    {
        name : "mushroom chilli",
        type : 'veg',
        image : '/images/mushroomchilli.jpg',
        ingrediants : [
            "Button mushrooms – 200 grams (cleaned and quartered)",  "Corn flour – 3 tbsp",  "All-purpose flour (maida) – 2 tbsp",  "Ginger-garlic paste – 1 tsp",  "Red chili powder – 1/2 tsp",  "Soy sauce – 2 tbsp",  "Green chilies – 2 (slit)",  "Capsicum (bell pepper) – 1 (cut into cubes)",
            "Onion – 1 medium (cubed)",  "Garlic – 5-6 cloves (finely chopped)",  "Ginger – 1 inch (finely chopped)",  "Spring onions – 2 tbsp (chopped, for garnish)",  "Green chili sauce – 1 tbsp",  "Tomato ketchup – 1 tbsp",  "Vinegar – 1 tsp",  "Black pepper powder – 1/2 tsp",  "Salt – to taste",  "Oil – for frying and sautéing"
        ],
        procedure : [
            "In a bowl, mix corn flour, all-purpose flour, red chili powder, ginger-garlic paste, salt, and water to form a smooth batter.",
           "Dip the quartered mushrooms into the batter and coat them evenly.",
           "Heat oil in a pan and deep fry the batter-coated mushrooms until golden and crisp. Drain on paper towels and set aside.",
           "In a separate pan, heat 1-2 tbsp oil and sauté chopped garlic and ginger until fragrant.",
          "Add green chilies and cubed onions, and sauté until the onions turn translucent.",
          "Add cubed capsicum (bell pepper) and stir-fry for 2-3 minutes.",
          "Add soy sauce, green chili sauce, tomato ketchup, vinegar, and black pepper. Stir well.",
          "Toss in the fried mushrooms and stir to coat them with the sauce.",
          "Cook for another 2-3 minutes, ensuring the mushrooms absorb the flavors.",
          "Garnish with chopped spring onions and serve hot."
        ]
    },
    {
        name : "paneer tikka",
        type : 'veg',
        image : '/images/paneer-tikka.jpg',
        ingrediants : [
            "500 grams paneer, cut into cubes", "1 cup thick yogurt", "2 tablespoons ginger-garlic paste", "2 tablespoons red chili powder", "1 tablespoon turmeric powder", "1 tablespoon garam masala", "1 tablespoon cumin powder","2 tablespoons lemon juice",
            "Salt to taste","1 large onion, cut into wedges", "1 bell pepper, cut into cubes", "1-2 tablespoons oil", "Fresh coriander leaves for garnish", "Lemon wedges for serving",
        ],
        procedure : [
            "In a mixing bowl, combine yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, cumin powder, lemon juice, and salt to create a marinade.",
    "Add the paneer cubes, onion wedges, and bell pepper cubes to the marinade. Ensure everything is well coated. Let it marinate for at least 1-2 hours (or overnight in the fridge for best results).",
    "Preheat the oven to 200°C (or prepare a grill).",
    "Thread the marinated paneer, onion, and bell pepper onto skewers.",
    "Brush the skewers with oil and place them on a baking tray or grill.",
    "Bake or grill for about 15-20 minutes, turning occasionally until the paneer is golden and slightly charred.",
    "Remove from the oven or grill and garnish with fresh coriander leaves.",
    "Serve hot with lemon wedges and your favorite mint chutney.",
        ]
    },
    {   
        name : "brinjal curry",
        type : 'veg',
        image : '/images/brinjalcurry.jpeg',
        ingrediants : [
            "Brinjal (eggplant) – 3-4 medium (chopped into cubes)", "Onion – 1 large (finely chopped)", "Tomato – 1 large (chopped)",  "Ginger-garlic paste – 1 tbsp",   "Green chilies – 2 (slit)",  "Turmeric powder – 1/2 tsp", "Red chili powder – 1 tsp", "Coriander powder – 1 tbsp",
            "Garam masala – 1/2 tsp",  "Mustard seeds – 1/2 tsp", "Cumin seeds – 1/2 tsp",  "Curry leaves – 10-12",  "Oil – 2 tbsp",  "Salt – to taste", "Fresh coriander leaves – for garnish"
        ],
        procedure : [
            "Wash and chop the brinjal into cubes and soak in water to prevent browning.",
            "Heat oil in a pan and add mustard seeds. Let them splutter.",
            "Add cumin seeds and curry leaves. Sauté for a few seconds.",
            "Add finely chopped onions and green chilies. Cook until the onions turn golden brown.",
            "Stir in ginger-garlic paste and sauté until the raw smell disappears.",
            "Add chopped tomatoes and cook until they soften and turn mushy.",
            "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
            "Add the chopped brinjal and mix to coat with the spices. Cover and cook on low heat for 10-12 minutes, stirring occasionally.",
            "Once the brinjal is tender, add garam masala and cook for another 2-3 minutes.",
            "Garnish with fresh coriander leaves and serve hot with rice or roti."
        ]
    },{
     
        name : "sambar",
        type : 'veg',
        image :'/images/sambar.jpeg',
        ingrediants :[
            "Toor dal (pigeon pea lentils) – 1/2 cup",  "Water – 2 cups (for cooking dal)",  "Turmeric powder – 1/4 tsp",  "Drumstick – 1 (cut into pieces)",  "Carrot – 1 (chopped)",  "Tomato – 1 (chopped)",  "Onion – 1 (sliced)",  "Pumpkin – 1/4 cup (chopped)",  "Tamarind – small lemon-sized ball (soaked in warm water)", "Oil – 1 tbsp", "Coriander seeds – 1 tbsp",
            "Chana dal (Bengal gram) – 1 tbsp", "Dry red chilies – 3", "Fenugreek seeds – 1/4 tsp", "Grated coconut (optional) – 2 tbsp", "Mustard seeds – 1/2 tsp", "Cumin seeds – 1/2 tsp", "Curry leaves – 10-12", "Dry red chilies (for tempering) – 1 or 2",  "Asafoetida (hing) – a pinch",  "Sambar powder – 1-2 tbsp",  "Salt – to taste",  "Fresh coriander leaves – for garnish"
        ],
        procedure : [
          "Wash and cook the toor dal with 2 cups of water and turmeric powder in a pressure cooker for 3-4 whistles until soft. Mash the dal and set aside.",
          "In a pot, cook the chopped vegetables (drumstick, carrot, onion, pumpkin) with water until tender.",
          "Extract the tamarind juice from the soaked tamarind and add it to the vegetables along with chopped tomatoes. Simmer for 5-7 minutes.",
          "In a small pan, heat 1 tbsp of oil and roast coriander seeds, chana dal, dry red chilies, and fenugreek seeds until golden. Add grated coconut (optional) and sauté for a minute.",
           "Grind the roasted ingredients into a smooth paste with water.",
          "Add the mashed dal to the cooked vegetables and stir in the ground spice paste and sambar powder. Adjust the consistency with water.",
          "Simmer the sambar for 10-15 minutes, allowing the flavors to blend. Add salt to taste.",
          "In another small pan, heat oil and add mustard seeds. Let them splutter, then add cumin seeds, asafoetida, curry leaves, and dry red chilies for tempering.",
          "Pour the tempering over the simmering sambar.",
          "Garnish with fresh coriander leaves and serve hot with rice, idli, or dosa."
        ]
    },
    {
        name : "mutton biryani",
        type : 'nonveg',
        image : '/images/muttonbiryani.jpg',
        ingrediants :[
             "500 grams mutton, cut into pieces", "2 cups basmati rice", "1 large onion, thinly sliced", "2 tomatoes, chopped", "4 tablespoons yogurt",  "4-5 green chilies, slit",  "1 tablespoon ginger-garlic paste",  "1/2 cup fresh mint leaves, chopped",  "1/2 cup fresh coriander leaves, chopped", "4-5 whole cloves",
            "4-5 green cardamom pods", "1-2 cinnamon sticks", "2-3 bay leaves", "1 teaspoon cumin seeds", "Salt to taste","4 cups water",  "2-3 tablespoons ghee or oil", "Saffron strands soaked in milk (optional)",
        ],
        procedure :[
            "Marinate the mutton with yogurt, ginger-garlic paste, salt, green chilies, mint, and coriander leaves. Let it sit for at least 1 hour (preferably overnight in the fridge).",
            "In a large pot, heat ghee or oil over medium heat. Add sliced onions and sauté until golden brown.",
            "Add marinated mutton to the pot and cook for about 10-15 minutes until the meat is browned.",
            "Add chopped tomatoes and cook until soft. Add whole spices (cloves, cardamom, cinnamon, bay leaves, cumin seeds) and stir well.",
            "In a separate pot, bring 4 cups of water to a boil. Add soaked basmati rice and cook until it's 70% done. Drain the rice and set aside.",
            "Layer the partially cooked rice over the mutton in the pot. If using, drizzle saffron milk over the rice.",
            "Cover the pot with a tight-fitting lid and cook on low heat for 25-30 minutes. This allows the flavors to meld and the rice to cook completely.",
            "Turn off the heat and let it sit for 10 minutes before serving. Gently fluff the biryani before serving.",
            "Serve hot with raita or salad.",
        ]
    },{
      name : "Prawns Biryani",
      type : 'nonveg',
      image :'/images/prawnsbiryani.jpg',
      ingrediants : [
          "500 grams prawns, cleaned and deveined", "2 cups basmati rice", "1 large onion, thinly sliced", "2 tomatoes, chopped", "4 tablespoons yogurt", "4-5 green chilies, slit", "1 tablespoon ginger-garlic paste", "1/2 cup fresh mint leaves, chopped", "1/2 cup fresh coriander leaves, chopped","4-5 whole cloves",
          "4-5 green cardamom pods","1-2 cinnamon sticks", "2-3 bay leaves", "1 teaspoon cumin seeds","Salt to taste", "4 cups water", "2-3 tablespoons ghee or oil", "Saffron strands soaked in milk (optional)",
      ],
      procedure :[
        "Marinate the prawns with yogurt, ginger-garlic paste, salt, and green chilies. Let it sit for about 30 minutes.",
    "In a large pot, heat ghee or oil over medium heat. Add sliced onions and sauté until golden brown.",
    "Add marinated prawns to the pot and cook for about 5 minutes until they are just cooked. Remove and set aside.",
    "In the same pot, add chopped tomatoes and cook until soft. Add whole spices (cloves, cardamom, cinnamon, bay leaves, cumin seeds) and stir well.",
    "In a separate pot, bring 4 cups of water to a boil. Add soaked basmati rice and cook until it's 70% done. Drain the rice and set aside.",
    "Layer the partially cooked rice over the prawn mixture in the pot. If using, drizzle saffron milk over the rice.",
    "Cover the pot with a tight-fitting lid and cook on low heat for 25-30 minutes. This allows the flavors to meld and the rice to cook completely.",
    "Turn off the heat and let it sit for 10 minutes before serving. Gently fluff the biryani before serving.",
    "Serve hot with raita or salad.",
      ]
    
    },
    {
        name : "chicken lollipop",
        type : 'nonveg',
        image : '/images/chickenlollipop.jpg',
        ingrediants : [
           "500 grams chicken wings (drumettes)", "2 tablespoons ginger-garlic paste", "2 tablespoons soy sauce", "1 tablespoon red chili powder",  "1 tablespoon cornflour", "1 tablespoon all-purpose flour","1 tablespoon vinegar",
           "1 teaspoon black pepper powder", "Salt to taste", "Oil for deep frying", "Chopped spring onions for garnish","Lemon wedges for serving",
        ],
        procedure : [
             "Clean the chicken wings and separate the drumette part. Push the meat down to create a lollipop shape.",
    "In a mixing bowl, combine ginger-garlic paste, soy sauce, red chili powder, cornflour, all-purpose flour, vinegar, black pepper powder, and salt. Mix well to form a marinade.",
    "Add the chicken lollipops to the marinade, ensuring they are well coated. Marinate for at least 1-2 hours (or overnight in the fridge for best results).",
    "Heat oil in a deep frying pan over medium heat. Once the oil is hot, carefully add the marinated chicken lollipops in batches.",
    "Fry until they turn golden brown and are cooked through (about 8-10 minutes). Make sure to flip them occasionally for even cooking.",
    "Once cooked, remove the chicken lollipops and place them on paper towels to drain excess oil.",
    "Garnish with chopped spring onions and serve hot with lemon wedges and your favorite dipping sauce.",
    
        ]
    },
    {
        name : 'chicken majestic',
        type : 'nonveg',
        image : '/images/chickenmajestic.jpg',
        ingrediants : [
            "500 grams boneless chicken, cut into strips", "2 tablespoons ginger-garlic paste",  "2 tablespoons red chili powder",  "1 tablespoon garam masala", "1 tablespoon cornflour", "1 tablespoon all-purpose flour", "2 tablespoons yogurt", "1 tablespoon lemon juice",
            "Salt to taste", "Oil for frying", "1 large onion, thinly sliced", "2-3 green chilies, slit",  "Fresh coriander leaves for garnish", "Lemon wedges for serving",
        ],
        procedure : [
           "In a mixing bowl, combine ginger-garlic paste, red chili powder, garam masala, cornflour, all-purpose flour, yogurt, lemon juice, and salt to create a marinade.",
    "Add the chicken strips to the marinade, ensuring they are well coated. Marinate for at least 1-2 hours (or overnight for best results).",
    "Heat oil in a pan over medium heat. Add sliced onions and sauté until golden brown. Remove and set aside.",
    "In the same oil, add the marinated chicken strips in batches, frying until they are golden brown and cooked through (about 5-7 minutes).",
    "Remove the chicken from the oil and place it on paper towels to drain excess oil.",
    "In the same pan, add slit green chilies and sauté for a minute. Add the fried chicken and toss well to coat with the flavors.",
    "Garnish with sautéed onions and fresh coriander leaves.",
    "Serve hot with lemon wedges and your favorite dipping sauce."
        ]
    },
    {
       name : "prawns curry",
       type : 'nonveg',
       image : '/images/prawnscurry.jpeg',
       ingrediants : [
        "500 grams prawns, cleaned and deveined",
        "2 tablespoons oil (coconut or vegetable)",
        "1 large onion, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "2-3 green chilies, slit",
        "1 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon cumin powder",
        "1 cup coconut milk",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "Lemon wedges for serving",
       ],
       procedure :[
        "Heat oil in a pan over medium heat. Add chopped onions and sauté until they are golden brown.",
        "Add ginger-garlic paste and green chilies. Sauté for another 1-2 minutes until fragrant.",
        "Add chopped tomatoes and cook until they soften. Stir in turmeric powder, red chili powder, coriander powder, and cumin powder. Cook for 2-3 minutes.",
        "Add the cleaned prawns to the pan, gently coating them with the spice mixture. Cook for about 3-4 minutes until the prawns turn pink.",
        "Pour in the coconut milk and bring to a gentle simmer. Cook for another 5 minutes, allowing the flavors to meld. Adjust salt to taste.",
        "Remove from heat and garnish with fresh coriander leaves.",
        "Serve hot with steamed rice or bread and lemon wedges on the side.",
       ]
    },
    {
        name : "fish curry",
        type : 'nonveg',
        image : '/images/fishcurry.jpeg',
        ingrediants : [
            "500 grams fish fillets (like salmon or tilapia)", "2 tablespoons oil (coconut or vegetable)","1 large onion, finely chopped", "2 tomatoes, chopped", "1 tablespoon ginger-garlic paste", "2-3 green chilies, slit",  "1 teaspoon turmeric powder", "1 teaspoon red chili powder",
           "1 teaspoon coriander powder", "1 teaspoon cumin powder", "1 cup coconut milk", "Salt to taste", "Fresh coriander leaves for garnish", "Lemon wedges for serving",
        ],
        procedure : [
            "Heat oil in a pan over medium heat. Add chopped onions and sauté until they are golden brown.",
            "Add ginger-garlic paste and green chilies. Sauté for another 1-2 minutes until fragrant.",
            "Add chopped tomatoes and cook until they soften. Stir in turmeric powder, red chili powder, coriander powder, and cumin powder. Cook for 2-3 minutes.",
            "Add the fish fillets to the pan, gently coating them with the spice mixture. Cook for about 3-4 minutes on each side until the fish is cooked through.",
            "Pour in the coconut milk and bring to a gentle simmer. Cook for another 5 minutes, allowing the flavors to meld. Adjust salt to taste.",
            "Remove from heat and garnish with fresh coriander leaves.",
            "Serve hot with steamed rice or bread and lemon wedges on the side.",
        ]
    }
    
]

const Insertdefaultrecipes = async ()=>{
    try {
        for (const recipe of defaultrecipes) {
          const existingRecipe = await Recipe.findOne({ name: recipe.name });
          if (!existingRecipe) {
            await Recipe.create(recipe);
            console.log(`Added: ${recipe.name}`);
          } 
        }
      } catch (err) {
        console.error("Error inserting default recipes:", err);
      }
    
}
module.exports = Insertdefaultrecipes;