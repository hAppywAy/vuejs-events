# Exercice 1

Dans un nouveau document HTML avec vuejs

Créer un template d'affichage des figurines pokemons :

```js
imageTempForHover: 'https://cdn.pixabay.com/photo/2016/07/26/17/28/pokemon-1543354__340.jpg',
product: {
  name: 'Figurine pokemon',
  image: 'https://cdn.pixabay.com/photo/2022/02/27/06/38/man-7036718__480.jpg',
  inventory: 100,
  variants: [
    {
        variantId: 1,
        variantElement: 'Eau',
        variantName: 'Carapuce',
        variantImage: 'https://cdn.pixabay.com/photo/2019/02/26/11/50/small-4021854_960_720.jpg'
    },
    {
        variantId: 2,
        variantElement: 'Feu',
        variantName: 'Salamèche',
        variantImage: 'https://cdn.pixabay.com/photo/2019/02/27/00/20/small-4023176_960_720.jpg'
    },
    {
        variantId: 3,
        variantElement: 'Plante',
        variantName: 'Bulbizarre',
        variantImage: 'https://cdn.pixabay.com/photo/2021/07/01/22/24/bulbasaur-6380446_960_720.jpg'
    }
  ]
}
```

Dans le template, sur un event mouseenter mouseout, changer l image des variantes pokemon par l'image 'imageTempForHover'.
