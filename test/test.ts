import { JsonIgnore } from "../src/index";

class TestSubClass {
    @JsonIgnore
    subValue0: string;

    subValue1: string;

    @JsonIgnore
    subValue2: string;

    subValue3: string;

    @JsonIgnore
    subValue4: string;

    subValue5: string;

    testSubFunc0(): string {
        return this.subValue0;
    }

    testSubFunc1(v0: string, v1: string): string {
        return v0 + v1;
    }

    toString(): string {
        return this.subValue4;
    }
}

class TestClass {

    value0: string;

    @JsonIgnore
    value1: string;

    value2: TestSubClass;

    value3: string;

    @JsonIgnore
    value4: TestSubClass;

    testFunc0(): string {
        return this.value1;
    }
}

const jo = new TestClass();
jo.value0 = 'v0';
jo.value1 = 'v1';

jo.value2 = new TestSubClass();
jo.value2.subValue0 = 'sv0';
jo.value2.subValue1 = 'sv1';
jo.value2.subValue2 = 'sv2';
jo.value2.subValue3 = 'sv3';
jo.value2.subValue4 = 'sv4';
jo.value2.subValue5 = 'sv5';


jo.value3 = 'v3';

jo.value4 = new TestSubClass();
jo.value4.subValue0 = 'sv0';
jo.value4.subValue1 = 'sv1';
jo.value4.subValue2 = 'sv2';
jo.value4.subValue3 = 'sv3';
jo.value4.subValue4 = 'sv4';
jo.value4.subValue5 = 'sv5';

console.log(JSON.stringify(jo));