function RunCode() {
    document.getElementById("button").remove()

    const Info = document.createElement("h2")
    Info.innerText = "Voer een getal in:"
    document.body.appendChild(Info)

    const InputPrompt = document.createElement("input")
    InputPrompt.type = "number"
    document.body.appendChild(InputPrompt)

    const ConfirmButton = document.createElement("button")
    ConfirmButton.innerText = "Confirm"
    ConfirmButton.onclick = function() {Math.round(CheckInput(InputPrompt.value))}
    document.body.appendChild(ConfirmButton)
}

function CheckInput(Getal) {
    if (Getal >= 1) {
        
        //Create array
        let Array = []
        for (let i = 0; i <= Getal; i++) { Array[i] = i; }

        const ArrayText = document.createElement("p")
        ArrayText.innerText = `Array: ${Array}`
        document.body.appendChild(ArrayText)

        for (let index = 0; index < Array.length; index++) {
            const p = document.createElement("p")
            for (let i = Array.length-1; i >= index; i--) {p.innerText += Array[Array.length-i-1]}
            document.body.appendChild(p)
            
        }
    }
}