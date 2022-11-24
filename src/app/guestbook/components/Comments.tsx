"use client";

import { FormEntry } from "#/lib/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteEntryById, getEntries, getUser } from "#/lib/supabase-queries";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { BiTrash } from "react-icons/bi";
import { loadingState } from "#/lib/delay";

export default function Comments() {
    const queryClient = useQueryClient();
    const user = useQuery(["userData"], getUser);
    const entries = useQuery(["userEntries"], getEntries);

    const mutation = useMutation((id: FormEntry["id"]) => deleteEntryById(id), {
        onSuccess: () => {
            queryClient.invalidateQueries(["userEntries"]);
        },
    });

    const loadingEntries = Array.from({ length: 10 });

    const loading = loadingState ?? entries.isLoading;

    if (loading) {
        return (
            <ul className="divide-y divide-transparent py-6 text-transparent">
                {loadingEntries.map(() => (
                    <li className="space-y-1 py-4" key={nanoid()}>
                        <div className="w-fit animate-pulse rounded-md bg-slate-300 dark:bg-slate-800">
                            This is a comment loading state
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="w-fit animate-pulse rounded-md bg-slate-300 dark:bg-slate-800">
                                John Gonzales
                            </span>
                            <span>·</span>
                            <span className="w-fit animate-pulse rounded-md bg-slate-300 dark:bg-slate-800">
                                00 Jan 2000 @ 00:00 AM
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul className="divide-y divide-slate-500 py-6">
            {entries.data?.map(
                ({
                    id,
                    comment,
                    created_at,
                    created_by: {
                        raw_user_meta_data: { name, email },
                    },
                }) => (
                    <li className="space-y-1 py-4" key={nanoid()}>
                        <p> {comment}</p>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span>{name}</span>
                            <span>·</span>
                            <span>
                                {dayjs(created_at).format(
                                    "DD MMM YYYY @ HH:MM A"
                                )}
                            </span>
                            <button
                                className={
                                    email !==
                                    user.data?.raw_user_meta_data.email
                                        ? "hidden"
                                        : ""
                                }
                                onClick={() => mutation.mutate(id)}
                            >
                                <BiTrash className="h-4 w-4 hover:text-red-400" />
                            </button>
                        </div>
                    </li>
                )
            )}
        </ul>
    );
}
