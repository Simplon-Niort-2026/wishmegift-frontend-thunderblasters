import List from "./List";

const descriptionList = [
    "le modèle est facilement démontable, la construction est légère",
    "il est produit de matériaux sûrs et non toxiques",
    "facile à nettoyer"
]


export default function GiftList() {
    return (
        <List array={descriptionList} />
    )
}