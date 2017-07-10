export default {
    calculate(count) {
        if (!count) {
            count = 0;
        }
        count = parseInt(count);
        const right = count % 10;
        const left = count - right;
        const hands = {
            right: {},
            left: {}
        };

        if (right >= 5) {
            hands.right.big = true;
        } else {
            hands.right.big = false;
        }

        if (left >= 50) {
            hands.left.big = true;
        } else {
            hands.left.big = false;
        }

        hands.left.count = left;
        hands.right.count = right;
        return hands;
    }
}