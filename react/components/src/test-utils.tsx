import { ShallowWrapper } from 'enzyme';

export const findByTestId = (id: string, wrapper: ShallowWrapper): any => wrapper.find(`[data-test="${id}"]`);
