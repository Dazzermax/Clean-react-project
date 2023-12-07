/* eslint-disable */
// @ts-nocheck

let count = 0;

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
const getData = async () => {
    await sleep(5000);
    return Promise.resolve(++count);
};


const memoize = (fn, cacheTime) => {
    let lastTimeStamp;
    let result;

    return async function() {
        const now = Date.now();

        let timeBetweenCalls = now - lastTimeStamp;
        
        if (!lastTimeStamp || timeBetweenCalls >= cacheTime) {
            result = await fn()
            lastTimeStamp = Date.now()
        }

        return result
    }
}

// memoize getData on 1000 ms
const getJsonMemoize = memoize(getData, 1000);

(async function(){
  await sleep(3000);
 console.log(await getJsonMemoize()); // 1
 console.log(await getJsonMemoize()); // 1
 await sleep(3000);
 console.log(await getJsonMemoize()); // 2
 console.log(await getJsonMemoize()); // 2
}());

// Напишите реализацию memoize, чтобы она соответствовала поведению выше
