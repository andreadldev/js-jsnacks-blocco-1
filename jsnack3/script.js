guestList = ["Paolo", "Giuseppe", "Francesco", "Salvatore", "Michele"];

const guestName = prompt("Inserisci il tuo nome");

for (let i = 0; i < guestList.length; i++) {
    if (guestList[i] === guestName)
    {console.log(`Ciao ${guestName}, il tuo nome è nella lista degli invitati.`);
    break;}

    else console.log("false");   
}