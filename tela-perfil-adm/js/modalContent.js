//código apenas para preencher o modal dos squads

for (let i = 0; i < 12; i++) {
    const random = Math.floor(Math.random() * 3);
    const randAction = Math.floor(Math.random() * 2);

    const fases = ['KICK OFF', 'RISE UP', 'GROW UP'];
    const action = ['Commit realizado', 'Documento anexado']
    
    //Randomizando o objeto com 12 entries
    const squads = {
        [`SQUAD ${i+1}`] : fases[random],
         '08/10/2022': `${action[randAction]} em Entrega Parcial ${fases[random]}! 2022`
    }

    const divSquads = document.getElementById('divSquads');
    
    //iterando pelos valores do objeto
    for (const [key, value] of Object.entries(squads)) {
        const para = document.createElement('p');
        const datePara = document.createElement('p')
        datePara.className = 'paragraphs'

        //if chain dos squads para inseri-los na div
        if (value == 'KICK OFF') {
            para.innerHTML = `<span class="squads">${key}</span> - 
            <span class="kickoff">${value}</span>`;
            divSquads.appendChild(para);
        }else if (value == 'RISE UP') {
            para.innerHTML = `<span class="squads">${key}</span> - 
            <span class="riseup">${value}</span>`;
            divSquads.appendChild(para);
        }else if (value == 'GROW UP'){
            para.innerHTML = `<span class="squads">${key}</span> - 
            <span class="growup">${value}</span>`;
            divSquads.appendChild(para);
        } else {
            datePara.innerHTML = `<span class="date">${key} - ${value}</span><br><hr>`;
            divSquads.appendChild(datePara);
        }
    }
}