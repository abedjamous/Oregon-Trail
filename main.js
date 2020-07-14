class Traveler {
    constructor (name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
        }


        hunt() {
            this.food += 2;
        }

        eat() {
            this.food -= 1;
            if(this.food < 1) {
                this.isHealthy = false;
            }

        }
    
}



class Wagon {
    constructor (capacity) {
        this.capacity = capacity;
        this.passengers = [];

    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(Traveler) {
        if(this.getAvailableSeatCount() > 0) {
             return this.passengers.push(Traveler)
        }

    }

    shouldQuarantine() {
        return this.passengers.some(passenger => passenger.isHealthy === false)
    }

    totalFood() {
        return this.passengers.reduce(passenger => passenger.food)
    }
}

