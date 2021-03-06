import {expect} from 'chai';
import {sayHello} from '../main/app';

describe("sample test suite", () => {
    it("sample test case", () => {
        expect(sayHello()).to.equal('Shipday Dispatch Application');
    });
});
