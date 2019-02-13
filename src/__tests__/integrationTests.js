import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import Cart from 'components/Cart';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/users/', {
        status: 200,
        response: [
            {id: 1, name: 'user 1', company: {name: 'test'}},
            {id: 2, name: 'user 2', company: {name: 'test'}},
            {id: 3, name: 'user 3', company: {name: 'test'}}
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of cart items and display them', (done) => {
    const wrapper = mount(
        <Root>
            <Cart/>
        </Root>
    );

    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find('.cart__item').length).toEqual(3);
        done();
        wrapper.unmount();
    });
});

it('can delete a cart item on click', (done) => {
    const wrapper = mount(
        <Root>
            <Cart/>
        </Root>
    );
    moxios.wait(() => {
        wrapper.update();
        wrapper.find('button').first().simulate('click');
        wrapper.update();
        expect(wrapper.find('.cart__item').length).toEqual(2);
        done();
        wrapper.unmount();
    });

});