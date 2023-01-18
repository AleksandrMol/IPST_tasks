interface task_JProp {
    [N: string]: number,
}
type Ttask_JArray = [string, number][];

export function task_J (obj: task_JProp) {
    let Arr: Ttask_JArray = Object.entries(obj);
    console.log(Arr);
    return Arr
}