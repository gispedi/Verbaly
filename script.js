let deferredPrompt;
const btnInstall = document.getElementById('btnInstall');

window.addEventListener('beforeinstallprompt', (e) => {
  // Blocca il prompt automatico
  e.preventDefault();
  deferredPrompt = e;
  // Mostra il bottone “Installa Verbaly”
  btnInstall.style.display = 'inline-block';
});

btnInstall.addEventListener('click', async () => {
  // Nascondi il pulsante dopo il click
  btnInstall.style.display = 'none';

  if (deferredPrompt) {
    // Mostra il dialog di installazione
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Risultato installazione: ${outcome}`); // accettato o rifiutato
    deferredPrompt = null;
  }
});

// Se l’app è già installata, puoi nascondere subito il bottone
window.addEventListener('appinstalled', () => {
  console.log('Verbaly è stata installata correttamente!');
  btnInstall.style.display = 'none';
});

// FUNZIONE di registrazione
function registrati(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      // invio mail verifica
      return userCredential.user.sendEmailVerification();
    })
    .then(() => {
      alert('Ti abbiamo inviato una mail. Controlla la posta per confermare il tuo account.');
    })
    .catch(error => {
      console.error(error.code, error.message);
      alert('Errore durante la registrazione: ' + error.message);
    });
}
