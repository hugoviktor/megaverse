import {HttpClient} from './http-client.js';
import {AxiosRequestConfig} from "axios";
import {Soloon} from "../domain/models/soloon.js";
import {Cometh} from "../domain/models/cometh.js";
export class MegaverseHttpClient extends HttpClient {

    private candidateId: string;

    public constructor(baseUrl: string, candidateId: string) {
        super(baseUrl);
        this.candidateId = candidateId;
        this._initializeRequestInterceptor();
    }

    public putPolyanet = (row: number, column: number) => {
        return this.instance.post('/polyanets', {row, column})
    }

    public putSoloon = (soloon: Soloon) => {
        return this.instance.post('/soloons', soloon)
    }

    public putCometh = (cometh: Cometh) => {
        return this.instance.post('/comeths', cometh)
    }

    public deletePolyanet = (row: number, column: number) => {
        return this.instance.delete('/polyanets', {data: {row, column}})
    }

    public getMap = () => {
        return this.instance.get(`/map/${this.candidateId}`)
    }

    public getGoalMap = () => {
        return this.instance.get(`/map/${this.candidateId}/goal`)
    }

    private _initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(
            this._handleRequest,
            this._handleError,
        );
    };

    private _handleRequest = (config: AxiosRequestConfig) => {
        //inject candidateId
        if(config.data){
            config.data.candidateId = this.candidateId;
        }
        return config;
    };

}