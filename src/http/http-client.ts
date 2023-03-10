import axios, {AxiosInstance, AxiosResponse} from 'axios';



export abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        });

        this._initializeResponseInterceptor();
    }

    private _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError,
        );
    };

    private _handleResponse = ({data}: AxiosResponse) => {
        return data};

    protected _handleError = (error: any) => {
        return Promise.reject(error)
    };
}