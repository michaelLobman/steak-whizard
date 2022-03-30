Steak.create(
    restaurant: "Ishkabibble's",
    rating: 9.0
)
Steak.create(
    restaurant: "Poe's",
    rating: 9.0
)

Steak.create(
    restaurant: "Joe's",
    rating: 10.0
)

Steak.create(
    restaurant: "Pat's King of Steaks",
    rating: 6.0,
)

Steak.create(
    restaurant: "Geno's Steaks",
    rating: 4.0
)

User.create(
    username: "mlobman",
    password: "test",
    fav_steak: 1
)

User.find(1).reviews.create(
    steak_id: 1,
    rating: 9,
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

User.find(1).reviews.create(
    steak_id: 3,
    rating: 10,
    title: "So good, I have to rethink...",
    comment: "Ishkabibble's had my heart... Until I had Joe's. Wow. This is a classic steak with quality bread and a lot of flavor.",
    toppings: "Cheese Whiz, Light Onions"
)