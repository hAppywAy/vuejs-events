function bam() {
  alert("Bam");
}

const app = new Vue({
  el: '#app',
  data: {
    count: 0,
    imageTempForHover: 'https://cdn.pixabay.com/photo/2016/07/26/17/28/pokemon-1543354__340.jpg',
    product: {
      name: 'Figurine',
      subName: 'Pokemon',
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
  },
  methods: {
    onSwap(variant) {
      let image = variant.variantImage;
      variant.variantImage = this.imageTempForHover;
      this.imageTempForHover = image;
    },
    bam() {
      alert("boom"); // override la fonction bam() ligne 1
    }
  },
  updated() {
    console.log("Is updated ?");
    // this.count++;
    // this.product.name = "new name" + this.count;
    // attention boucle infinie !!
    // alert("update de mon state local");
  },
  created(){
    console.log("created");
    console.log(this.product.name);
  },
  mounted(){
    console.log("mounted");
    this.product.name = "blabla";
    console.log(this.product.name);
  },
  computed: {
    fullName() {
      return this.product.name + this.product.subName;
    }
  }
})