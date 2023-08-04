import { useState } from "react";

const defaultOptions = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);

    const get = async ({ url, options={} }) => {
        const config = { ...defaultOptions, ...options, method: "GET" }
        return setResponse({ url, config });
    }

    const post = async ({ url, options }) => {
        const config = { ...defaultOptions, ...options, method: "POST" }
        return setResponse({ url, config });
    }

    const put = async ({ url, options }) => {
        const config = { ...defaultOptions, ...options, method: "PUT" }
        return setResponse({ url, config });
    }

    const del = async ({ url, options }) => {
        const config = { ...defaultOptions, ...options, method: "DELETE" }
        return setResponse({ url, config });
    }

    const setResponse = async ({ url, config }) => {
        try {
            setIsLoading(true);
            const res = await fetch(url, config);

            if (!res.ok) throw { 
                status: res.status,
                statusMessage: res.statusMessage
            }

            const json = await res.json();

            return {
                status: json.status || res.status,
                statusMessage:  res.statusMessage || "ok",
                error: false,
                data: json.data
            }
        } catch (error) {
            console.log(error)
            return {
                status: error.status,
                statusMessage:  error.statusMessage || "Internal Server Error",
                error: true,
                data: null
            }
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        get,
        post,
        put,
        del
    }
}