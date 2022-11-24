"use client";

import { FormEntry } from "#/lib/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authStateChange, signIn, signOut } from "#/lib/supabase-auth";
import { getUser, createEntry } from "#/lib/supabase-queries";
import { FiGithub, FiCornerDownLeft } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { loadingState } from "#/lib/delay";
import toast from "react-hot-toast";

function customToast(message: string, success: boolean) {
    return toast.custom(
        () => (
            <span
                className={`flex items-center gap-2 rounded-md border border-slate-500 bg-slate-100 py-4 px-8 text-slate-800 shadow transition-colors dark:bg-slate-900 dark:text-slate-100 ${
                    !success ? "border-red-500 text-red-500" : ""
                }`}
            >
                {message}
            </span>
        ),
        {
            duration: 100000,
        }
    );
}

export default function Form() {
    const { register, handleSubmit, reset } = useForm<FormEntry>();

    const queryClient = useQueryClient();
    const user = useQuery(["userData"], getUser);
    const mutation = useMutation((payload: FormEntry) => createEntry(payload), {
        onSuccess: () => {
            queryClient.invalidateQueries(["userEntries"]);
            customToast("🥳 Successfully submitted", true);
        },
        onError: () => {
            customToast("😵 Something went wrong!", false);
        },
    });

    const onSubmit: SubmitHandler<FormEntry> = async (payload) => {
        if (!user.data) return;
        const data = {
            ...payload,
            created_by: user.data.id,
        };
        mutation.mutate(data);
        reset();
    };

    authStateChange(() => queryClient.invalidateQueries(["userData"]));

    const loading = loadingState ?? user.isLoading;

    if (loading) {
        return (
            <section className="space-y-2 rounded border bg-slate-200 p-6 text-transparent shadow dark:border-slate-500 dark:bg-transparent">
                <header>
                    <h2 className="w-fit animate-pulse rounded-md bg-slate-300 text-lg font-semibold dark:bg-slate-800">
                        Sign in to leave a comment
                    </h2>
                </header>
                <div className="space-y-2">
                    <div className="h-[86px] w-full animate-pulse rounded-md bg-slate-300 dark:bg-slate-800" />
                    <div className="flex justify-end gap-2">
                        <button
                            disabled
                            className="flex animate-pulse items-center gap-2 rounded border border-transparent bg-slate-300 py-1 px-3 dark:bg-slate-800"
                        >
                            <FiGithub />
                            Log in
                        </button>
                        <button
                            disabled
                            className="flex animate-pulse items-center gap-2 rounded border border-transparent bg-slate-300 py-1 px-3 dark:bg-slate-800 "
                        >
                            <FiCornerDownLeft />
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="space-y-2 rounded border bg-slate-200 p-6 shadow dark:border-slate-500 dark:bg-transparent">
            <header>
                <h2 className="text-lg font-semibold">
                    {!user.data
                        ? "Sign in to leave a comment"
                        : `Hello, ${user.data.raw_user_meta_data.full_name}`}
                </h2>
            </header>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <textarea
                    {...register("comment", { required: true })}
                    disabled={user.data ? false : true}
                    rows={2}
                    placeholder="Write your comment"
                    className="w-full rounded-md border-slate-500 bg-slate-100 p-4 shadow-sm disabled:opacity-20 dark:bg-slate-800"
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={user.data ? signOut : signIn}
                        className="flex items-center gap-2 rounded border border-slate-500 py-1 px-3 hover:text-slate-600 dark:hover:text-slate-300"
                    >
                        <FiGithub />
                        {user.data ? "Log out" : "Log in"}
                    </button>
                    <button
                        disabled={user.data ? false : true}
                        type="submit"
                        className="flex items-center gap-2 rounded border border-slate-500 py-1 px-3 hover:text-slate-600 disabled:opacity-20 dark:hover:text-slate-300"
                    >
                        <FiCornerDownLeft />
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
