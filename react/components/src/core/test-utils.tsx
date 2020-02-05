import { ShallowWrapper, ReactWrapper } from 'enzyme';

export const findByTestId = (id: string, wrapper: ShallowWrapper | ReactWrapper): any =>
    wrapper.find(`[data-test="${id}"]`);
