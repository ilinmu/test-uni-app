import {
	get,
} from '@/utils/request';
export const queryLogin = (params) => get('/company/queryLogin', params);
