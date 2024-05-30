/* fonction handleSubmit pour gerer la soumission du formulaire */
function Submit(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    // Récupère l'élément formulaire avec l'identifiant 'cotact-form'
    const form = document.getElementById('contact-form');

    //Encode l'objet du message du formulaire pour l'inclure dans une URL
    const subject = encodeURIComponent("Formulaire de contact");
    
    // Encode le corps du message du formulaire pour l'inclure dans une URL
    const body = encodeURIComponent(
        `Nom: ${form.nom.value}\n` + //Récupère et encode le nom de famille
        `Prenom: ${form.prenom.value}\n` + 
        `Adresse email: ${form.email.value}\n` + 
        `Date de naissance: ${form.date.value}\n` + 
        `Formations souhaitées: ${form.formation.value}\n` + 
        `Actuellement, vous êtes: ${form.annee.value}\n` +
        `Langues parlées: ${Array.from(form.langues)
            .filter(langue => langue.checked)
            .map(langue => langue.value)
            .join(', ')}\n\n` +
        `Demande spécifique: \n${form.demande.value}`      
    );
    //Creer l'URL mailto avec le sparamètres saisis
    const mailtoLink = `mailto:lacoste.e2304961@etud.univ-ubs.fr?subject=${subject}&body=${body}`;
    //Ouvrir l'URL mailto dan sune nouvelle fenêtre pour créer un email
    window.location.href = mailtoLink;
}