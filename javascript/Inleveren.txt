const dagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"]

function RunCode() {
    //Alle dagen van de week
    CreateItem("h2", "Alle dagen van de week:")
    CreateItem("p", dagen)

    //alle werkdagen van de week
    CreateItem("h2", "Alle werkdagen van de week:")
    CreateItem("p", dagen.slice(0,5))

    //alle Weekenddagen van de week
    CreateItem("h2", "Alle Weekenddagen van de week:")
    CreateItem("p", dagen.slice(5,7))

    //alle Werkdagen Omgedraaid van de week
    CreateItem("h2", "De werkdagen in omgekeerde volgorde zijn:")
    CreateItem("p", dagen.slice(0,5).reverse())

    //alle omgedraaid Weekenddagen van de week
    CreateItem("h2", "Alle Weekenddagen van de week omgedraaid:")
    CreateItem("p", dagen.slice(5,7).reverse())

}

function CreateItem(type, text) {
    item = document.createElement(type)
    item.innerText = text
    document.body.appendChild(item)
}