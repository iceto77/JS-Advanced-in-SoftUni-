function solve(worker){
    if(this.dizziness){
        let requiredAmount = 0.1 * this.weight * this.experience;
        this.levelOfHydrated += requiredAmount;
        this.dizziness = false;
    }
    return worker;
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });