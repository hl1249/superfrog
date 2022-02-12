/**
 * 请求统一管理
 */
import Request from '../utils/http';

/* Common */
export const login = data => Request.post('/index/hello', data);

export const get_code = data => Request.get('/mail/get_code', data);

export const verification = data => Request.get('/mail/verification', data);