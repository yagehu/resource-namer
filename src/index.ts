interface RawLabelProps {
    readonly segments: Array<string>;
    readonly delimiter?: string;
}

class RawLabel {
    private static readonly defaultDelimiter: string = "-";

    private readonly repr: string;

    constructor(props: RawLabelProps) {
        const delimiter = props.delimiter !== undefined
            ? props.delimiter
            : RawLabel.defaultDelimiter;

        this.repr = props.segments.join(delimiter);
    }

    public toString(): string {
        return this.repr;
    }
}

export interface LabelProps {
    readonly namespace?: string;
    readonly account?: string;
    readonly region?: string;
    readonly app?: string;
    readonly stage?: string;
    readonly name: string;
    readonly delimiter?: string;
}

export class Label extends RawLabel {
    constructor(props: LabelProps) {
        let segments: Array<string> = [];

        appendIfDefined(segments, props.namespace);
        appendIfDefined(segments, props.account);
        appendIfDefined(segments, props.region);
        appendIfDefined(segments, props.app);
        appendIfDefined(segments, props.stage);
        appendIfDefined(segments, props.name);

        super({
            segments,
            delimiter: props.delimiter,
        });
    }
}

function appendIfDefined<T>(array: Array<T>, element: T | undefined) {
    if (element === undefined) {
        return;
    }

    array.push(element);
}
