import { Invoice, Payment } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

// INTERFACE FOR CLASS
const docmentOne: hasPrint = new Invoice('vinamilk', 'drink milk', 5000000);
const docmentTwo: hasPrint = new Payment('Vietnam Airlines', 'fly', 2000000);
const allDocuments: hasPrint[] = [];
allDocuments.push(docmentOne);
allDocuments.push(docmentTwo);

console.log(allDocuments);


