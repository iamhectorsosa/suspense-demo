// Changen from null to true
export const loadingState = null;

// Add time to setTimeout function
export default function delay(promise: Promise<any>) {
    if (loadingState) {
        return new Promise((resolve) => {
            setTimeout(resolve, 3000);
        }).then(() => promise);
    } else {
        return promise;
    }
}
