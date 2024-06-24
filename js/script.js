let first_name = prompt('Inserisci il tuo nome');
let last_name = prompt('Inserisci il tuo cognome');
let fav_color = prompt('Inserisci il tuo colore preferito');
let day_number = prompt('Inserisci il tuo giorno di nascita');
let month_number = prompt('Inserisci il tuo mese di nascita');
let somma_number = day_number + month_number;
let password = `${first_name}${last_name}${fav_color}${somma_number}`;
document.getElementById('pass-generator').innerHTML = password;