const state = () => ({
    info: {type: Object},
    inventory: [],
    variants: [
        {
          name:"cleric", 
          portrait:require("@/assets/imgs/shopkeepers/cleric.png"),
          items: [
              { bought: false, noSale: false, name: 'minor heal', cost: 1, description: '+6 HP', buy: () => { store.state.player.health += 6 } },
              { bought: false, noSale: false, name: 'minor blessing', cost: 1, description: '+1 ARM', buy: () => { store.state.player.armor += 1 } },
              { bought: false, noSale: false, name: 'fortune', cost: 2, description: 'doubles coin value of next monster', buy: () => {store.state.monster.coins *= 2 }},
              { bought: false, noSale: false, name: ' great blessing', cost: 2, description: '+3 ARM', buy: () => { store.state.player.armor += 3 } },
              { bought: false, noSale: false, name: 'great miracle', cost: 3, description: '+5 ATK', buy: () => { store.state.player.attackMax += 5 } },
              { bought: false, noSale: false, name: 'boon', cost: 3, description: 'Immune to damage once', buy: () => { store.state.player.attackMax += 5 } },
          ],
          saying:"Come in, are you hurt?",
          shopTitle: "I can heal you... or perhaps you need the favor of the old gods?"
        },

        {
          name:"graverobber", 
        portrait:require("@/assets/imgs/shopkeepers/graverobber.png"),
        items: [
          { bought: false, noSale: false, name: 'nacre charm', cost: 1, description: 'ATK +1 | ARM +1 | HP -5', buy: () => { store.state.player.health -= 5; store.state.player.armor += 1; store.state.player.attackMax += 1 } },
          { bought: false, noSale: false, name: 'detriment bangle', cost: 1, description: "Halves your HP | +3 ARM", buy: () => { store.state.player.armor += 3; store.state.player.health = Math.ceil(store.state.player.health / 2);} },
          { bought: false, noSale: false, name: 'unlucky trinket', cost: 3, description: "Grants Double Attack to you and monsters.", buy: () => { store.state.playerTraits.push('double attack'); } },
          { bought: false, noSale: false, name: 'hollow bone', cost: 2, description: "+4 ATK for next battle", buy: () => { store.state.playerTraitsTemp.push("hollow bone") } },
          { bought: false, noSale: false, name: 'Demon Ring', cost: 4, description: 'ATK Type becomes Pyhsical | x2 ATK', buy: () => {store.state.monster.coins *= 2 }},
          { bought: false, noSale: false, name: 'Dessicated Doll', cost: 5, description: 'Revive with 10 HP on death.', buy: () => { store.state.playerTraits.push('dessicated doll') }},
        ],
        saying:"Trust me, nothing I sell is cursed.",
        shopTitle: "Just buy somethin' quick, I don't wanna be seen fencing to the Kingloyal.",
        welcome:'grWelcome',
        goodbye:'grOkay',

        },

        {name:"merchant", 
        portrait:require("@/assets/imgs/shopkeepers/merchant.png"),
        items: [
          { bought: false, noSale: false, name: 'rations', cost: 1, description: '+5 HP', buy: () => { store.state.player.health += 5; } },
          { bought: false, noSale: false, name: 'sewing kit', cost: 1, description: '+1 ARM', buy: () => { store.state.player.armor += 1; } },
          { bought: false, noSale: false, name: 'Mettle Poultice', cost: 1, description: '+2 ATK', buy: () => { store.state.player.attackMax += 2; } },
          
          { bought: false, noSale: false, name: 'simple meal', cost: 2, description: '+10 HP', buy: () => { store.state.player.health += 10; } },
          { bought: false, noSale: false, name: 'armor kit', cost: 3, description: '+2 ARM', buy: () => { store.state.player.armor += 2; } },
          { bought: false, noSale: false, name: 'Mettle Draght', cost: 3, description: '+5 ATK', buy: () => { store.state.player.attackMax += 5; } },
          
          { bought: false, noSale: false, name: 'kings feast', cost: 4, description: '+15 HP', buy: () => { store.state.player.health += 15; } },
          { bought: false, noSale: false, name: 'etching kit', cost: 5, description: '+3 ARM', buy: () => { store.state.player.armor += 5; } },
          { bought: false, noSale: false, name: 'Mettle Vulnerary', cost: 5, description: '+8 ATK', buy: () => { store.state.player.attackMax += 8; } },
        ],
        saying:"Friend or foe, what are ya' buyin'?",
        shopTitle: "It's not much, but it's what I've got. All priced to move.",
        welcome:'meWelcome',
        goodbye:'meGoodbye',
        },

        {name:"witch", 
        portrait:require("@/assets/imgs/shopkeepers/witch.png"),
        items: [
          { bought: false, noSale: false, name: 'weak enchantment', cost: 1, description: '+2 ATK', buy: () => { store.state.player.attackMax += 2; } },
          { bought: false, noSale: false, name: 'red potion', cost: 1, description: '+6 HP', buy: () => { store.state.player.health += 6; } },
          { bought: false, noSale: false, name: 'banded charm', cost: 1, description: '+1 ATK | +1 ARM', buy: () => { store.state.player.armor += 1; store.state.player.attackMax += 1; } },
          
          { bought: false, noSale: false, name: 'arcane binding', cost: 2, description: '+2 ATK | +1 ARM', buy: () => { store.state.player.armor += 1; store.state.player.attackMax += 2; } },
          { bought: false, noSale: false, name: 'ochre elixir', cost: 2, description: '+6 HP | +1 ATK', buy: () => { store.state.player.health += 6; store.state.player.attackMax += 1; } },
          { bought: false, noSale: false, name: 'mettle earring', cost: 2, description: '+1 ARM | +1 ATK | +6 HP', buy: () => { store.state.player.health += 6; store.state.player.attackMax += 1; store.state.player.armor += 1; } },
          
          { bought: false, noSale: false, name: 'ancient ward', cost: 3, description: '+3 ATK | +2 ARM', buy: () => { store.state.player.armor += 2; store.state.player.attackMax += 3; } },
          { bought: false, noSale: false, name: 'special drink', cost: 3, description: '+10 HP | +2 ATK', buy: () => { store.state.player.health += 10; store.state.player.attackMax += 2; } },
          { bought: false, noSale: false, name: 'mettle necklace', cost: 3, description: '+1 ARM | +3 ATK | +8 HP', buy: () => { store.state.player.health += 8; store.state.player.attackMax += 3; store.state.player.armor += 1; } },
          
          { bought: false, noSale: false, name: 'blood ritual', cost: 5, description: 'Thirds your HP | + lost HP to your ATK', buy: () => { let temp = Math.ceil((store.state.player.health / 3) * 2); store.state.player.health -= temp; store.state.player.attackMax += temp; } },
        ],
        saying:"Everything you see, all hand enchanted.",
        shopTitle: "Some of my inventory tends to be virulent. Browse at your own risk."
        },
    ]
})

const mutations = {
    mutate(state, payload) {
        state[payload.property] = payload.with;
      }
}

export default {
    namespaced: true,
    state,
    mutations,
}
        