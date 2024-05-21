let lijst = [0, 1]

function CreateNumber(i, list) {
    return list[i] + list[i+1]
}

function RunCode() {
    for (let index = 0; index < 20; index++) {
        lijst[lijst.length] = CreateNumber(index, lijst)
        const p = document.createElement("p")
        p.innerText = lijst
        document.body.appendChild(p)
    }
}