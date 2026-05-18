import { useQuery } from "@tanstack/react-query";


const requestPosts = async (page, size) => {
    const postsJosn = localStorage.getItem("posts");
    const posts = !!postsJosn ? JSON.parse(postsJosn) : [];
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const filteredPosts = posts.slice(startIndex, endIndex);
    return filteredPosts;
}

export function usePosts(page, size) {

    return useQuery({
        queryKey: ["posts", page, size],
        queryFn: async () => {
            return await requestPosts(page, size);
        }
    });
}