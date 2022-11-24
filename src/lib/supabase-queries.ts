import supabase from "#/lib/supabase-client";
import { Profile, Entry, FormEntry } from "./types";

export async function getUser() {
    const {
        data: { session },
        error: sessionError,
    } = await supabase.auth.getSession();
    if (sessionError) {
        throw new Error(sessionError.message);
    }
    if (session) {
        const {
            data: { user },
        } = await supabase.auth.getUser();
        const { data, error } = await supabase
            .from("profile")
            .select<any, Profile>(`id, email, raw_user_meta_data`)
            .eq("id", user?.id)
            .limit(1)
            .single();
        if (error) {
            throw new Error(error.message);
        }
        return data ?? null;
    } else {
        return null;
    }
}

export async function getEntries() {
    const { data, error } = await supabase
        .from("entry")
        .select<any, Entry>(
            `
            id, 
            created_at, 
            created_by: profile ( raw_user_meta_data ), 
            comment
            )`
        )
        .order("created_at", { ascending: false })
        .limit(10);
    if (error) {
        throw new Error(error.message);
    }
    return data;
}

export async function createEntry(data: FormEntry) {
    const { error } = await supabase.from("entry").insert(data);
    if (error) {
        throw new Error(error.message);
    }
}

export async function deleteEntryById(id: FormEntry["id"]) {
    const { error } = await supabase.from("entry").delete().eq("id", id);
    if (error) {
        throw new Error(error.message);
    }
}
