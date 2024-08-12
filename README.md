Minimal reproduction for https://github.com/jest-community/eslint-plugin-jest/issues/1634

Clone & `yarn install` as usual
Run `yarn lint --fix`

Expect some_tests.tsx to have content

```
import { describe, expect, it, jest } from '@jest/globals';
describe("test", () => {
  it("uses jest globals", async () => {
    const mock = jest.fn();
    mock();
    expect(mock).toHaveBeenCalled();
  });
});
```

Actual content

```
const { describe, expect, it, jest } = require('@jest/globals');
describe("test", () => {
  it("uses jest globals", async () => {
    const mock = jest.fn();
    mock();
    expect(mock).toHaveBeenCalled();
  });
});
```
