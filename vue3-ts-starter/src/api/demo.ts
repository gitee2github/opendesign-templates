import { request } from '@/shared/axios';
import type { AxiosResponse } from '@/shared/axios';

/**
 * 获取授权的相关回调链接
 */
export function queryCourse() {
  const url = '/courses/course-list.json';

  return request.get(url, { global: true }).then((res: AxiosResponse) => res.data);
}
