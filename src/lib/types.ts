export interface NavLink {
    label: string;
    icon: JSX.Element;
    href: string;
}

export interface PostType {
    _id: string;
    slug: string;
    title: string;
    description: string;
    readingTime: number;
    publishedAt: string;
    body: string;
    imageUrl: string;
}

export interface Profile {
    id: string;
    created_at: string;
    email: string;
    raw_user_meta_data: {
        avatar_url: string;
        email: string;
        email_verified: boolean;
        full_name: string;
        iss: string;
        name: string;
        preferred_username: string;
        provider_id: string;
        sub: string;
        user_name: string;
    };
}

export interface Entry {
    id: string;
    created_at: string;
    created_by: Profile;
    comment: string;
}

export type FormEntry = Omit<Entry, "created_by"> & { created_by: string };
