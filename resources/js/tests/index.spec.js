import { mount } from '@vue/test-utils';
import Elections from '../views/Elections';


    describe('Elections', () => {

        test('Elections page election data', () => {

            wrapper = mount(Elections)

            wrapper.setData({ elections: {
                elecion_name: 'New election',
                elecion_date: '2021-04-29',
            }})


            expect(wrapper.html()).toContain('New election')
            expect(wrapper.html()).toContain('2021-04-29')
        });
    });
