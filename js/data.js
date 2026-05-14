// Italian Learning Platform - Content Data

const vocabularyData = {
  greetings: [
    {
      italian: "Ciao",
      english: "Hello / Goodbye",
      pronunciation: "CHOW",
      example: "Ciao, come stai?"
    },
    {
      italian: "Buongiorno",
      english: "Good morning",
      pronunciation: "bwon-JOR-no",
      example: "Buongiorno, signore!"
    },
    {
      italian: "Buonasera",
      english: "Good evening",
      pronunciation: "bwon-ah-SEH-rah",
      example: "Buonasera, come sta?"
    },
    {
      italian: "Grazie",
      english: "Thank you",
      pronunciation: "GRAHT-see-eh",
      example: "Grazie mille!"
    },
    {
      italian: "Prego",
      english: "You're welcome",
      pronunciation: "PREH-go",
      example: "Di nulla, prego!"
    },
    {
      italian: "Mi chiamo...",
      english: "My name is...",
      pronunciation: "mee kee-AH-mo",
      example: "Mi chiamo Marco."
    },
    {
      italian: "Piacere",
      english: "Nice to meet you",
      pronunciation: "pee-ah-CHEH-reh",
      example: "Piacere di conoscerti."
    },
    {
      italian: "Arrivederci",
      english: "Goodbye",
      pronunciation: "ah-ree-veh-DEHR-chee",
      example: "Arrivederci, a presto!"
    }
  ],
  numbers: [
    { italian: "Zero", english: "Zero", pronunciation: "ZEH-ro", example: "Zero errori" },
    { italian: "Uno", english: "One", pronunciation: "OO-no", example: "Un gatto" },
    { italian: "Due", english: "Two", pronunciation: "DOO-eh", example: "Due cani" },
    { italian: "Tre", english: "Three", pronunciation: "Treh", example: "Tre ragazzi" },
    { italian: "Quattro", english: "Four", pronunciation: "KWAH-tro", example: "Quattro sedie" },
    { italian: "Cinque", english: "Five", pronunciation: "CHEEN-kweh", example: "Cinque stelle" },
    { italian: "Sei", english: "Six", pronunciation: "SEH-ee", example: "Sei mesi" },
    { italian: "Sette", english: "Seven", pronunciation: "SEH-teh", example: "Sette giorni" },
    { italian: "Otto", english: "Eight", pronunciation: "OHT-to", example: "Otto persone" },
    { italian: "Nove", english: "Nine", pronunciation: "NOH-veh", example: "Nove piatti" },
    { italian: "Dieci", english: "Ten", pronunciation: "dee-EH-chee", example: "Dieci dita" }
  ],
  colors: [
    { italian: "Rosso", english: "Red", pronunciation: "ROS-so", example: "Un fiore rosso" },
    { italian: "Blu", english: "Blue", pronunciation: "Bloo", example: "Il cielo blu" },
    { italian: "Giallo", english: "Yellow", pronunciation: "JEE-ahl-lo", example: "Un sole giallo" },
    { italian: "Verde", english: "Green", pronunciation: "VEHR-deh", example: "L'erba verde" },
    { italian: "Nero", english: "Black", pronunciation: "NEH-ro", example: "Un gatto nero" },
    { italian: "Bianco", english: "White", pronunciation: "bee-AHN-ko", example: "La neve bianca" },
    { italian: "Rosa", english: "Pink", pronunciation: "ROH-zah", example: "Un vestito rosa" },
    { italian: "Marrone", english: "Brown", pronunciation: "mah-ROH-neh", example: "Il cioccolato marrone" }
  ],
  family: [
    { italian: "Padre", english: "Father", pronunciation: "PAH-dreh", example: "Mio padre è ingegnere" },
    { italian: "Madre", english: "Mother", pronunciation: "MAH-dreh", example: "Mia madre è insegnante" },
    { italian: "Fratello", english: "Brother", pronunciation: "frah-TEL-lo", example: "Ho un fratello" },
    { italian: "Sorella", english: "Sister", pronunciation: "so-REL-lah", example: "Ho una sorella" },
    { italian: "Figlio", english: "Son", pronunciation: "FEE-lyo", example: "Il nostro figlio" },
    { italian: "Figlia", english: "Daughter", pronunciation: "FEE-lyah", example: "Mia figlia" },
    { italian: "Nonno", english: "Grandfather", pronunciation: "NON-no", example: "Mio nonno" },
    { italian: "Nonna", english: "Grandmother", pronunciation: "NON-nah", example: "Mia nonna" }
  ],
  food: [
    { italian: "Pizza", english: "Pizza", pronunciation: "PEET-zah", example: "Una pizza Margherita" },
    { italian: "Pasta", english: "Pasta", pronunciation: "PAHS-tah", example: "La pasta al ragù" },
    { italian: "Pane", english: "Bread", pronunciation: "PAH-neh", example: "Pane fresco" },
    { italian: "Formaggio", english: "Cheese", pronunciation: "for-MAHJ-jo", example: "Formaggio italiano" },
    { italian: "Pomodoro", english: "Tomato", pronunciation: "po-mo-DOR-ro", example: "Salsa di pomodoro" },
    { italian: "Vino", english: "Wine", pronunciation: "VEE-no", example: "Un bicchiere di vino" },
    { italian: "Caffè", english: "Coffee", pronunciation: "kah-FEH", example: "Un caffè, per favore" },
    { italian: "Acqua", english: "Water", pronunciation: "AHK-kwah", example: "Un bicchiere d'acqua" }
  ]
};

