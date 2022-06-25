import { useState, useEffect } from 'react';

/**
 * Fetching data 
 * @param url: URL of the JSON data to fetch
 * type param DataType: type of data (type param)
 * @returns An object to be destructured:
 * - data: the fetched data (type of DataType 'param')
 * - setData: setState for data
 * - isLoadingData: true if data has not been returned / no error
 * - setIsLoadingData: setState for isLoadingData
 * - isError: true if data could not be fetched
 * - setIsError: setState for isError
 * - error: The error for logging (of type Error)
 * - setError: setState for setError
 */
function useFetchData<DataType>(url: string) {
    /**
     * The data to fetch
     */
    const [data, setData] = useState<DataType | null>(null);
    /**
     * Boolean to display a message if fetch is loading
     */
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
    /**
     * Boolean to display a message there was an error retrieving data
     */
    const [isError, setIsError] = useState<boolean>(false);
    /**
     * For logging errors
     * I am not sure how to type this
     */
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('There was an error retrieving data');
                }
                return res.json();
            })
            .then(data => {
                // how do i type this? do I?
                setData(data);
                setIsLoadingData(false);
                setIsError(false);
                setError(null);
            })
            .catch(err => {
                setIsLoadingData(false);
                setIsError(true); 
                setError(err);
            })
    }, [url]);

    return {
        data, setData, isLoadingData, setIsLoadingData,
        error, setError, isError, setIsError
    }
}

export default useFetchData;