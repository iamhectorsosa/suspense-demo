import Motion from "#/components/Motion";
import delay from "#/lib/delay";
import Card from "../components/Card";

export default async function CheckoutPage() {
    await delay(2000);
    return (
        <Motion>
            <section>
                <div className="space-y-4">
                    <h1 className="text-xl font-bold lg:text-2xl">Catalog</h1>
                    <div className="grid grid-cols-3 gap-3">
                        <Card color={"bg-emerald-400 dark:bg-emerald-700"} />
                        <Card color={"bg-emerald-400 dark:bg-emerald-700"} />
                        <Card color={"bg-emerald-400 dark:bg-emerald-700"} />
                        <Card color={"bg-emerald-400 dark:bg-emerald-700"} />
                        <Card color={"bg-emerald-400 dark:bg-emerald-700"} />
                        <Card color={"bg-emerald-400 dark:bg-emerald-700"} />
                        <Card color={"bg-emerald-400 dark:bg-emerald-700"} />
                        <Card color={"bg-emerald-400 dark:bg-emerald-700"} />
                    </div>
                </div>
            </section>
        </Motion>
    );
}
