
interface IItem
{
    Cook():string;
}

class VegItem implements IItem
{
    private dish:string;
    constructor(dish:string){
        this.dish = dish;
    }
    public Cook(): string {
        return "Veg " + this.dish + " cooked, ready and start eating";
    }

}

class NonVegItem implements IItem
{
    private dish:string;
    constructor(dish:string){
        this.dish = dish;
    }
    public Cook(): string {
        return "Non Veg " + this.dish + " cooked, ready and start eating";
    }

}

class ExpertCook{
    item:IItem;
    constructor(item:IItem){
        this.item = item;
    }
    public Prepare(){
        if(this.item ==null)
            console.log("Dish not available, sorry");
        else
            console.log(this.item.Cook());
    }
}

var order1 = new ExpertCook(new VegItem("French Fries"));
var order2 = new ExpertCook(new NonVegItem("Chicken Fries"));
order1.Prepare();
order2.Prepare();
