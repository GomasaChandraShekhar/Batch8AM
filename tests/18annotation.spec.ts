import { test } from '@playwright/test';

test.only("Test01", async () => {
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


// only, skip, fail, fixme, slow