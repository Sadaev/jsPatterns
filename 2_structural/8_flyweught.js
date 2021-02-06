class Car {
    constructor(model, price) {
        this.modal = model,
        this.price = price
    }
}

class CarFactory {
    constructor(){
        this.cars = []
    }
    
    create(model, price) {
        const candidate = this.getCar(model)
        if(candidate){
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model){
        return this.cars.find(car => car.modal === model)
    }
}

const facory = new CarFactory()
const bmwx6 = facory.create('bmw', 10000)
const audi = facory.create('audi', 12000)
const bmwx3 = facory.create('bmw', 8000)

console.log(bmwx3 === bmwx6)