const DoublyLinkedList = require('./DoublyLinkedList');

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.printList();
console.log(subway);