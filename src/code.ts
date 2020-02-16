import { Observable } from 'rxjs';

// observable create accepts 1 argument, which is the subscribe function
// subscribe function accepts observer argument
const observable = Observable.create((observer: any) => {
    observer.next('Hello there')
});

observable.subscribe((x: any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}