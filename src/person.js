export default class Person {
    constructor({id, vehicles, kmTraveled, from, to}){
        this.id = id
        this.vehicles = vehicles
        this.kmTraveled = kmTraveled
        this.from = from
        this.to = to
    }

    formatted(language) {
        const mapDate = (date) => {
            const [year, month, day] = date.split('-').map(Number) 
            return new Date(year, (month - 1), day)
        }

        const capitalize = (str) => {
            const date = str.split(' ') 
            date[2] = date[2][0].toUpperCase() + date[2].slice(1) // Capitalize first letter of month in pt-Br format
            return date.join(' ')
        }

        const formattedFrom =  new Intl.DateTimeFormat(language, {month: "long", day: "2-digit", year: "numeric"}).format(mapDate(this.from))
        const formattedTo = new Intl.DateTimeFormat(language, {month: "long", day: "2-digit", year: "numeric"}).format(mapDate(this.to))

        return {
            id: Number(this.id),
            vehicles: new Intl.ListFormat(language, {style: "long", type: "conjunction"}).format(this.vehicles),
            kmTraveled: new Intl.NumberFormat(language, {style: "unit", unit: "kilometer"}).format(this.kmTraveled),
            from: capitalize(formattedFrom),
            to: capitalize(formattedTo)
        }
    }
}