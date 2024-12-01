
async function day1Solution1(){
    const data = await Deno.readTextFile("./input.txt");
    const lines = data.split("\n");
    const firstList = [];
    const secondList = [];
    let totalDistance = 0;
    for(const line of lines){
        const [firstListItem, secondListItem] = line.split("   ");
        firstList.push(parseInt(firstListItem, 10));
        secondList.push(parseInt(secondListItem, 10));
    }
    firstList.sort();
    secondList.sort();
    for(let i = 0; i < firstList.length; i++){
        totalDistance += Math.abs(firstList[i] - secondList[i]);
    }
    console.log(totalDistance);
}

async function day1Solution2(){
    const data = await Deno.readTextFile("./input.txt");
    const lines = data.split("\n");
    const firstList = [];
    const secondList: { [key: number]: number } = {};
    let similarityTotal = 0;
    for(const line of lines){
        const [firstListItem, secondListItem] = line.split("   ");
        firstList.push(parseInt(firstListItem, 10));
        secondList[parseInt(secondListItem, 10)] = secondList[parseInt(secondListItem, 10)] ? secondList[parseInt(secondListItem, 10)] + 1 : 1;
    }
    for(const item of firstList){
        similarityTotal += secondList[item] ? item * secondList[item] : 0;
    }
    console.log(similarityTotal);
}

await day1Solution1();
await day1Solution2();