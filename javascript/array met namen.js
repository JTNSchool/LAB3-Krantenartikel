const Personen = []
let Running = false

const MinimumSpelers = 3
const inputArea = document.createElement("input")
const ConfirmKnop = document.createElement("button")
const Information = document.createElement("H2")


function RunCode() {
    if (Running == false) {
        Running = true

        const RunButton = document.getElementById("button");
        document.body.removeChild(RunButton);

        Information.innerText = `Hoeveel namen wilt u in de array stoppen? (Minimaal ${MinimumSpelers})`
        document.body.appendChild(Information)
        inputArea.id = "TextareaID"
        inputArea.type = "number"
        document.body.appendChild(inputArea)
        ConfirmKnop.innerText = "Continue"
        ConfirmKnop.onclick = function() {GoToQuestion()}
        document.body.appendChild(ConfirmKnop)
    }
}


function GoToQuestion() {
    const TextArea = document.getElementById("TextareaID")
    const AantalPersonen = Number(TextArea.value)
    if (AantalPersonen >= MinimumSpelers) {
        inputArea.type = "string"

        TextArea.value = ""
        Information.innerText = `Vul een Naam in (${Personen.length+1}/${AantalPersonen})`
        ConfirmKnop.innerText = "Klik om toe tevoegen"

        ConfirmKnop.onclick = function() {
            if (TextArea.value != "") {
                TextArea.value = ""
                Personen[Personen.length] = TextArea.value
                Information.innerText = `Vul een Naam in (${Personen.length+1}/${AantalPersonen})`
            
                if (Personen.length >= AantalPersonen) {
                    inputArea.remove()
                    ConfirmKnop.remove()
                    PrintNamen()
                }
            }
        }

    } 
}

function PrintNamen() {
    Information.innerText = "De ingevoerde namen in de array zijn:"

    Personen.forEach(element => {
        const Naam = document.createElement("p")
        Naam.innerText = element
        document.body.appendChild(Naam)
    });

    const OmgedraaideH2 = document.createElement("H2")
    OmgedraaideH2.innerText = "De ingevoerde namen in de array in omgekeerde volgorde zijn:"
    document.body.appendChild(OmgedraaideH2)
    Personen.reverse().forEach(element => {
        const Naam = document.createElement("p")
        Naam.innerText = element
        document.body.appendChild(Naam)
    });
}