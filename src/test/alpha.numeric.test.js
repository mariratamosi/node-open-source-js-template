import {expect} from 'chai';
import {getAlphaNumericValue} from '../main/app';

describe("random generator test suite", () => {
    it("generating alpha numeric random value", () => {
        const randomAlphaNumericValue = getAlphaNumericValue(15);
        console.log(randomAlphaNumericValue);
        expect(randomAlphaNumericValue.length).to.equal(15);
    });
});