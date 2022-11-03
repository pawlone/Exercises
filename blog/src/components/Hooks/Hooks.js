import useSWR from "swr";

const useRest = (url, fetcher) => {
    const {data: resultData, error} = useSWR(url, fetcher);

    return {
        resultData: resultData,
        isLoading: !resultData && !error,
        error: error
    };
};
export {useRest};