import { mount } from '@vue/test-utils';
import Home from '../views/Home';

    test('it works', () => {
        expect(1 + 1).toBe(2)
    })

    test('should mount without crashing', () => {
        const wrapper = mount(Home)

        expect(wrapper).toMatchSnapshot()
    })
