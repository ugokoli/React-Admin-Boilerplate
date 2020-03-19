import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import {ApplicationState} from "../../../../store/reducers";
import {appActionCreators} from "../../../../store/actions";
import {CounterState} from "../../../../store/reducers/Counter.reducer";

type CounterProps =
    CounterState &
    typeof appActionCreators &
    RouteComponentProps<{}>;


class Counter extends React.PureComponent<CounterProps> {
    public render() {
        return (
            <React.Fragment>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.props.count}</strong></p>

                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.props.increment(); }}>
                    Increment
                </button>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.counter,
    appActionCreators
)(Counter as any);
