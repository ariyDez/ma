export default {
    make(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
        // return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    makeOnlyDecimal(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num - num  % 10;
    },
    makeSpecial(min, max, type, numbers) {
        let number;
        switch(type) {
            case 0:
                number = this.makePositive(min, max, numbers);
                break;
            case 1:
                number = this.makeNegative(min, max, numbers);
                break;
            case 2:
                number = this.makeMixed(min, max, numbers);
                break;
        }
        return number;
    },
    makeSpecialCeil(min, max, type, numbers) {
        let number;
        switch(type) {
            case 0:
                number = this.makeSpecialCeilPositive(min, max, numbers);
                break;
            case 1:
                number = this.makeSpecialCeilNegative(min, max, numbers);
                break;
            case 2:
                number = this.makeSpecialCeilMixed(min, max, numbers);
                break;
        }
        return number;
    },
    makeSpecialFloor(min, max, type, numbers) {
        let number;
        switch(type) {
            case 0:
                number = this.makeSpecialFloorPositive(min, max, numbers);
                break;
            case 1:
                number = this.makeSpecialFloorNegative(min, max, numbers);
                break;
            case 2:
                number = this.makeSpecialFloorMixed(min, max, numbers);
                break;
        }
        return number;
    },
    makeSpecialCeilPositive(min, max, numbers) {
        if(max === 1) {
            min = 1;
            max = 9;

            let number = 0;
            while(!numbers.includes(number)) {
                console.log('number', number);
                console.log('min', min);
                console.log('max', max);
                number = this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max));
            }
            return number;
        }
        let number = 0;
        while(!numbers.includes(number)) {
            console.log('number', number);
            console.log('min', min);
            console.log('max', max);
            number = this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max));
        }
        return number;
    },
    makeSpecialFloorPositive(min, max, numbers) {
        let number = 0;
        while(!numbers.includes(number)) {
            number = this.make(Math.pow(10, min - 1), (9 + (1 - Math.pow(0.1, max - 1))) * Math.pow(10, max - 1));
        }
        return number;
    },
    makeSpecialCeilNegative(min, max, numbers) {
        let number = 0;
        while(!numbers.includes(number)) {
            number = this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max));
        }
        return -number;
    },
    makeSpecialFloorNegative(min, max, numbers) {
        let number = 0;
        while(!numbers.includes(number)) {
            number =  this.make(Math.pow(10, min - 1), (9 + (1 - Math.pow(0.1, max - 1))) * Math.pow(10, max - 1));
        }
        return -number;
    },
    makeSpecialFloorMixed(min, max, numbers) {
        let number = 0;
        while(!numbers.includes(number)) {
            number =  this.make(Math.pow(10, min - 1), (9 + (1 - Math.pow(0.1, max - 1))) * Math.pow(10, max - 1));
        }
        const luck = Random.make(0, 1);
        if (luck) {
            return number;
        }
        return -number;
    },
    makeSpecialCeilMixed(min, max, numbers) {
        let number = 0;
        while(!numbers.includes(number)) {
            number =  this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max))
        }
        const luck = Random.make(0, 1);
        if (luck) {
            return number;
        }
        return -number;
    },
    makePositive(min, max, numbers) {
        let number = 0;
        if(max === 1) {
            min = 1;
            max = 9;

            while (!numbers.includes(`${number}`)) {
                console.log('positive numbers', numbers);
                console.log('number', number);
                number = this.make(min, max);
            }
            return number;
        }
        number = this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max));
        return number;
    },
    makeNegative(min, max, numbers) {
        let number = 0;
        if(max === 1) {
            min = 1;
            max = 9;

            while (!numbers.includes(`${number}`)) {
                console.log('positive numbers', numbers);
                console.log('number', number);
                number = this.make(min, max);
            }
            return number;
        }
        number = this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max));
        return -number;
    },
    makeMixed(min, max, numbers) {
        let number = 0;
        if(max === 1) {
            min = 1;
            max = 9;

            while (!numbers.includes(`${number}`)) {
                console.log('positive numbers', numbers);
                console.log('number', number);
                number = this.make(min, max);
            }
            return number;
        }
        number = this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max));
        const luck = Random.make(0, 1);
        if (luck) {
            return number;
        }
        return -number;
    }
    // makeWithFilter(min, max, filter) {
    //     const num = Math.floor(Math.random() * (max - min + 1)) + min;
    //     if (filter.indexOf(num) === -1) {
    //         this.makeWithFilter(min, max, filter);
    //     }
    //     return num;
    // }
}