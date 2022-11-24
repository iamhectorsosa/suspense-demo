import supabase from "#/lib/supabase-client";

export async function signIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo:
                process.env.NODE_ENV === "development"
                    ? "http://localhost:3000/guestbook"
                    : "https://hectorsosa.me/guestbook",
        },
    });
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
}

export function authStateChange(fn: () => void) {
    return supabase.auth.onAuthStateChange(() => {
        fn();
    });
}
