function RunCode() {
    document.getElementById("button").remove()

    var arrayEen = [1,2,3,4,5,6,7,8,9,10];
    var arrayTwee = [2,4,6,8,10,12,14,16,18,20];
    
    const Title = document.createElement("H1")
    Title.innerText = "Array operatoren"
    document.body.appendChild(Title)

    optellen(arrayEen, arrayTwee)
    aftrekken(arrayEen, arrayTwee)
    vermenigvuldigen(arrayEen, arrayTwee)
    delen(arrayEen, arrayTwee)
    
}


function optellen(arrayEen, arrayTwee) {
    const OptelTitle = document.createElement("H2")
    OptelTitle.innerText = "Optellen van de twee arrays zijn:"
    document.body.appendChild(OptelTitle)

    for (let i = 0; i < arrayEen.length; i++) {
        const p = document.createElement("p")
        p.innerText = `${arrayEen[i]} + ${arrayTwee[i]} = ${arrayEen[i] + arrayTwee[i]}`
        document.body.appendChild(p)
    }
}




function aftrekken(arrayTwee, arrayEen) {
    const OptelTitle = document.createElement("H2")
    OptelTitle.innerText = "Aftrekken van de twee arrays zijn:"
    document.body.appendChild(OptelTitle)

    for (let i = 0; i < arrayEen.length; i++) {
        const p = document.createElement("p")
        p.innerText = `${arrayEen[i]} - ${arrayTwee[i]} = ${arrayEen[i] - arrayTwee[i]}`
        document.body.appendChild(p)
    }
}

function vermenigvuldigen(arrayEen, arrayTwee) {
    const OptelTitle = document.createElement("H2")
    OptelTitle.innerText = "Vermenigvuldigen van de twee arrays zijn:"
    document.body.appendChild(OptelTitle)

    for (let i = 0; i < arrayEen.length; i++) {
        const p = document.createElement("p")
        p.innerText = `${arrayEen[i]} * ${arrayTwee[i]} = ${arrayEen[i] * arrayTwee[i]}`
        document.body.appendChild(p)
    }
}

function delen(arrayTwee, arrayEen) {
    const OptelTitle = document.createElement("H2")
    OptelTitle.innerText = "Delen van de twee arrays zijn:"
    document.body.appendChild(OptelTitle)

    for (let i = 0; i < arrayEen.length; i++) {
        const p = document.createElement("p")
        p.innerText = `${arrayEen[i]} / ${arrayTwee[i]} = ${arrayEen[i] / arrayTwee[i]}`
        document.body.appendChild(p)
    }
}
 