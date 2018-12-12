export class Location {
    street1: string = '';
    state: string = '';
    postal: number = null;
    country: string = '';
    events: Array<string> = [];
}

export class Event {
    date: string = '';
    location: string = '';
}

export class Name {
    first: string = '';
    last: string = '';
    person: string = '';
}

export class Date {
    month: number = null;
    day: number = null;
    year: number = null;
    people: Object = {
        deaths: [],
        births: []
    }
    callings: Object = {
        starts: [],
        ends: []
    }
}

export class Country {
    name: string = '';
    history: string = '';
    year: Array<string> = [];
}

export class Year {
    population: number = null;
    membership: number = null;
    branches: Object = {
        wards: null,
        missions: null
    }
    missions: number = null;
    stake: number = null;
}

export class Person {
    name: string = '';
    birth: Event = new Event();
    death: Event = new Event();
    photo: string = '';
    bio: string = '';
    callings: Array<string> = [];
}

export class Calling {
    name: string = '';
    start: number = null;
    end: number = null;
    people: Array<string> = [''];
    emeritus: boolean = null;
}