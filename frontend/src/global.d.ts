

declare function describe(description: string, specDefinitions: () => void): void;
declare function it(expectation: string, assertion: (done: DoneFn) => void, timeout?: number): void;
declare function beforeEach(action: (done: DoneFn) => void, timeout?: number): void;
declare function afterEach(action: (done: DoneFn) => void, timeout?: number): void;
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
declare function afterAll(action: (done: DoneFn) => void, timeout?: number): void;
interface DoneFn extends Function {
    (): void;
    fail: (message?: Error | string) => void;
}

declare function expect(actual: any): jasmine.Matchers<any>;
declare function fail(e?: any): void;
declare function spyOn<T>(object: T, method: keyof T): jasmine.Spy;

declare const jasmine: any;
