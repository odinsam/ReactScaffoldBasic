import { DemoAdd } from '../constant';
const demoInit = [
    {
        id: 1,
        name: 'odinsam',
        age: 20
    }
];
export function DemoReducers(preState = demoInit, action) {
    const { type, data } = action;
    switch (type) {
        case DemoAdd:
            return [data, ...preState];
        default:
            return preState;
    }
}
