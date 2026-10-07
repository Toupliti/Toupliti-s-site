(function () {
    var old = console.log;
    var logger = document.getElementById('log'); // Élément HTML cible
    
    console.log = function () {
        // Traiter chaque argument
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            var output = (typeof arg === 'object') 
                ? JSON.stringify(arg, undefined, 2) 
                : arg;
            
            // Ajouter au HTML
            logger.innerHTML += output + '<br>';
        }
        // Appeler la console native pour garder les logs dans le navigateur
        old.apply(console, arguments);
    };
})();   