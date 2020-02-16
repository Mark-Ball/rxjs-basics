import { Observable, from } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

// Observable.create((observer:any) => {
//     observer.next('Hey guys')
// }).pipe(
//     map((val:any) => val.toUpperCase()) // remember there is no . in front of the map
// ).subscribe((x:any) => addItem(x));

from([
    { first: 'Gary', last: 'Simon', age: 34 },
    { first: 'Jane', last: 'Simon', age: 34 },
    { first: 'John', last: 'Simon', age: 34 },
]).pipe(
    pluck('first')
).subscribe((name:any) => addItem(name));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
};