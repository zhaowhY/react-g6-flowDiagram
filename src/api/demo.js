import getRequestInstance from '@/utils/getRequestInstance';
import { domains } from '@/config';

const demo = getRequestInstance(domains.base);

export const getObject = () => demo.get('/mock/users/1');
export const getArray = () => demo.get('/mock/users');
