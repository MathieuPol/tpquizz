const data = {
    allQuestions : {
        'HTML': {
            'questions': {
                1: 'Que signifie HTML ?',
                2: 'À quoi sert HTML ?',
                3: 'En quelle année est né HTML ?',
                4: "Qu'est ce qu'un navigateur web ?",
                5: 'Comment représenter un paragraphe en HTML ?',
                6: 'Comment représenter une liste en HTML ?',
                7: "Trouvez l'intrus dans cette liste",
                8: 'Citez un attribut HTML lié aux images',
                9: "Quel attribut permet d'indiquer la destination d'un lien ?",
                10: 'À quoi servent les spécifications ARIA, liées à HTML ?'

            },
            'answers' : {
                1: {
                    1: 'HomeTabulation of Mailing List',
                    2: 'HyperText Markup Language',
                    3: 'Hyperspace TradeMark Language',
                    4: 'XpTdr Mdr Lol'
                },
                2: {
                    1: 'À mettre en forme des pages web',
                    2: 'À structurer du contenu dans une page web',
                    3: 'À créer des pages dynamiques',
                    4: 'À concurrencer Google et Facebook'
                },
                3: {
                    1: 'Dans les années 70, avec Arpanet',
                    2: 'Entre 1986 et 1988, avec le Club Dorothée',
                    3: 'Plutôt en 1993 non ? Sous le mandat Bill Clinton',
                    4: "En 1990 exactement, avec la naissance d'Emma Watson"
                },
                4: {
                    1: "Un outil permettant d'accéder à Internet",
                    2: "Un logiciel capable d'interpréter et d'afficher du code HTML",
                    3: 'La toute première application mondiale',
                    4: 'Une interface pour lire et recevoir des e-mails'
                },
                5: {
                    1: '<ul>',
                    2: '<li>',
                    3: '<h1>',
                    4: '<p>'
                },
                6: {
                    1: '<ul>',
                    2: '<li>',
                    3: '<div>',
                    4: '<list>'
                },
                7: {
                    1: '<ul>',
                    2: '<div>',
                    3: '<li>',
                    4: '<img>'
                },
                8: {
                    1: 'class',
                    2: 'href',
                    3: 'src',
                    4: 'img'
                },
                9: {
                    1: 'class',
                    2: 'href',
                    3: 'src',
                    4: 'a'
                },
                10: {
                    1: 'à rendre le contenu et les applications web accessibles',
                    2: 'à gérer les familles de polices sur la page web',
                    3: 'à construire des pages web audibles et musicales',
                    4: 'à aider à l\'internationalisation du web ("Ach, ya !")'
                },
            }

        },
        'CSS' : {
            'questions': {
                1: "Que veux dire l'abréviation CSS ?",
                2: "Quelle déclaration CSS permet d'ajouter une majuscule à chaque mot d'un élément HTML ?",
                3: "Lequel de ces sélecteurs permet de cibler l'élément HTML avec l'attribut id=\"titi\" ?",
                4: "Lequel de ces sélecteurs permet de cibler l'élément HTML avec l'attribut class=\"toto\" ?",
                5: "Quelle propriété CSS permet de modifier la couleur d'un élément HTML ?",
                6: "Quelle propriété CSS permet de modifier la taille de la police d'un élément HTML ?",
                7: "Lequel de ces sélecteurs a le poids le plus important et donc la priorité sur les autres ?",
                8: "Quelle déclaration permet de supprimer le soulignement d'un élément en CSS ?",
                9: "Quelle valeur de la propriété display: permet de faire disparaître un élément ?",
                10: "Quelle propriété permet de modifier la police d'un élément HTML ?"

            
            },
            'answers' : {
                1: {
                    1: 'Colorful Style Sheets',
                    2: 'Computer Style Sheets',
                    3: 'Creative Style Sheets',
                    4: 'Cascading Style Sheets'
                },
                2: {
                    1: 'text-transform: capitalize;',
                    2: 'font-transform: capitalize;',
                    3: 'text-decoration: uppercase;',
                    4: "C'est impossible"
                },
                3: {
                    1: '#titi {}',
                    2: '*titi {}',
                    3: '.titi {}',
                    4: "titi {}"
                },
                4: {
                    1: "#titi {}",
                    2: "*titi {}",
                    3: '.titi {}',
                    4: 'titi {}'
                },
                5: {
                    1: 'fgcolor:',
                    2: 'text-color:',
                    3: 'color:',
                    4: 'bgcolor:'
                },
                6: {
                    1: 'text-size:',
                    2: 'font-style:',
                    3: 'text-style:',
                    4: 'font-size:'
                },
                7: {
                    1: '#toto',
                    2: '.titi',
                    3: 'body',
                    4: '*'
                },
                8: {
                    1: 'underline: none;',
                    2: 'text-decoration: none;',
                    3: 'text-decoration: underline;',
                    4: 'text-decoration: hidden;'
                },
                9: {
                    1: 'hidden',
                    2: 'invisible',
                    3: 'no',
                    4: 'none'
                },
                10: {
                    1: 'police:',
                    2: 'font:',
                    3: 'font-family:',
                    4: 'text-family:'
                },
            
            }
        },
        'Javascript' : {
            'questions': {},
            'answers' : {}
        },
        'PHP': {
            'questions': {},
            'answers' : {}
        },
        'MySQL': {
            'questions': {},
            'answers' : {}
        },
        'Symfony': {
            'questions': {},
            'answers' : {}
        },        
    },

    allAnswers : {
        'HTML': {
            'reponse' : {
                1: 2,
                2: 2,
                3: 3,
                4: 2,
                5: 4,
                6: 1,
                7: 4,
                8: 3,
                9: 2,
                10: 1,
            },
            'doc' : { 
                1: 'lorem10'
//4 Balise autofermante
//8 src (pour source) permet à la balise <img> de faire le lien vers le chemin de l'image.
            }
        }
    }
}