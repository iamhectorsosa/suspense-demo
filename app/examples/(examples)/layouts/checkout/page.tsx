import Motion from "#/components/Motion";
import delay from "#/lib/delay";
import Card from "../components/Card";

export default async function CheckoutPage() {
    await delay(5000);
    return (
        <Motion>
            <section>
                <div className="space-y-4">
                    <h1 className="text-xl font-bold lg:text-2xl">Checkout</h1>
                    <div className="grid grid-cols-3 gap-3">
                        <Card color={"bg-pink-400 dark:bg-pink-700"} />
                        <Card color={"bg-pink-400 dark:bg-pink-700"} />
                        <Card color={"bg-pink-400 dark:bg-pink-700"} />
                        <Card color={"bg-pink-400 dark:bg-pink-700"} />
                        <Card color={"bg-pink-400 dark:bg-pink-700"} />
                        <Card color={"bg-pink-400 dark:bg-pink-700"} />
                        <Card color={"bg-pink-400 dark:bg-pink-700"} />
                        <Card color={"bg-pink-400 dark:bg-pink-700"} />
                    </div>
                </div>
            </section>
        </Motion>
    );
}
