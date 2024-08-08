import { userMainTools } from "./UserMainTools";
import { compMainTools } from "./CompMainTools";

// SingularityFactory(): Singularity production.
export function SingularityFactory(atkPoint, producer){
    if (producer === 'user')
    {
        UserSingularityCalculator(atkPoint); 
    }
    else 
    {
        ComputerSingularityCalculator(atkPoint); 
    }
}

// UserSingularityCalculator(): Will convert all the attack points to singularity points for the user. 
function UserSingularityCalculator(atkPoint){
    /** |Singularity Factory Manual|
     * Attack Points => Singularity Points Conversion:
     * 0 => 0 sp
     * 1/3 => 10 sp
     * 1/2 => 20 sp
     * 2/3 => 30 sp
     * 3/4 => 50 sp
     * 1 => 80 sp
    */

    const decOne = 1/3;
    const decTwo = 2/3;

    if (atkPoint === 0)
    {
        userMainTools.singularityPoints += 0;
    }
    else if (atkPoint === Number(decOne.toFixed(1)))
    {
        userMainTools.singularityPoints += 10; 
    }
    else if (atkPoint === 1/2)
    {
        userMainTools.singularityPoints += 20;
    }
    else if (atkPoint === Number(decTwo.toFixed(1)))
    {
        userMainTools.singularityPoints += 30;
    }
    else if (atkPoint === 3/4)
    {
        userMainTools.singularityPoints += 50;
    }
    else if (atkPoint === 1)
    {
        userMainTools.singularityPoints += 80;
    }
}

// ComputerSingularityCalculator(): Will convert all the attack points to singularity points for the computer. 
function ComputerSingularityCalculator(atkPoint){
    const decOne = 1/3;
    const decTwo = 2/3;

    if (atkPoint === 0)
    {
        compMainTools.singularityPoints += 0;
    }
    else if (atkPoint === Number(decOne.toFixed(1)))
    {
        compMainTools.singularityPoints += 10; 
    }
    else if (atkPoint === 1/2)
    {
        compMainTools.singularityPoints += 20;
    }
    else if (atkPoint === Number(decTwo.toFixed(1)))
    {
        compMainTools.singularityPoints += 30;
    }
    else if (atkPoint === 3/4)
    {
        compMainTools.singularityPoints += 50;
    }
    else if (atkPoint === 1)
    {
        compMainTools.singularityPoints += 80;
    }
}