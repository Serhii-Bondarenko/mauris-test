import { axiosService } from './axios.service';

import { urls } from '../config';

export const appService = {
    getAll: (date) => axiosService.get(urls.schedule, {
        params: {
            date,
            country: 'US'
        }
    }).then(response => response.data)
}