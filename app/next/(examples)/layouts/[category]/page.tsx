import { categories } from "#/lib/config";
import delay from "#/lib/delay";
import Card from "./components/Card";

export default async function CategoryPage({
    params: { category },
}: {
    params: { category: string };
}) {
    const { label: name } = categories.filter((c) => c.href === category)[0];
    await delay(2000);
    return (
        <section>
            <div className="space-y-4">
                <h1 className="text-xl font-bold lg:text-2xl">{name}</h1>
                <div className="grid grid-cols-3 gap-3">
                    <Card />
                    <Card />
                    <Card />
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