const grammarTopics = {
  articles: {
    title: "Italian Articles (Articoli)",
    content: `
      <h3>Definite Articles (Articoli Determinativi)</h3>
      <p>Italian articles change based on the gender and number of the noun:</p>
      <table class="grammar-table">
        <tr>
          <th>English</th>
          <th>Singular Masculine</th>
          <th>Singular Feminine</th>
          <th>Plural</th>
        </tr>
        <tr>
          <td>The</td>
          <td>il, lo</td>
          <td>la</td>
          <td>i, gli, le</td>
        </tr>
      </table>
      <p><strong>Examples:</strong></p>
      <div class="grammar-example">
        il gatto (the cat) - masculine singular<br>
        la casa (the house) - feminine singular<br>
        i gatti (the cats) - masculine plural<br>
        le case (the houses) - feminine plural
      </div>
      
      <h3>Indefinite Articles (Articoli Indeterminativi)</h3>
      <table class="grammar-table">
        <tr>
          <th>English</th>
          <th>Masculine</th>
          <th>Feminine</th>
        </tr>
        <tr>
          <td>A / An</td>
          <td>un, uno</td>
          <td>una, un'</td>
        </tr>
      </table>
      <div class="grammar-example">
        un libro (a book)<br>
        una casa (a house)<br>
        un'amica (a friend - feminine)
      </div>
    `
  },
  pronouns: {
    title: "Italian Pronouns (Pronomi)",
    content: `
      <h3>Subject Pronouns (Pronomi Soggetto)</h3>
      <table class="grammar-table">
        <tr>
          <th>Italian</th>
          <th>English</th>
          <th>Formal/Informal</th>
        </tr>
        <tr>
          <td>io</td>
          <td>I</td>
          <td>-</td>
        </tr>
        <tr>
          <td>tu</td>
          <td>you</td>
          <td>informal</td>
        </tr>
        <tr>
          <td>Lei</td>
          <td>you</td>
          <td>formal</td>
        </tr>
        <tr>
          <td>lui</td>
          <td>he</td>
          <td>-</td>
        </tr>
        <tr>
          <td>lei</td>
          <td>she</td>
          <td>-</td>
        </tr>
        <tr>
          <td>noi</td>
          <td>we</td>
          <td>-</td>
        </tr>
        <tr>
          <td>voi</td>
          <td>you (plural)</td>
          <td>informal</td>
        </tr>
        <tr>
          <td>loro</td>
          <td>they</td>
          <td>-</td>
        </tr>
      </table>
    `
  },
  present: {
    title: "Present Tense (Presente)",
    content: `
      <h3>Regular Verbs - First Conjugation (-ARE)</h3>
      <p>Example: PARLARE (to speak)</p>
      <table class="grammar-table">
        <tr>
          <th>Pronoun</th>
          <th>Conjugation</th>
        </tr>
        <tr>
          <td>io</td>
          <td>parlo</td>
        </tr>
        <tr>
          <td>tu</td>
          <td>parli</td>
        </tr>
        <tr>
          <td>lui/lei</td>
          <td>parla</td>
        </tr>
        <tr>
          <td>noi</td>
          <td>parliamo</td>
        </tr>
        <tr>
          <td>voi</td>
          <td>parlate</td>
        </tr>
        <tr>
          <td>loro</td>
          <td>parlano</td>
        </tr>
      </table>
      <div class="grammar-example">
        Io parlo italiano. (I speak Italian.)<br>
        Tu parli inglese? (Do you speak English?)<br>
        Lei parla francese. (She speaks French.)
      </div>
    `
  }
};

