class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.mid;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.mid = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.mid;
    }

    greater() {
        this.min = this.mid;
    }
}

module.exports = GuessingGame;
