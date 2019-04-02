// observer pattern
class ObserverPattern {
    observer  = []
    push(ob){
        this.observer.push(ob)
    }    
    
}
class Observer {
    notifi() {
        console.log('notification !!!!!!!!!!!!!!!')
    }
}
const obPattern = new ObserverPattern()
const ob1 = new Observer()
const ob2 = new Observer()
const ob3 = new Observer()
const ob5 = new Observer()
const ob6 = new Observer()