const conversationsData = {
  greetings: {
    title: "Introducing Yourself",
    lines: [
      { speaker: "Person A", italian: "Buongiorno! Mi chiamo Marco.", english: "Hello! My name is Marco.", audio: "intro1" },
      { speaker: "Person B", italian: "Piacere! Io sono Anna.", english: "Nice to meet you! I'm Anna.", audio: "intro2" },
      { speaker: "Person A", italian: "Piacere di conoscerti. Da dove sei?", english: "Nice to meet you too. Where are you from?", audio: "intro3" },
      { speaker: "Person B", italian: "Sono da Roma. E tu?", english: "I'm from Rome. And you?", audio: "intro4" },
      { speaker: "Person A", italian: "Io sono da Milano.", english: "I'm from Milan.", audio: "intro5" },
      { speaker: "Person B", italian: "Che bellissimo! Arrivederci!", english: "How wonderful! Goodbye!", audio: "intro6" }
    ]
  },
  food: {
    title: "Ordering at a Restaurant",
    lines: [
      { speaker: "Waiter", italian: "Buonasera! Benvenuto!", english: "Good evening! Welcome!", audio: "food1" },
      { speaker: "Customer", italian: "Grazie. Vorrei un tavolo per due.", english: "Thank you. I'd like a table for two.", audio: "food2" },
      { speaker: "Waiter", italian: "Perfetto. Che cosa desiderate?", english: "Perfect. What would you like?", audio: "food3" },
      { speaker: "Customer", italian: "Io prendo la pasta al ragù.", english: "I'll have pasta with meat sauce.", audio: "food4" },
      { speaker: "Waiter", italian: "Ottima scelta! E per lei?", english: "Excellent choice! And for you?", audio: "food5" },
      { speaker: "Customer 2", italian: "Una pizza Margherita, per favore.", english: "A Margherita pizza, please.", audio: "food6" }
    ]
  },
  directions: {
    title: "Asking for Directions",
    lines: [
      { speaker: "Tourist", italian: "Scusi, dov'è la stazione?", english: "Excuse me, where is the station?", audio: "dir1" },
      { speaker: "Local", italian: "La stazione è a due chilometri da qui.", english: "The station is two kilometers from here.", audio: "dir2" },
      { speaker: "Tourist", italian: "Come ci arrivo?", english: "How do I get there?", audio: "dir3" },
      { speaker: "Local", italian: "Vai dritto, poi gira a sinistra.", english: "Go straight, then turn left.", audio: "dir4" },
      { speaker: "Tourist", italian: "Grazie mille!", english: "Thank you very much!", audio: "dir5" },
      { speaker: "Local", italian: "Di nulla. Buon viaggio!", english: "You're welcome. Have a good trip!", audio: "dir6" }
    ]
  }
};

const practiceQuestions = {
  "multiple-choice": [
    {
      question: "What does 'Ciao' mean?",
      options: ["Goodbye", "Hello", "Both", "Thank you"],
      correct: 2,
      explanation: "'Ciao' means both 'hello' and 'goodbye' in Italian."
    },
    {
      question: "How do you say 'I am' in Italian?",
      options: ["io sono", "tu sei", "lui è", "noi siamo"],
      correct: 0,
      explanation: "The first person singular of 'to be' (essere) is 'io sono'."
    },
    {
      question: "Which is the correct feminine form of the definite article for singular nouns?",
      options: ["il", "la", "i", "le"],
      correct: 1,
      explanation: "'La' is the feminine singular definite article in Italian."
    }
  ],
  "fill-blanks": [
    {
      question: "Mi ___ Marco.",
      options: ["chiamo", "chiami", "chiama"],
      correct: 0,
      explanation: "The correct form is 'Mi chiamo Marco' (My name is Marco)."
    },
    {
      question: "___ un caffè, per favore.",
      options: ["Prendo", "Prendi", "Prende"],
      correct: 0,
      explanation: "The correct form is 'Prendo un caffè, per favore' (I'll have a coffee, please)."
    }
  ]
};