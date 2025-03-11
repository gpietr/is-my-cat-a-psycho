const questionsData = [
    {
        id: 1,
        text: "My cat explores dangerous places (e.g. gardens of rival cats, very high places)",
        category: "boldness"
    },
    {
        id: 2,
        text: "My cat explores new places",
        category: "boldness"
    },
    {
        id: 3,
        text: "My cat seems unaware of danger (e.g. runs into the street, makes risky jumps)",
        category: "boldness"
    },
    {
        id: 4,
        text: "My cat climbs very high",
        category: "boldness"
    },
    {
        id: 5,
        text: "My cat sits in high places (e.g. top of the sofa, top of the stairs)",
        category: "boldness"
    },
    {
        id: 6,
        text: "My cat chases other cats out of the residence/garden",
        category: "boldness"
    },
    {
        id: 7,
        text: "My cat enjoys exploring outdoors",
        category: "boldness"
    },
    {
        id: 8,
        text: "My cat ventures far from the residence",
        category: "boldness"
    },
    {
        id: 9,
        text: "My cat regularly hunts small creatures (e.g. birds, mice)",
        category: "boldness"
    },
    {
        id: 10,
        text: "My cat torments their prey rather than killing it straight away",
        category: "boldness"
    },
    {
        id: 11,
        text: "My cat dominates neighbourhood cat(s) (e.g. chases them, picks fights with them)",
        category: "boldness"
    },
    {
        id: 12,
        text: "My cat is aggressive towards neighbourhood cat(s) (e.g. attacks, smacks, growls, plays roughly)",
        category: "boldness"
    },
    {
        id: 13,
        text: "My cat needs constant stimulation",
        category: "disinhibition"
    },
    {
        id: 14,
        text: "My cat vocalises loudly (e.g. meows, yowls) for no apparent reason",
        category: "disinhibition"
    },
    {
        id: 15,
        text: "My cat is very excitable (e.g. goes into \"overdrive\" and gets uncoordinated)",
        category: "disinhibition"
    },
    {
        id: 16,
        text: "My cat demands attention (e.g. taps people with their paw to play)",
        category: "disinhibition"
    },
    {
        id: 17,
        text: "My cat walks on/sits on items I am trying to use (e.g. laptops, books)",
        category: "disinhibition"
    },
    {
        id: 18,
        text: "My cat seeks proximity (e.g. calls to see where people are, follows from room to room)",
        category: "disinhibition"
    },
    {
        id: 19,
        text: "My cat meows incessantly if left alone and will follow people around the residence meowing",
        category: "disinhibition"
    },
    {
        id: 20,
        text: "My cat runs around the house for no apparent reason",
        category: "disinhibition"
    },
    {
        id: 21,
        text: "My cat is highly sociable with people (e.g. will move from comfortable spots to be near them)",
        category: "disinhibition"
    },
    {
        id: 22,
        text: "My cat pesters people when he/she wants something (e.g. meows/taps for food, room access, attention)",
        category: "disinhibition"
    },
    {
        id: 23,
        text: "My cat is easily distracted (e.g. stares/meows at what appears to be nothing)",
        category: "disinhibition"
    },
    {
        id: 24,
        text: "My cat is curious (e.g. watches things from the window, checks who arrives when the doorbell rings)",
        category: "disinhibition"
    },
    {
        id: 25,
        text: "My cat doesn't learn from experience i.e. will continue to perform a behaviour that is dangerous/harmful",
        category: "meanness"
    },
    {
        id: 26,
        text: "My cat disobeys house rules (e.g. walks on the worktop/table, climbs the curtains, runs away when called)",
        category: "meanness"
    },
    {
        id: 27,
        text: "My cat is undeterred by punishment i.e. will repeat behaviours he/she is scolded for",
        category: "meanness"
    },
    {
        id: 28,
        text: "My cat damages things (e.g. scratches furniture, pushes objects off surfaces)",
        category: "meanness"
    },
    {
        id: 29,
        text: "My cat steals food/drink from people/pets (e.g. eats/drinks from their bowls/glasses)",
        category: "meanness"
    },
    {
        id: 30,
        text: "My cat hides and jumps out on people/pets (e.g. from behind doors, corners, worktops)",
        category: "meanness"
    },
    {
        id: 31,
        text: "My cat disturbs people/pets when they are resting (e.g. pounces on them to wake them up)",
        category: "meanness"
    },
    {
        id: 32,
        text: "My cat is aggressive during play with people (e.g. bites, scratches)",
        category: "meanness"
    },
    {
        id: 33,
        text: "My cat does not appear to act guilty after misbehaving",
        category: "meanness"
    },
    {
        id: 34,
        text: "With respect to other residents (people, pets) my cat has control of common areas (e.g. will displace others from rooms/furniture)",
        category: "pet-unfriendliness"
    },
    {
        id: 35,
        text: "My cat dominates other pet cat(s) (e.g. chases, picks fights)",
        category: "pet-unfriendliness"
    },
    {
        id: 36,
        text: "My cat is aggressive towards other pet cat(s) (e.g. attacks, smacks, growls, plays roughly)",
        category: "pet-unfriendliness"
    },
    {
        id: 37,
        text: "My cat displaces other pet cat(s) from favourable positions (e.g. beds, sofas, litter boxes)",
        category: "pet-unfriendliness"
    },
    {
        id: 38,
        text: "My cat dominates other non-cat pet(s) (e.g. chases, picks fights)",
        category: "pet-unfriendliness"
    },
    {
        id: 39,
        text: "My cat displaces other non-cat pet(s) from favourable positions (e.g. beds, sofas)",
        category: "pet-unfriendliness"
    },
    {
        id: 40,
        text: "My cat is aggressive towards other non-cat pet(s) (e.g. attacks, smacks, growls, plays roughly)",
        category: "pet-unfriendliness"
    },
    {
        id: 41,
        text: "My cat dominates me (e.g. chases me, attacks me)",
        category: "human-unfriendliness"
    },
    {
        id: 42,
        text: "My cat doesn't like being petted (e.g. will back away, bite, scratch)",
        category: "human-unfriendliness"
    },
    {
        id: 43,
        text: "My cat is aggressive towards children/I would be concerned that my cat would harm a child (e.g. bite, scratch)",
        category: "human-unfriendliness"
    },
    {
        id: 44,
        text: "My cat is aggressive towards new people (e.g. bites, scratches)",
        category: "human-unfriendliness"
    },
    {
        id: 45,
        text: "My cat displays sudden mood changes (e.g. purrs when being stroked but suddenly bites)",
        category: "human-unfriendliness"
    },
    {
        id: 46,
        text: "My cat purrs when attacking people/animals",
        category: "human-unfriendliness"
    }
];
