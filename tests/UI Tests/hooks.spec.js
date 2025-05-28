import { test, expect } from '@playwright/test';



test.afterAll(() => {

    console.log("After All test");
});

test.beforeEach(() => {

    console.log("Before each test");
});


test.beforeAll(() => {

    console.log("Before All test");
});


test.afterEach(() => {

    console.log("After each test");
});

test.describe.skip("Group 1 ", () => {

    test("Test1 ", async () => {

        console.log("Test1")

    })



    test("Test2 ", async () => {

        console.log("Test2")

    })

})




test.describe("Group 2 ", () => {

    test("Test3 ", async () => {

        test.fixme()

        console.log("Test3")

    })

    test("Test4 ", async () => {

        //test.slow() // triple your test timeout 

        test.fail()

        console.log("Test4")

    })

})


