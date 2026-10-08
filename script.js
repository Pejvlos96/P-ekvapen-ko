let pocetNe = 0;

function ano() {
    document.querySelector(".card").innerHTML = `
        <div class="heart">🎉</div>

        <p class="small-title">JOOOOO!</p>

        <h1>JEEEEJ! 💚</h1>

        <p id="text">
            Já věděl, že neodmítneš. HEHE 🥹<br>
            Tak to vypadá, že máme romantic date😁.
        </p>

        <p class="date">
            ✨ hezký večer<br>
            💚 a dobrá společnost
        </p>
    `;
}

function ne() {

    pocetNe++;

    const button = document.getElementById("noButton");
    const text = document.getElementById("text");

    if (pocetNe === 1) {

        text.innerHTML =
            "Opravdu? 😢<br>Nechceš si to ještě rozmyslet?";

        button.innerHTML = "Ne 😢";

        button.style.transform =
            "translateY(-35px)";
    }

    else if (pocetNe === 2) {

        text.innerHTML =
            "Hmm... 🥺<br>To mě trochu mrzí. Moc jsem se těšil🥺";

        button.innerHTML = "Ne 🥺";

        button.style.transform =
            "translateX(300px)";
    }

    else if (pocetNe === 3) {

        text.innerHTML =
            "Ale noták já vím, že chceš😁😁";

        button.innerHTML = "Ne? 😭";

        button.style.transform =
            "translateY(-500px) translateX(350px)";
    }

    else if (pocetNe === 4) {

        text.innerHTML =
            "Opravdu si to nerozmyslíš?🥺";

        button.innerHTML = "Ne!😑";

        button.style.transform =
            "translateY(560px) translateX(-400px)";
    }
    else if (pocetNe === 5) {

        text.innerHTML =
            "Dobře... 😭<br>Rozhodnutí respektuju. Kdyby sis to nakonec rozmyslela, stačí stisknout ano🥹💚";

        button.style.display = "none";
    }    
}
