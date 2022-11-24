import Form from "./components/Form";
import Comments from "./components/Comments";

export default function Guestbook() {
    return (
        <section>
            <header className="mb-6">
                <h2 className="text-3xl font-bold sm:text-4xl">All Entries</h2>
            </header>
            <Form />
            <Comments />
        </section>
    );
}
