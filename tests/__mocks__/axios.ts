import {AxiosError, AxiosResponse} from "axios";

const mockAxios = jest.genMockFromModule('axios')

// this is the key to fix the axios.create() undefined error!
// @ts-ignore
mockAxios.create = jest.fn(() => mockAxios)


/*jest.mock('axios', () => {
    return {
        interceptors: {
            request: { use: jest.fn(), eject: jest.fn() },
            response: { use: jest.fn(), eject: jest.fn() },
        },
    };
});*/

const onFullfilled = (response: AxiosResponse) => {
    // Your interceptor handling a successful response
    return response["data"]
}
const onRejected = (error: AxiosError) => {
    // Your interceptor handling a failed response
}
// @ts-ignore
mockAxios.interceptors.response.use(onFullfilled, onRejected)
export default mockAxios