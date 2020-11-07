export interface ContributorModel {
    login: string;
    id?: number;
    node_id: string;
    avatar_url: string;
    gravatar_id?: string;
    url?: string;
    html_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    starred_url?: string;
    subscriptions_url?: string;
    organizations_url?: string;
    repos_url?: string;
    events_url?: string;
    received_events_url?: string;
    type?: string;
    site_admin?: boolean;
    contributions?: number;
    followers?: FollowerModel[];
    followersCount?: number;
    repositories?: RepositoryModel[];
    repositoriesCount?: number;
    gists?: RepositoryModel[];
    gistsCount?: number;
    bio?: string;
}

export interface FollowerModel {
    node: {
        login: string;
        id: string;
        avatarUrl: string;
    };
}
export interface RepositoryModel {
    node: {
        name: string;
        id: string;
        description: string;
        owner?: {
            id: string;
            login: string;
        };
        followers?: ContributorModel[];
    };
}
