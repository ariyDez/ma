export default {
    make(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
        // return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    makeOnlyDecimal(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num - num  % 10;
    },
    makeSpecialCeil(min, max, type) {
        let number;
        switch(type) {
            case 0:
                number = this.makeSpecialCeilPositive(min, max);
                break;
            case 1:
                number = this.makeSpecialCeilNegative(min, max);
                break;
            case 2:
                number = this.makeSpecialCeilMixed(min, max);
                break;
        }
        return number;
    },
    makeSpecialFloor(min, max, type) {
        let number;
        switch(type) {
            case 0:
                number = this.makeSpecialFloorPositive(min, max);
                break;
            case 1:
                number = this.makeSpecialFloorNegative(min, max);
                break;
            case 2:
                number = this.makeSpecialFloorMixed(min, max);
                break;
        }
        return number;
    },
    makeSpecialCeilPositive(min, max) {
        return this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max));
    },
    makeSpecialFloorPositive(min, max) {
        return this.make(Math.pow(10, min - 1), (9 + (1 - Math.pow(0.1, max - 1))) * Math.pow(10, max - 1));
    },
    makeSpecialCeilNegative(min, max) {
        let number = this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max));
        return -number;
    },
    makeSpecialFloorNegative(min, max) {
        let number = this.make(Math.pow(10, min - 1), (9 + (1 - Math.pow(0.1, max - 1))) * Math.pow(10, max - 1))
        return -number;
    },
    makeSpecialFloorMixed(min, max) {
        let number = this.make(Math.pow(10, min - 1), (9 + (1 - Math.pow(0.1, max - 1))) * Math.pow(10, max - 1));
        const luck = Random.make(0, 1);
        if (luck) {
            return number;
        }
        return -number;
    },
    makeSpecialCeilMixed(min, max) {
        let number = this.make(Math.pow(10, min), (9 + (1 - Math.pow(0.1, max))) * Math.pow(10, max));
        const luck = Random.make(0, 1);
        if (luck) {
            return number;
        }
        return -number;
    },
    // makeWithFilter(min, max, filter) {
    //     const num = Math.floor(Math.random() * (max - min + 1)) + min;
    //     if (filter.indexOf(num) === -1) {
    //         this.makeWithFilter(min, max, filter);
    //     }
    //     return num;
    // }
}