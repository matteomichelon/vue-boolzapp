/* Vue */

var app = new Vue(
    {
        el: '#root',

        /* DATA */
        data: {

            activeContactIndex: 0,

            pushText: '',

            userFilterText: '',

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            chevron: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            chevron: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            chevron: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            chevron: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            chevron: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            chevron: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            chevron: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            chevron: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            chevron: false
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            chevron: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            chevron: false
                        }
                    ],
                },
            ],
        },

        /* METHODS */
        methods: {

            // Funzione che mi permette di filtrare i contatti
            filterContact () {
                //Stringa inserita toLowerCase
                const userFilerTextToLowerCase = this.userFilterText.toLowerCase();

                // Scorro la lista dei contatti
                this.contacts.forEach( element => {

                    // Confronto la stringa inserita con i nome dei contatti
                    // entrambi in lowercase
                    const nameLower = element.name.toLowerCase();
                    const valueSearch = nameLower.includes( userFilerTextToLowerCase );
                    //console.log( valueSearch );

                    // Se la stringa inserita è presente nel nome 
                    // la visibilità dell'utente sarà true
                    if ( valueSearch ) {
                        element.visible = true;
                        // Altrimenti nasconderò l'utente
                    } else {
                        element.visible = false;
                    }

                } );
            },

            // Funzione che mi permette di inviare un nuovo messaggio dell'utente attivo
            insertNewMessage () {
                const newMessage = this.pushText;
                // this.activeContactIndex per avere l'indice dell'utente attivo
                const arraytMessage = this.contacts[ this.activeContactIndex ].messages;
                const currentDate = dayjs().format( 'D/MM/YYYY HH:mm:ss' );

                // Creo il nuovo oggetto con il messaggio, 
                // data e status:'sent'
                const newMessageObject = {
                    date: currentDate,
                    text: newMessage,
                    status: 'sent',
                    chevron: false
                }

                // Aggiungo l'oggetto creato all'array di messaggi 
                arraytMessage.push( newMessageObject );

                // Reset del mio input
                this.pushText = '';

                //====
                // Funzione di risposta automatica dopo un tempo prestabilito
                //====
                setTimeout( () => {

                    // Creo il nuovo oggetto con il messaggio, 
                    // data e status:'received'
                    const newMessageObject = {
                        date: currentDate,
                        text: 'ok',
                        status: 'received',
                        chevron: false
                    }

                    // Aggiungo l'oggetto creato all'array di messaggi 
                    contactActiveNow.push( newMessageObject );

                    // La risposta sarà dopo 1 secondo
                }, 1000 );
            },

            deleteMessage ( messageIndex ) {
                // Prelevo l'array di messaggi dell'utente
                const arrayObjectContact = this.contacts[ this.activeContactIndex ];
                const arrayMessages = arrayObjectContact.messages;
               
                // Rimuovo l'elemento indice dall'array
                arrayMessages.splice( messageIndex, 1 );

                // Active message false! quando viene aggiunta funzione

            },

            lastAccess ( activeContact ) {
                // Dichiaro l'array di messaggi dell'utente attivo 
                const arrayMessages = activeContact.messages;
                // Prelevo la data dall'ultimo oggetto del mio array
                const lastMessage = arrayMessages[ ( arrayMessages.length - 1 ) ].date;

                return lastMessage;
            },

            optionView ( message ) {
                const arrayContacts = this.contacts;



                // Resetto tutte le chevron
                arrayContacts.forEach( element => {
                    const arrayMessages = element.messages;
                    arrayMessages.forEach( element => {
                        element.chevron = false;
                        console.log( element.chevron );
                    } );
                } );

                // Rendo true la chevron corrente
                message.chevron = !message.chevron;




                //console.log( this.contacts );
                //console.log( message.chevron );
                //console.log( index );
            }

        }
    }
);

/* end Vue */
