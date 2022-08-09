function ticketPrice(ticketQuantity) {
    const fst100Rate = 100;
    const scnd100Rate = 90;
    const restRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * fst100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const fst100Price = 100 * fst100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * scnd100Rate;
        const totakPrice = fst100Price + restTicketPrice;
        return totakPrice;
    }
    else {
        const fst100Price = 100 * fst100Rate;
        const scnd100Price = 100 * scnd100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restRate;
        const totakPrice = fst100Price + scnd100Price + restTicketPrice;
        return totakPrice;
    }

}

const expense = ticketPrice(350);
console.log(expense);