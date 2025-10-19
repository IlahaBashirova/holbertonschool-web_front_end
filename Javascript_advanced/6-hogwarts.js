class studentHogwarts{
    constructor(privateScore, name) {
        this.privateScore = 0;
        this.name = null;
    }
    #changeScoreBy(points) {
        this.privateScore += points;
    }
    setName(newName) {
        this.name = newName;
        return this.name; 
    }
    rewardStudent() {
        this.#changeScoreBy(1);
    }
    penalizeStudent() {
        this.#changeScoreBy(-1);
    }
    getScore() {
        return `${this.name}: ${this.privateScore}`;
    }
}
let Harry = new studentHogwarts();
Harry.setName("Harry");
Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();
console.log(Harry.getScore());

let Draco = new studentHogwarts();
Draco.setname("Draco");
Draco.rewardStudent();
Draco.penalizeStudent();
Draco.penalizeStudent();
Draco.penalizeStudent();
console.log(Draco.getScore());