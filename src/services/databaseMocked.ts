



const gift1 = {
    id: 1,
    title: "Coffret bleu",
    description: " c'est un super coffret",
    characteristics: [
        "coffret bleu trop mignon",
        "avec une brosse à cheveux",
        "inch'allah il a des cheveux"
    ],
    price: 45,
    more: "#",
    img:{
        src: "/images/cadeau-coffret-1.webp",
        alt: "description coffret bleu"
    }
}

const gift2 = {
    id: 2,
    title: "Coffret beige",
    description: " c'est un super coffret beige",
    characteristics: [
        "coffret beige trop mignon",
        "avec un bonnet"
    ],
    price: 49,
    more: "#",
    img:{
        src: "/images/cadeau-coffret-2.webp",
        alt: "description coffret beige"
    }
}

const gift3 = {
    id: 3,
    title: "Coffret Sophie la giraffe",
    description: " c'est un super coffret avec Sophie. Trop bien",
    characteristics: [
        "coffret Sophie. What else"
    ],
    price: 99,
    more: "#",
    img:{
        src: "./images/cadeau-coffret-sophie-girafe.webp",
        alt: "description coffret Sophie"
    }
}

const gift4 = {
    id: 4,
    title: "Parc pour bébé",
    description: "Parc éveille pour bébé jusqu’à 2 ans. Facilement pliable. Qualité premium",
    characteristics: [
        "le modèle est facilement démontable",
        "construction légère",
        "il est produit de matériaux sûrs et non toxiques",
        "facile à nettoyer"
    ],
    price: 89,
    more: "#",
    img:{
        src: "./images/cadeau-parc.webp",
        alt: "description du parc"
    }
}

const list = {
    title: "Naissance de Michel",
    author: "Thunder Blasters",
    createAt: "Mardi 03 juin 2026",
    description: "Nous sommes ravis de vous annoncez la naissance de Michel. Michel vous invite à fêter cette heureux évènement. Merci de ne pas venir les mains vides (mes parents vous connaissent bande de radin). Pour vous facilité la tâche voici ma liste de cadeaux :",
    gifts: [gift1, gift2, gift3, gift4]
}

class Database{

    constructor(){}

    findList(){
        return list;
    }

    findGiftById(id: number){
        return list.gifts[id-1];
    }

}


const db = new Database();

export {db};