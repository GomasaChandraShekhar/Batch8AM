import { test } from '@playwright/test';

// Smoke, Stage, Prod, Regression

// test.describe.configure({ mode: 'default' });
test.describe("GroupA", { tag: ['@Smoke', '@Regression'] }, async () => {

    test("Test01", async () => {
        console.log("Test01");
    });

    test("Test03", async () => {
        console.log("Test03");
    });

    test("Test04", async () => {
        console.log("Test04");
    });

    test("Test02", async () => {
        console.log("Test02");
    });

    test("Test05", async () => {
        console.log("Test05");
    });

});

/*
test.describe("GroupB", { tag: '@Regression' }, async () => {

    test("Test04", async () => {
        console.log("Test04");
    });

    test("Test02", async () => {
        console.log("Test02");
    });

});

test.describe("GroupC", { tag: ['@Regression', '@Smoke'] }, async () => {

    test("Test04", async () => {
        console.log("Test04");
    });

    test("Test02", async () => {
        console.log("Test02");
    });

});

test.describe("GroupD", { tag: '@Prod' }, async () => {

    test("Test04", async () => {
        console.log("Test04");
    });

    test("Test02", async () => {
        console.log("Test02");
    });

});
*/