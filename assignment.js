//https://github.com/justshowkat/jsAssignment

// kelometer to meter converter

function kilometerToMeter(km) {
    let num = /^[0-9]+$/; // this variable will contain 0-9 numaric value, to check if enterd value is integer.

    if (km >= 0 && num) { //this (- && num) logic will ensure that value will be integer only, everything else will throw an error
        return km * 1000
    } else {
        return "Warning! That's a negetive or string value. Be positive & enter a positive value."
    }
}

// kilometerToMeter(4) //for positive value
// kilometerToMeter('u') //for char value
// kilometerToMeter(-2) //for negative value

// <<<------------------------------------------------------------||||||||||------------------------------------------------------------>>>
//budget calculator 

function budgetCalculator(watch, phone, laptop) {

    let num = /^[0-9]+$/; // this variable will contain 0-9 numaric value, to check if enterd value is integer.
    const perWatchPrice = 50;
	const perPhonePrice = 100;
    const perLaptopPrice = 500;
    
    if (Math.sign(watch) >= 1 && Math.sign(phone) >= 1 && Math.sign(laptop) >= 1 && num) {
        return (watch * perWatchPrice) + (phone * perPhonePrice) + (laptop * perLaptopPrice); // number of products multplied with their prices and then returned the total price
    }
    else {
        return "Warning! That's a negetive value or it contains character. Be positive & try all integer value.";
    }
}

// budgetCalculator(2, 'g', 2)//for character or string value
// budgetCalculator(2, 2, 2) //for positive value
// budgetCalculator(-2, -2, -2) //for negative value


// <<<------------------------------------------------------------||||||||||------------------------------------------------------------>>>
//hotel cost calculator

function hotelCost(days) {
    // Variables
	const standard = 100; //first 10 days price
	const premium = 80; //second 10 days price
    const business = 50; //price for rest of the days after first 20 days
    
    switch (true) {
        case days <= 0:
            return 'We live in 3 dimantion world, please input a positive number for days.';
            break;

        case days <= 10:
            return days * standard; //days multiplied by prices
            break;

        case days <= 20:
            return 10 * standard + (days - 10) * premium; //1st 10 days multiplied by standerd price, then to find remaining days i substract 10 days from totals number of days then multiplied it by premium price.
            break;

        case days > 20:
            return 10 * standard + 10 * premium + (days - 20) * business; //since there are more than 20 days, i multiplied 1st 10 days with standard price, last 10 days with premium price and to find the remaining days i substract 20 days from the total days and multiplied it with the business price package. 
            break;
    }
}

// hotelCost(4)
// hotelCost(14)
// hotelCost(24)

// <<<------------------------------------------------------------||||||||||------------------------------------------------------------>>>
// megaFriend finder

function megaFriend(names) {

    if (names.length != 0) {
        var longestName = names[0]; //this variable only keeps the longest name from the array
        for (let i = 0; i < names.length; i++) {
            var nameholder = names[i]; //this is just a temporary holder
            if (nameholder.length >= longestName.length) {
                longestName = nameholder;
            }
        }
        return longestName;
    }
    else {
        return 'empty array is not acceptable';
    }
}

// megaFriend(['gggama', 'lama', 'vaaavama', 'nama', 'hhhama'])

// <<<------------------------------------------------------------||||||||||------------------------------------------------------------>>>