import { categories } from "#/lib/config";
import { timeout } from "#/lib/delay";
import Card from "./components/Card";

export default async function Page({
    params: { category },
}: {
    params: { category: string };
}) {
    const { label: name } = categories.filter((c) => c.href === category)[0];
    await timeout(2000);
    return (
        <section>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold lg:text-3xl">{name}</h1>
                <div className="grid grid-cols-3 gap-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}
