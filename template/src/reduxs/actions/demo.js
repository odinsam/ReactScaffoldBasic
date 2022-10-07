/**
 * 用来定义action的type和data
 */
import { DemoAdd } from '../constant';

export const demoAddAction = (preObject) => ({
    type: DemoAdd,
    data: preObject
});
