Steak.create(
    restaurant: "Ishkabibble's"
)
Steak.create(
    restaurant: "Poe's"
)

Steak.create(
    restaurant: "Jim's"
)

Steak.create(
    restaurant: "Pat's King of Steaks"
)

Steak.create(
    restaurant: "Geno's Steaks"
)

User.create(
    username: "mlobman",
    password: "test",
    fav_steak: 1
)

User.find(1).reviews.create(
    steak_id: 1,
    rating: 10,
    title: "Best steak in Philly!",
    comment: "I went to school in Philly and made it a personal mission to find the best cheesesteak. Ishkabibble's on South St is certainly the winner!",
    toppings: "Cheese Whiz, Light Onions"
)

User.find(1).reviews.create(
    steak_id: 2,
    rating: 9,
    title: "Gourmet steak!",
    comment: "Tucked inside of the bar Human Robot in Fishtown, Poe's makes a great steak. Ye be warned, it's classier than the average cheesesteak...",
    toppings: "Cheese Whiz, Light Onions"
)