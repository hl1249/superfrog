/**
 * 请求统一管理
 */
import Request from '../utils/http';

/* Common */
export const login = data => Request.post('/index/hello', data);