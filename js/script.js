// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Generazione numeri
for (var i = 1; i <= 100; i++) {
  var num = i;
  if ( (!(num % 3)) && (!(num % 5)) ) {
    // Condizione se num multiplo di 3 e 5
    num = 'FizzBuzz';
  } else if (!(num % 3)) {
    // Condizione se num multiplo di 3
    num = 'Fizz';
  }else if (!(num % 5)) {
    // Condizione se num multiplo di 5
    num = 'Buzz';
  }

  // Stampa dei numeri
  var numeri = document.getElementById('numeri');
  numeri.innerHTML += num + '<br>';
}
