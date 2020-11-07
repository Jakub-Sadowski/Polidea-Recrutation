import axios from 'axios';

export const API_URL = 'https://api.github.com/';
export const GRAPHQL_URL = 'https://api.github.com/graphql';
export const API_TIMEOUT = 9000;
const token = 'aef44afd8659da765be8caa19099f01871813647';
const axiosInstance = (baseURL: string = API_URL, timeout: number = API_TIMEOUT) =>
    axios.create({
        baseURL,
        timeout,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

export interface UseFetchDataProps {
    path: string;
    headers?: unknown;
    config?: unknown;
    data?: unknown;
    baseURL?: string;
    timeout?: number;
}

export const fetchData = async <T>({ path, baseURL, timeout }: UseFetchDataProps): Promise<T> => {
    const response = await axiosInstance(baseURL, timeout).get<T>(path);
    return response.data;
};

export const postData = async <T>({ path, baseURL, timeout, data }: UseFetchDataProps): Promise<T> => {
    const response = await axiosInstance(baseURL, timeout).post<T>(path, data);
    return response.data;
};

export const getBody = (id: string, first: number) => {
    const value = `first:${first}`;
    return {
        query: `query{
                            node(id:"${id}"){
                                ... on User {
                                    id
                                    bio
                                    login
                                    avatarUrl
                                    gists(${value}){
                                        edges{
                                            node{
                                                id,
                                                name,
                                                description
                                            }
                                        }
                                    }
                                    followers(${value}){
                                        edges{
                                            node{
                                                login
                                                id
                                                avatarUrl
                                            }
                                        }
                                    }
                                    repositories(${value}){
                                        edges{
                                            node{
                                                description
                                                id
                                                name
                                                }
                                            }
                                        }

                                    }
                                    }     
                                }`,
    };
};

export const getRepoQuery = (id: string) => {
    return {
        query: `query{
                            node(id:"${id}"){
                                ... on Repository {
                                    id
                                    name
                                    description
                                    owner{
                                        id
                                        login
                                    }
                                    }     
                                }}`,
    };
};
