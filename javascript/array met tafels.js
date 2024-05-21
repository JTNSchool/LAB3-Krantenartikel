function RunCode() {
    document.getElementById("button").remove()

    const Tafels = [2,4,6,8]
    const Maxgetal = 10


    Tafels.forEach(getal => {
        const Title = document.createElement("h2")
        Title.innerText = `Tafel van ${getal}`
        document.body.appendChild(Title)

        for (let i = 1; i < Maxgetal+1; i++) {
            const p = document.createElement("p")
            p.innerText = `${getal} x ${i} = ${getal * i}`
            document.body.appendChild(p)
            
        }
        
    });
}