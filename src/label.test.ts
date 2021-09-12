import * as namer from "./";

test("label with all fields", () => {
    const namespace = "huyage";
    const account = "1234";
    const region = "cn-north-1";
    const app = "app";
    const stage = "Prod";
    const name = "component";

    const label = new namer.Label({
        namespace,
        account,
        region,
        app,
        stage,
        name,
    });

    expect(label.toString())
        .toBe(
            [
                namespace,
                account,
                region,
                app,
                stage,
                name
            ].join("-")
        );
});
