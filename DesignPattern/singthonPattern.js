console.log('=============>Practive sington pattern')
class SingtonEx {
    constructor(){

    }
    log(){
        console.log('==>>>>>>r>>>>> call func log not ..')
    }
    static getInstance (){
        return new SingtonEx()
    }
}
SingtonEx.getInstance().log()
console.log('================>end <=====================')