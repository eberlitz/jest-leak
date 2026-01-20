Repo to reproduce a Memory leak in Jest when using ESM (--experimental-vm-modules)

Tested with jest 29 and 30.2.0, using nodejs 22, 24 or 25. From my understanding any module loaded leaks, so the bigger your dependency tree the bigger the problem. 

This reproduction creates a module that allocates a 80mb Array and exports it, then I createe 20 exact copies of a `memleak.spec.js` which imports this module.

To run:

```sh
npm install 
npm test
```

You will see:

```
 PASS  src/memleak_0.spec.js (100 MB heap size)
 PASS  src/memleak_2.spec.js (179 MB heap size)
 PASS  src/memleak_17.spec.js (258 MB heap size)
 PASS  src/memleak_16.spec.js (338 MB heap size)
 PASS  src/memleak_14.spec.js (184 MB heap size)
 PASS  src/memleak_1.spec.js (180 MB heap size)
 PASS  src/memleak_5.spec.js (259 MB heap size)
 PASS  src/memleak_4.spec.js (338 MB heap size)
 PASS  src/memleak_15.spec.js (417 MB heap size)
 PASS  src/memleak_12.spec.js (497 MB heap size)
 PASS  src/memleak_20.spec.js (576 MB heap size)
 PASS  src/memleak_9.spec.js (655 MB heap size)
 PASS  src/memleak_7.spec.js (734 MB heap size)
 PASS  src/memleak_18.spec.js (813 MB heap size)
 PASS  src/memLeak.spec.js (892 MB heap size)
 PASS  src/memleak_10.spec.js (971 MB heap size)
 PASS  src/memleak_13.spec.js (1050 MB heap size)
 PASS  src/memleak_11.spec.js (1130 MB heap size)
 PASS  src/memleak_6.spec.js (1209 MB heap size)
 PASS  src/memleak_3.spec.js (1288 MB heap size)
 PASS  src/memleak_19.spec.js (1367 MB heap size)
 PASS  src/memleak_8.spec.js (1446 MB heap size)
```

I also memory profiled and hit a knowledge wall, I do not know how to investigate further from here, but the bug is either in **jest-runtime** or **node:vm**.

<img width="1528" height="879" alt="Image" src="./profiling/Screenshot%202026-01-19%20at%2016.42.07.png" />
