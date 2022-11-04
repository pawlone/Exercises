import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => {
    return axios.get(url).then(result => result.data.data);
}

const useRest = (url) => {
    const {data: resultData, error} = useSWR(url, fetcher);

    return {
        resultData: resultData,
        isLoading: !resultData && !error,
        error: error
    };
};
export {useRest};