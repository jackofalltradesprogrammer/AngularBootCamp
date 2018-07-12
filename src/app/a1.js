var VegItem = /** @class */ (function () {
    function VegItem(dish) {
        this.dish = dish;
    }
    VegItem.prototype.Cook = function () {
        return "Veg " + this.dish + " cooked, ready and start eating";
    };
    return VegItem;
}());
var NonVegItem = /** @class */ (function () {
    function NonVegItem(dish) {
        this.dish = dish;
    }
    NonVegItem.prototype.Cook = function () {
        return "Non Veg " + this.dish + " cooked, ready and start eating";
    };
    return NonVegItem;
}());
var ExpertCook = /** @class */ (function () {
    function ExpertCook(item) {
        this.item = item;
    }
    ExpertCook.prototype.Prepare = function () {
        if (this.item == null)
            console.log("Dish not available, sorry");
        else
            console.log(this.item.Cook());
    };
    return ExpertCook;
}());
var order1 = new ExpertCook(new VegItem("French Fries"));
var order2 = new ExpertCook(new NonVegItem("Chicken Fries"));
order1.Prepare();
order2.Prepare();
