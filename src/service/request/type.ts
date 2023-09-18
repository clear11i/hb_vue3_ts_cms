import type {
  CreateAxiosDefaults,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

export interface AxiosDefaults extends CreateAxiosDefaults {
  interceptors?: {
    requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (res: AxiosResponse) => AxiosResponse
    responseFailureFn?: (err: any) => any
  }
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: {
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (res: T) => T
    responseFailureFn?: (err: any) => any
  }
}
