export class Attribute{
    readonly name;
    private _base: number;
    private _max: number;
    private _skilled: number = 0;
    private _subscribers = new Array();

    constructor(name: String) {
        this.name = name;
    }

    get base(): number {
        return this._base
    }

    set base(base: number) {
        this._base = base;
    }

    get max(): number {
        return this._max
    }

    set max(max: number) {
        this._max = max;
    }

    get skilled(): number {
        return this._skilled;
    }

    set skilled(skilled: number) {
        if(skilled<0){
            skilled = 0;
        }
        this._skilled = skilled;
        this.notifySubscribers();
    }

    get effective(): number {
        return this._base + this._skilled;
    }

    private notifySubscribers() {
        this._subscribers.forEach(element => {
            element();
        });
    }

    subscribeValueChange(subscriber) {
        this._subscribers.push(subscriber);
    }
}