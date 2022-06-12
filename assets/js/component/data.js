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
                    4: 'Hyper Téméraire Mais Limité'
                },
                2: {
                    1: 'À mettre en forme des pages web',
                    2: 'À structurer du contenu dans une page web',
                    3: 'À créer des pages dynamiques',
                    4: 'À concurrencer Google et Facebook'
                },
                3: {
                    1: 'Dans les années 70, avec Arpanet',
                    2: 'En 1991 peut être',
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
            'questions': {
                1: 'Quel est le rapport entre Java et JavaScript ?',
                2: 'Laquelle de ces syntaxes est correcte ?',
                3: 'Quel attribut des noeuds de l\'arbre DOM correspond à l\'attribut HTML class ?',
                4: "Dans un fichier JavaScript externe (.js), il faut :",
                5: 'Lequel de ces types d\'événements n\'existe pas ?',
                6: 'Quelle méthode n\'existe pas dans le DOM ?',
                7: "Laquelle de ces propositions est un nom de variable valide en JavaScript ?",
                8: 'Dans une boucle, l\'instruction continue permet de :',
                9: "var iNum = 12; iNum %= 2; A la suite de cette expression, combien vaut iNum ?",
                10: 'Quelle méthode permet de comparer deux chaînes texte ?'
            },
            'answers' : {
                1: {
                    1: 'C\'est le même langage, mais le nom  JavaScript  est utilisé pour le code s\'exécutant dans une page Web.',
                    2: 'Ce sont deux langages différents, malgré quelques points communs dans la syntaxe.',
                    3: 'Java est une version améliorée de JavaScript.',
                    4: 'Java est une île, ça n\'a rien à voir !'
                },
                2: {
                    1: 'if (a != 2) {}',
                    2: 'if a != 2 {}',
                    3: 'if (a <> 2) {}',
                    4: "if a <> 2 {}"
                },
                3: {
                    1: 'class',
                    2: 'CLASS',
                    3: 'className',
                    4: "listClass"
                },
                4: {
                    1: " entourer le code avec les balises <script> et </script>.",
                    2: "préciser l’encodage du fichier avec la règle @charset.",
                    3: 'échapper les caractères spéciaux (X)HTML',
                    4: 'Aucune des réponses précédentes.'
                },
                5: {
                    1: 'blur',
                    2: 'load',
                    3: 'mouseclick',
                    4: 'mouseout'
                },
                6: {
                    1: 'document.getElementsByClassName',
                    2: 'document.getElementsByTagName',
                    3: 'document.getElementsByAttribute',
                    4: 'document.getElementById'
                },
                7: {
                    1: 'var',
                    2: '2a',
                    3: 'NaN',
                    4: '$b'
                },
                8: {
                    1: 'continuer l\'exécution du code après la boucle.',
                    2: 'passer à l\'itération suivante.',
                    3: 'revenir au début de l\'itération courante.',
                    4: 'supprimer toutes les variables globales.'
                },
                9: {
                    1: '6',
                    2: '14',
                    3: '0.12',
                    4: '0'
                },
                10: {
                    1: 'charAt()',
                    2: 'charCodeAt()',
                    3: 'indexOf()',
                    4: 'localeCompare()'
                },
            
                
            }
        },
        'PHP': {
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
        'MySQL': {
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
        'Symfony': {
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
    },

    allAnswers : {
        'HTML': {
            'reponse' : {
                1: 2,
                2: 2,
                3: 2,
                4: 2,
                5: 4,
                6: 1,
                7: 4,
                8: 3,
                9: 2,
                10: 1,
            },
            'doc' : { 
                1: 'Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour représenter les pages web.',
                2: "Le langage html est un code utilisé pour structurer une page Internet, c'est-à-dire pour indiquer quels éléments doivent apparaître, dans quel ordre ils doivent se situer et quelles actions ils effectuent.",
                3: "C'est en août 1991 que Tim Berners-Lee annonce publiquement son travail, en utilisant d'ailleurs le premier fichier HTML de l'histoire. C'est donc cette date qui marque la naissance officielle de l'HTML."
//4 Balise autofermante
//8 src (pour source) permet à la balise <img> de faire le lien vers le chemin de l'image.
            }
        },
        'CSS': {
            'reponse' : {
                1: 4,
                2: 1,
                3: 1,
                4: 3,
                5: 3,
                6: 4,
                7: 1,
                8: 2,
                9: 4,
                10: 3,
            },
            'doc' : { 
                1: 'lorem10'
            }
        },
        'Javascript': {
            'reponse' : {
                1: 2,
                2: 1,
                3: 3,
                4: 4,
                5: 3,
                6: 3,
                7: 4,
                8: 2,
                9: 4,
                10: 4,
            },
            'doc' : { 
                1: "Le nom  JavaScript  a été choisi en raison des similitudes de syntaxe, et aussi (surtout ?) parce que le nom  Java  était à la mode",
                2: 'lorem10',
                3: 'lorem10',
                4: 'lorem10',
                5: "Il faut utiliser click, qui a d'ailleurs l'avantage de se déclencher aussi avec l'activation par le clavier.",
                6: 'lorem10',
                7: "var est un mot-clé ; 2a n'est pas valide car un identifiant ne peut pas commencer par un chiffre ; int est un mot-clé réservé pour les futures versions de la spécification ECMAScript.",
                8: 'lorem10',
                9: 'lorem10',
                10: "La bonne réponse est localeCompare()."
            }
        },
        'PHP': {
            'reponse' : {
                1: 4,
                2: 1,
                3: 1,
                4: 3,
                5: 3,
                6: 4,
                7: 1,
                8: 2,
                9: 4,
                10: 3,
            },
            'doc' : { 
                1: 'lorem10'
            }
        },
        'MySQL': {
            'reponse' : {
                1: 4,
                2: 1,
                3: 1,
                4: 3,
                5: 3,
                6: 4,
                7: 1,
                8: 2,
                9: 4,
                10: 3,
            },
            'doc' : { 
                1: 'lorem10'
            }
        },
        'Symfony': {
            'reponse' : {
                1: 4,
                2: 1,
                3: 1,
                4: 3,
                5: 3,
                6: 4,
                7: 1,
                8: 2,
                9: 4,
                10: 3,
            },
            'doc' : { 
                1: 'lorem10'
            }
        }
    }
}