document.addEventListener('DOMContentLoaded', function() {
    // Générer l'opération CAPTCHA
    const captchaElement = document.getElementById('captcha');
    const captchaResultElement = document.getElementById('captcha-result');
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    captchaElement.textContent = `${num1} + ${num2}`;
    let captchaAnswer = num1 + num2;

    /* Fonction handleSubmit pour gérer la soumission du formulaire */
    function Submit(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        // Vérifier la réponse du CAPTCHA
        if (parseInt(captchaResultElement.value) !== captchaAnswer) {
            alert('La réponse  est incorrecte. Veuillez réessayer.');
            return;
        }
        // Récupère l'élément formulaire avec l'identifiant 'contact-form'
        const form = document.getElementById('contact-form');
        // Encode l'objet du message du formulaire pour l'inclure dans une URL
        const subject = encodeURIComponent("Formulaire de contact");
        // Encode le corps du message du formulaire pour l'inclure dans une URL
        const body = encodeURIComponent(
            `Nom: ${form.nom.value}\n` + // Récupère et encode le nom de famille
            `Prénom: ${form.prenom.value}\n` +
            `Adresse email: ${form.email.value}\n` +
            `Date de naissance: ${form.date.value}\n` +
            `Formations souhaitées: ${form.formations.value}\n` +
            `Actuellement, vous êtes: ${form.annee.value}\n` +
            `Langues parlées: ${Array.from(form.langues)
                .filter(langue => langue.checked)
                .map(langue => langue.value)
                .join(', ')}\n\n` +
            `Demande spécifique: \n${form.demande.value}`
        );

        // Crée l'URL mailto avec les paramètres encodés
        const mailtoLink = `mailto:nom.prenom@etud.univ-ubs.fr?subject=${subject}&body=${body}`;

        // Ouvre l'URL mailto dans une nouvelle fenêtre pour créer un email
        window.location.href = mailtoLink;
    }

    // Attache la fonction Submit à l'événement de soumission du formulaire
    document.getElementById('contact-form').addEventListener('submit', Submit);
});