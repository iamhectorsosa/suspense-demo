// Add time to setTimeout function
export default function delay(promise: Promise<any>, time: number) {
    if (time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        }).then(() => promise);
    } else {
        return promise;
    }
}

export async function timeout(time: number) {
    await new Promise((resolve) => setTimeout(resolve, time));
}
